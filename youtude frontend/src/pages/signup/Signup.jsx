


import React, { useState, useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Signup = () => {
  const [isUploading, setIsUploading] = useState(false); // Loader state
  const [UploadedImageUrl, setUploadedImageUrl] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSiuyU9-RrWbAAECM2sN3OU3FXC29SI690Sw&s"
  );
  const navigate  = useNavigate()

  const [signupfiled, setSignUpFiled] = useState({
    channelName: "",
    userName: "",
    password: "",
    about: "",
    profilePic: UploadedImageUrl,
  });

  // Sync profilePic with uploaded image
  useEffect(() => {
    setSignUpFiled((prev) => ({
      ...prev,
      profilePic: UploadedImageUrl,
    }));
  }, [UploadedImageUrl]);

  const handleInputFiled = (event, name) => {
    setSignUpFiled((prev) => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  const uploadImage = async (e) => {
    console.log("Uploading...");
    setIsUploading(true); // Show loader

    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "youtube-clone");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dkcpiokrn/image/upload",
        data
      );
      const imageUrl = response.data.url;
      setUploadedImageUrl(imageUrl);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Image upload failed!");
    } finally {
      setIsUploading(false); // Hide loader
    }
  };

  const handleSignUp = async () => {
    // console.log("Data before sending:", signupfiled);

    if (!signupfiled.channelName || !signupfiled.userName || !signupfiled.about) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/auth/signUp",
        signupfiled
      );
      console.log("Signup successful:", response.data);
      toast.success("Signup Successful!");
      navigate('/')
    } catch (err) {
      console.log("Signup error:", err.response?.data || err.message);
      toast.error("Signup failed! Try again.");
    }
  };

  return (
    <div className="mt-14 w-full flex flex-col items-center min-h-screen bg-black text-white">
      <div className="w-2/5 border border-white p-6 mt-8 flex flex-col items-center justify-center shadow-lg shadow-white rounded-lg">
     

        <div className="flex items-center justify-center text-3xl font-semibold mb-6">
          <i className="ri-youtube-fill text-red-600 text-4xl mr-2"></i>
          SignUp
        </div>

        <div className="flex flex-col gap-4 w-full items-center">
          <input
            onChange={(e) => handleInputFiled(e, "channelName")}
            value={signupfiled.channelName}
            type="text"
            placeholder="Channel Name"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            onChange={(e) => handleInputFiled(e, "userName")}
            value={signupfiled.userName}
            type="text"
            placeholder="Username"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            onChange={(e) => handleInputFiled(e, "password")}
            value={signupfiled.password}
            type="password"
            placeholder="Password"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            onChange={(e) => handleInputFiled(e, "about")}
            value={signupfiled.about}
            type="text"
            placeholder="About Channel"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* File Upload Section with Loader */}
        <div className="flex flex-col gap-3 items-center mt-6">
          <label className="flex flex-col items-center gap-2 bg-[#1e1e1e] p-3 rounded-md cursor-pointer hover:bg-[#292929] transition-all">
            <span className="text-lg">{isUploading ? "Uploading..." : "Upload Profile Image"}</span>
            <input
              type="file"
              onChange={(e) => uploadImage(e)}
              accept="image/*"
              className="hidden"
            />
          </label>
          <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700 flex items-center justify-center">
            {isUploading ? (
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div> // Unique Loader
            ) : (
              <img
                src={UploadedImageUrl}
                alt="Preview"
                className="w-full h-full object-cover transition-all duration-500"
              />
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5 w-full">
          <button
            onClick={handleSignUp}
            className="px-6 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all"
          >
            Signup
          </button>
          <Link
            to={"/"}
            className="px-6 py-2 border border-gray-400 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all"
          >
            Homepage
          </Link>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Signup;






