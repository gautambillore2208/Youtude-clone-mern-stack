

import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import axios from "axios";

const Navbar = ({ setSideNavBarfun, sidenavbar }) => {
  const [userpic,setUserPic] = useState(
    "https://media.istockphoto.com/id/1451587807/vector/user-profile-icon-vector-avatar-or-person-icon-profile-picture-portrait-symbol-vector.jpg?s=612x612&w=0&k=20&c=yDJ4ITX1cHMh25Lt1vI1zBn2cAKKAlByHBvPJ8gEiIg="
  );
  const [navbarmodal, setNavBarModal] = useState(false);
  const [login, setLogin] = useState(false);
  const [logedIn,setLogedIn] = useState(false)
  const navigate = useNavigate();

  const handleClickModal = () => {
    setNavBarModal((prev) => !prev);
  };

  const sideNavbarFunc = () => {
    setSideNavBarfun(!sidenavbar);
  };

  const handleProfile = () => {
   let userId =    localStorage.getItem("userId")
    navigate(`/user/${userId}`);
    setNavBarModal(false);
  };

  const onClickOfPopUpOption = (button) => {
    setNavBarModal(false);
    if (button === "login") {
      setLogin(true);
    } else {
      localStorage.clear()
      getLogoutFun();
      setTimeout(() => {
        navigate('/')
        window.location.reload();
    }, 2000);
    }
  };

  const  getLogoutFun = async ()=>{
    axios.post("http://localhost:4000/auth/logout",{},{withCredentials:true}).then((res)=>{
      console.log("logout");
      
    })
  }

  const setLogimModal = (val) => {
    setLogin(false);
  };


  useEffect(()=>{
    let userprofilepic = localStorage.getItem("userprofilePic");
    setLogedIn(localStorage.getItem("userId")!==null?true:false)
    if(userprofilepic!==null){
      setUserPic(userprofilepic)
    }
  },[])

  return (
    <div className="flex justify-between items-center fixed top-0 bg-black z-50 h-14 w-full px-4 md:px-6">
      {/* Left Section: Menu + YouTube Logo */}
      <div className="flex items-center gap-3">
        {/* Menu Icon */}
        <div
          className="w-10 h-10 flex justify-center items-center cursor-pointer hover:bg-gray-800 rounded-full"
          onClick={sideNavbarFunc}
        >
          <i className="ri-menu-line text-white text-xl"></i>
        </div>

        <Link
          to="/"
          className="flex items-center text-amber-50 p-2  hover:opacity-80 transition-all shadow-md"
        >
          <div className="bg-red-600  p-2 rounded-xl flex justify-center items-center shadow-lg">
            <i className="ri-play-fill text-2xl "></i>
          </div>
          <span className="text-xl tracking-wide font-bold text-white hidden sm:block ml-2">
            YouTube
          </span>
        </Link>
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2.5 w-1/2">
        <div className="w-full flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-10 rounded-l-full bg-[#121212] text-white border border-gray-600 text-xl pl-4 outline-none"
          />
          <button className="w-12 h-10 bg-[#282828] border border-gray-600 rounded-r-full hover:bg-[#3a3a3a]">
            <i className="ri-search-line text-white text-2xl"></i>
          </button>
        </div>
        <button className="w-10 h-10 flex justify-center items-center bg-[#424242] rounded-full hover:bg-[#3a3a3a]">
          <i className="text-white ri-mic-fill"></i>
        </button>
      </div>

      {/* Right Section: Profile & Icons */}
      <div className="flex gap-4 sm:gap-5 items-center relative">
        <Link to={"/7632/upload"}>
          <i className="text-white text-2xl sm:text-3xl cursor-pointer ri-video-add-line"></i>
        </Link>

        <i className="ri-notification-line text-white text-2xl sm:text-3xl cursor-pointer"></i>
        <img
          onClick={handleClickModal}
          alt="User Profile"
          className="w-8 sm:w-10 cursor-pointer rounded-full"
          src={userpic}
        />

{navbarmodal && (
  <div className="absolute top-14 right-0 w-40 z-50 bg-gray-500 shadow-lg rounded-md overflow-hidden">
    {logedIn ? (
      <>
        <button
          className="w-full p-2 text-left hover:bg-gray-700"
          onClick={() => onClickOfPopUpOption("profile")}
        >
          Profile
        </button>
        <button
          className="w-full p-2 text-left hover:bg-gray-700"
          onClick={() => onClickOfPopUpOption("logout")}
        >
          Log Out
        </button>
      </>
    ) : (
      <button
        className="w-full p-2 text-left hover:bg-gray-700"
        onClick={() => onClickOfPopUpOption("login")}
      >
        Login
      </button>
    )}
  </div>
)}
















      </div>

      {login && <Login setLogimModal={setLogimModal} />}
    </div>
  );
};

export default Navbar;



























