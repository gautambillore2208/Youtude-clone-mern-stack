

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const VideoUpload = () => {
  const [inputField, setInputField] = useState({
    title: "",
    description: "",
    videoLink: "",
    thumbnail: "",
    videoType: "",
  });

  const [isLoading, setIsLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  // Handle form inputs
  const handleInputField = (event, name) => {
    setInputField((prev) => ({ ...prev, [name]: event.target.value }));
  };

  // Upload Image or Video to Cloudinary
  const uploadFile = async (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsLoading(true); // Show loader

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "youtube-clone");

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dkcpiokrn/${type}/upload`,
        data
      );
      const url = response.data.secure_url; // Secure URL

      setInputField((prev) => ({
        ...prev,
        [type === "image" ? "thumbnail" : "videoLink"]: url,
      }));
    } catch (error) {
      console.error("Error uploading to Cloudinary:", error);
    } finally {
      setIsLoading(false); // Hide loader after upload
    }
  };

  // Ensure user is logged in
  useEffect(() => {
    const isLogin = localStorage.getItem("userId");
    if (!isLogin) navigate("/");
  }, [navigate]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent reload

    try {
      const res = await axios.post("http://localhost:4000/api/video", inputField, {
        withCredentials: true,
      });
      console.log("Video Uploaded:", res.data);
      navigate("/"); // Redirect after upload
    } catch (err) {
      console.error("Error uploading video:", err);
    }
  };

  return (
    <div className="w-full pt-14 h-screen flex flex-col items-center bg-black text-white font-[Oswald]">
      {/* Upload Box */}
      <div className="w-[90%] md:w-[60%] lg:w-[45%] bg-[#121212] p-6 rounded-lg shadow-lg border border-gray-700 mt-6">
        {/* Upload Video Title */}
        <div className="flex items-center justify-center text-2xl md:text-3xl font-semibold text-white">
          <i className="ri-youtube-fill text-red-600 text-3xl mr-2"></i>
          Upload Video
        </div>

        {/* Upload Form */}
        <form className="flex flex-col gap-5 mt-6" onSubmit={handleSubmit}>
          {/* Input Fields */}
          <input
            onChange={(e) => handleInputField(e, "title")}
            value={inputField.title}
            type="text"
            placeholder="Title of Video"
            className="w-full h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
          />
          <input
            onChange={(e) => handleInputField(e, "description")}
            value={inputField.description}
            type="text"
            placeholder="Description"
            className="w-full h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
          />
          <input
            onChange={(e) => handleInputField(e, "videoType")}
            value={inputField.videoType}
            type="text"
            placeholder="Category"
            className="w-full h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 shadow-inner"
          />

          {/* File Uploads */}
          <div className="flex flex-col gap-3 text-gray-300">
            <label className="flex flex-col items-center gap-2 bg-[#1e1e1e] p-3 rounded-md cursor-pointer hover:bg-[#292929] transition-all shadow-md">
              <span className="text-lg">
                {isLoading ? "Uploading..." : "Upload Thumbnail"}
              </span>
              <input type="file" accept="image/*" onChange={(e) => uploadFile(e, "image")} className="hidden" />
            </label>

            <label className="flex flex-col items-center gap-2 bg-[#1e1e1e] p-3 rounded-md cursor-pointer hover:bg-[#292929] transition-all shadow-md">
              <span className="text-lg">
                {isLoading ? "Uploading..." : "Upload Video"}
              </span>
              <input type="file" accept="video/*" onChange={(e) => uploadFile(e, "video")} className="hidden" />
            </label>
          </div>

          {/* Loader */}
          {isLoading && (
            <div className="flex justify-center mt-3">
              <div className="w-8 h-8 border-4 border-white border-t-red-600 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Upload Buttons */}
          <div className="flex justify-center gap-4 mt-5">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all"
              disabled={isLoading} // Disable while loading
            >
              {isLoading ? "Uploading..." : "Upload"}
            </button>
            <Link
              to="/"
              className="px-6 py-2 border border-gray-400 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all shadow-md"
            >
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VideoUpload;

