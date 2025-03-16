import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import "remixicon/fonts/remixicon.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/video/Video";
import Profile from "./pages/profile/Profile";
import VideoUpload from "./pages/videoupload/VideoUpload";
import Signup from "./pages/signup/Signup";
import axios from "axios";


function App() {
  const [sidenavbar, setSideNavBar] = useState(true);
  
  const setSideNavBarfun = (value) => {
    setSideNavBar(value);
  };
  return (
    <>
      <Navbar setSideNavBarfun={setSideNavBarfun} sidenavbar={sidenavbar} />
      <Routes>
        <Route path="/" element={<Home sidenavbar={sidenavbar} />} />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/user/:id" element={<Profile sidenavbar={sidenavbar} />} />
        <Route path="/:id/upload" element={<VideoUpload />} />
        <Route path="/signUp" element={<Signup />} />
         
      </Routes>
    </>
  );
}

export default App;
