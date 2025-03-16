

import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePages = ({ sidenavbar }) => {

  const [data,setData] = useState([]);


  useEffect(()=>{
      axios.get('http://localhost:4000/api/allvideo').then(res=>{
    
      
        setData(res.data.videos);
        
      }).catch(err=>{
        console.log(err);
        
      })
    },[])

  const options = [
    "All",
    "T20 Cricket",
    "Music",
    "Live",
    "Mixes",
    "Gaming",
    "Debates",
    "Coke Studio Pakistan",
    "Democracy",
    "Pakistani Drama",
    "Comedy",
    "Pakistani Music",
    "Debates",
    "Live",
    "Mixes",
    "Gaming",
  ];

  return (
    <div
      className={`flex flex-col flex-1 min-h-screen transition-all duration-300 ${
        sidenavbar ? "ml-[270px] w-[calc(100%-270px)]" : "ml-0 w-full"
      }`}
    >
      <div
        className={`homePage_options flex fixed top-[56px] z-[10] w-full box-border gap-2 flex-shrink-0 h-auto overflow-x-scroll bg-black p-2 transition-all duration-300 ${
          sidenavbar ? "left-[270px] w-[calc(100%-270px)]" : "left-0 w-full"
        }`}
      >
        {options.map((item, index) => (
          <div
            key={index}
            className="flex flex-none h-[30px] px-4 py-1 bg-[#2A2A2A] text-white font-semibold rounded-md justify-center items-center cursor-pointer"
          >
            {item}
          </div>
        ))}
      </div>

      {/* <div className={`grid bg-black box-border gap-2 grid-cols-[384px_384px_384px] pt-[90px] pb-[20px] h-screen${sidenavbar?'"grid box-border gap-[30px] grid-cols-[326px_326px_326px_326px] p-[90px_0_20px_10px] bg-black"'}`}> */}
      <div className={`grid box-border bg-black gap-[30px] pt-[90px] pb-[20px] h-full 
  ${sidenavbar ? "grid-cols-3 px-[10px]" : "grid-cols-4 px-[10px]"}`}>

    {
      data?.map((item,index)=>{
        return(
              
        <Link to={`/watch/${item._id}`} className="text-white no-underline flex flex-col box-border cursor-pointer h-[316px]">
        <div className="w-full  relative box-border h-[216px] ">
          <img
            src={item.thumbnail}
            alt=""
            className="w-full h-full rounded-[10px]"
          />
          <div className="absolute bottom-0 right-0 w-auto px-[2px] py-[1px] bg-[#2A2A2A] rounded-[5px]">
            22:22
          </div>
        </div>

        <div className="pt-2.5 flex">
          <div className="w-[50px] h-[50px] flex items-center justify-center">
            <img
              src={item?.user?.profilePic }
              alt=""
              className="w-[80%] rounded-full"
            />
          </div>
          <div className="w-full p-[5px] box-border flex flex-col">
            <div className="font-semibold text-[16px]">{item?.title}</div>
            <div className="mt-[5px] text-[18px] text-[#AAAAAA]">{item?.user?.channelName}</div>
            <div className="text-[14px] text-[#AAAAAA]">{item?.like} Likes</div>
          </div>
        </div>
      </Link>

        )
      })
    }














      </div>
    </div>
  );
};

export default HomePages;

































