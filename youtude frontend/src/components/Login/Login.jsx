

import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ setLogimModal }) => {
  const [loginFiled, setLoginFiled] = useState({ userName: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleOnchangeInput = (event, name) => {
    setLoginFiled((prev) => ({ ...prev, [name]: event.target.value }));
  };

  const handleLoginFunc = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:4000/auth/login", loginFiled,{withCredentials:true});

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.user._id);
        localStorage.setItem("userprofilePic", response.data.user.profilePic);
        toast.success("Login successful!");
        setTimeout(() => window.location.reload(), 1000);
      }
    } catch (error) {
      toast.error("Invalid credentials");
      console.error("Login failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 bg-opacity-70 flex justify-center items-center text-white font-[Oswald]">
      <div className="w-[90%] md:w-[50%] lg:w-[40%] bg-black p-10 rounded-lg border border-gray-700 shadow-[0.9px_0.9px_10px_white] relative">
        <div className="flex items-center justify-center text-3xl font-semibold mb-6">
          <i className="ri-youtube-fill text-red-600 text-4xl mr-2"></i>
          Login
        </div>

        {/* Loader */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 rounded-lg">
            <div className="w-12 h-12 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <form className="flex flex-col gap-6">
          <input
            onChange={(e) => handleOnchangeInput(e, "userName")}
            value={loginFiled.userName}
            type="text"
            placeholder="Username"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mx-auto"
          />

          <input
            onChange={(e) => handleOnchangeInput(e, "password")}
            value={loginFiled.password}
            type="password"
            placeholder="Password"
            className="w-3/4 h-12 px-4 text-lg text-white bg-[#222222] border-none rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 mx-auto"
          />

          <div className="flex justify-between w-3/4 mx-auto mt-6 gap-2.5">
            <button
              onClick={handleLoginFunc}
              type="submit"
              className="w-1/3 py-2 bg-red-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-red-700 transition-all disabled:opacity-50"
              disabled={loading}
            >
              Login
            </button>
            <Link
              to="/signup"
              type="button"
              onClick={() => setLogimModal()}
              className="w-1/3 py-2 border border-gray-400 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all flex justify-center items-center"
            >
              Signup
            </Link>
            <button
              onClick={() => setLogimModal()}
              type="button"
              className="w-1/3 py-2 border border-gray-400 text-gray-300 text-lg font-semibold rounded-lg hover:bg-gray-700 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
