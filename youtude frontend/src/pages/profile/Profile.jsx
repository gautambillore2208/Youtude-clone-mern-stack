

import React from "react";
import SideNavBar from "../../components/sideNavbar/SideNavBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
const Profile = ({ sidenavbar }) => {
    const [data,setData] = useState([]);
    const [user,SetUser] = useState(null)
    const {id} = useParams()

    const fetchProfileData = async ()=>{
      axios.get(`http://localhost:4000/api/${id}/channel`).then((res)=>{
        setData(res.data.video);
        SetUser(res.data.video[0]?.user)
     
        
      }).catch(err=>{
      console.log(err);
      
    })
      
      
    }

    useEffect(()=>{
      fetchProfileData()
    },[])

  return (
    <div className="profile flex w-full min-h-screen p-3 box-border bg-black text-white">
      {/* Sidebar */}
      <SideNavBar sidenavbar={sidenavbar} />

      {/* Main Profile Section */}
      <div
        className={`flex flex-col overflow-x-hidden flex-1 text-white justify-center items-center transition-all duration-300 
          ${sidenavbar ? "ml-[270px] mt-[56px]" : "mt-14"} 
          md:mt-10 lg:mt-14 px-4 md:px-6 w-full`}
      >
        {/* Profile Top Section */}
        <div className="w-full flex flex-col md:flex-row items-center md:items-start pb-5">
          <div className="w-32 h-32 md:w-40 md:h-40">
            <img
              src={user?.profilePic}
              alt="logo"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 px-4 text-center md:text-left md:w-4/5">
            <div className="text-2xl md:text-3xl font-semibold">{user?.channelName}</div>
            <div className="text-sm md:text-base text-gray-400">{user?.userName} . {data.length} video</div>
            <div className="text-sm md:text-base text-gray-400">{user?.about}</div>
          </div>
        </div>

        {/* Profile Videos Section */}
        <div className="profile_video w-full">
          <div className="text-lg md:text-xl pb-3 text-gray-300 font-medium flex items-center border-b border-gray-500">
            Videos <i className="text-2xl md:text-3xl ri-arrow-right-s-fill"></i>
          </div>

          {/* Video Grid */}
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center mt-5">
            

            {
              data.map((item,index)=>{
                return(
                  <Link
                  to={`/watch/${item._id}`}
                  key={index}
                  className="w-[100%] sm:w-[48%] md:w-[32%] lg:w-[210px] text-white cursor-pointer no-underline"
                >
                  <div className="w-full h-40">
                    <img
                      src ={item?.thumbnail}
                      className="w-full h-full rounded-md"
                      alt="Thumbnail"
                    />
                  </div>
  
                  <div className="flex flex-col w-full mt-2">
                    <div className="text-sm md:text-base font-semibold">{item?.title}</div>
                    <div className="text-xs md:text-sm text-gray-400">Created at {item?.createdAt.slice(0,10)}</div>
                  </div>
                </Link>

                )
              })
            }
              
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
