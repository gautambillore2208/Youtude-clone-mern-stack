
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Video = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [comment, setComment] = useState([]);

  const fetchVideoById = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/getVideoById/${id}`);
      setData(res.data.video);
      setVideoUrl(res?.data?.video?.videoLink);
    } catch (error) {
      toast.error("Failed to load video. Please try again.");
    }
  };

  const getCommentByVideoId = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/commentApi/comment/${id}`);
      setComment(res.data.comment);
    } catch (error) {
      toast.error("Error fetching comments.");
    }
  };

  useEffect(() => {
    fetchVideoById();
    getCommentByVideoId();
  }, [id]);

  const handleComment = async () => {
    if (!message.trim()) {
      toast.warn("Comment cannot be empty.");
      return;
    }

    const body = {
      message: message,
      video: id, // Changed key from "Video" to "video"
    };

    try {
      const res = await axios.post("http://localhost:4000/commentApi/comment", body, { withCredentials: true });
      const newComment = res.data.comment;
      setComment([newComment, ...comment]);
      setMessage("");
      toast.success("Comment added successfully!");
    } catch (error) {
      toast.error("Failed to post comment.");
    }
  };

  return (
    <div className="bg-black mt-[56px]  flex flex-col lg:flex-row text-white py-[30px] justify-center px-4">
      <div className="w-full max-w-[875px] flex flex-col">
        <div className="w-full">
          {data && (
            <video controls autoPlay className="w-full rounded-[10px]">
              <source src={videoUrl} type="video/mp4" />
              <source src={videoUrl} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        <div className="flex flex-col mt-4">
          <div className="text-[20px] font-bold">{data?.title}</div>

          <div className="profileblock flex flex-wrap mt-3 justify-between">
            <div className="left flex gap-4">
              <Link to={`/user/${data?.user?._id}`} className="w-9 h-9 cursor-pointer">
                <img src={data?.user?.profilePic} alt="profile" className="w-full h-full rounded-full" />
              </Link>
              <div className="subview flex flex-col">
                <div className="profilename font-medium text-[18px]">{data?.user?.channelName}</div>
                <div className="profilesubs text-[14px] text-[#AAAAAA]">{data?.user?.createdAt.slice(0, 10)}</div>
              </div>
              <button className="bg-white text-black px-4 rounded-[18px] flex justify-center items-center h-[36px] font-semibold cursor-pointer text-[14px]">
                Subscribe
              </button>
            </div>

            <div className="right flex gap-[10px] bg-[#a5a5a538] p-[10px] rounded-[18px] cursor-pointer">
              <div className="like flex gap-2.5">
                <i className="ri-thumb-up-line text-xl"></i>
                <span className="font-medium">{data?.like}</span>
              </div>
              <div className="w-[1px] h-5 bg-white"></div>
              <i className="ri-thumb-down-line text-xl"></i>
            </div>
          </div>

          <div className="about flex flex-col p-3 bg-[#a5a5a538] w-full rounded-[10px] font-medium text-[14px] gap-[10px] mt-[10px]">
            <div>{data?.createdAt.slice(0, 10)}</div>
            <div className="text-xl font-semibold">{data?.description}</div>
            <div>This is about the video</div>
          </div>

          <div className="comments flex flex-col mt-5">
            <div className="text-[20px] font-medium">{comment.length} Comments</div>

            <div className="flex items-start gap-3 mt-3">
              <img
                src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                alt="profile"
                className="w-[35px] h-[35px] rounded-full"
              />
              <div className="flex w-full flex-col gap-3">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  type="text"
                  className="w-full bg-black text-white h-[35px] border-b border-gray-500 focus:outline-none placeholder:text-[16px]"
                  placeholder="Add a Comment"
                />
                <div className="flex justify-end gap-3">
                  <button className="px-4 py-2 border border-white rounded-[18px] hover:bg-white hover:text-black transition">
                    Cancel
                  </button>
                  <button
                    onClick={handleComment}
                    className="px-4 py-2 border border-white rounded-[18px] hover:bg-white hover:text-black transition"
                  >
                    Comment
                  </button>
                </div>
              </div>
            </div>

            <div className="other flex flex-col gap-2.5 mt-5">
              {comment.map((item, index) => (
                <div key={item._id || index} className="flex gap-3">
                  <img src={item?.user?.profilePic} alt="profile" className="w-[35px] h-[35px] rounded-full" />
                  <div className="flex flex-col">
                    <div className="flex gap-2.5">
                      <span className="text-[14px] font-medium">{item?.user?.channelName}</span>
                      <span className="text-[14px] text-[#AAAAAA]">{item?.createdAt.slice(0, 10)}</span>
                    </div>
                    <p className="mt-2.5">{item?.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="videosuggestion w-full max-w-[406px] p-4 flex flex-col gap-5">
        {[1, 2,3,4,5,6,7,8,9].map((_, index) => (
          <div key={index} className="flex gap-4 cursor-pointer">
            <div className="w-[168px] h-[94px]">
              <img
                src="https://cdn.dribbble.com/userupload/8112204/file/original-d5acaf96ef2a94881d690b00d05d60c2.png?format=webp&resize=400x300&vertical=center"
                alt="thumbnail"
                className="w-full h-full rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-[15px] font-medium mb-1.5">Video Title</div>
              <div className="text-[12px] text-[#ffffff9c]">Channel Name</div>
              <div className="text-[12px] text-[#ffffff9c]">136k views • 1 day ago</div>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Video;
