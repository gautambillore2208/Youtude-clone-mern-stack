import React from 'react'
import clsx from "clsx";

const SideNavBar = ({sidenavbar}) => {
  return (
    



    //<div className={sidenavbar?`home-sideNavbar flex flex-col flex-[0.16_1] box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[275px] p-4 bg-black text-white:display-none`}>
    
<div className={`${sidenavbar ? "flex" : "hidden"} home-sideNavbar flex-col flex-[0.16_1] box-border h-[92vh] overflow-y-auto fixed top-[55px] left-0 w-[275px] p-4 bg-black text-white`}>

  <div className="flex flex-col border-b border-[rgb(86,85,85)] pb-2">
    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
      <i className="ri-home-4-line"></i>
      <div className='text-base font-semibold'>Home</div>
    </div>

    <div className= " flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-video-on-line"></i>
      <div className='text-base font-semibold'>Short</div>
    </div>



    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-indent-increase"></i>
      <div  className='text-base font-semibold'>subscription</div>
    </div>



  </div>


{/*  */}


  <div  className="flex flex-col border-b border-gray-600 py-2">

        
    
    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <div  className='text-xl font-semibold'>You</div>
    <i class="ri-arrow-right-wide-line"></i>
   
    </div>

      

    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-file-user-line"></i>
      <div  className='text-sm font-semibold'>Your Channel</div>
    </div>



    
    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-history-line"></i>
      <div  className='text-sm font-semibold'>History</div>
    </div>






    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-play-list-line"></i>
      <div  className='text-sm font-semibold'>Your playlist</div>
    </div>





    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-movie-line"></i>
      <div  className='text-sm font-semibold'>Your video</div>
    </div>





    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-history-line"></i>
      <div  className='text-sm font-semibold'>Watch later</div>
    </div>



    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-thumb-up-line"></i>
      <div  className='text-sm font-semibold'>Liked Video</div>
    </div>




    <div className="text-xl font-semibold flex gap-5 items-center px-[10px] py-[9px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]">
    <i class="ri-scissors-cut-line"></i>
      <div  className='text-sm font-semibold'>Your Clips</div>
    </div>


  </div>



{/*  */}
     


     <div className='flex flex-col border-b border-gray-600 py-2'>
      <div className='flex gap-5 items-center p-[9px_10px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]'>
        <div className='font-semibold'>Subscription</div>
      </div>
         



         <div className='flex gap-5 items-center p-[9px_10px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]' >
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8mqdlk254n_KdqSN1fTHoiqevIclLqa-Lew&s' alt="logo" className='"w-[25px] h-[25px] rounded-full bg-gray-300"' />
          <div className='font-semibold'>Aaj Tak</div>
         </div>






         
         <div className='flex gap-5 items-center p-[9px_10px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]' >
          <img src='https://w0.peakpx.com/wallpaper/707/449/HD-wallpaper-carryminati-carrylogo.jpg' alt="logo" className='"w-[25px] h-[25px] rounded-full bg-gray-300"' />
          <div className='font-semibold'>Carryminati</div>
         </div>






         
         <div className='flex gap-5 items-center p-[9px_10px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]' >
          <img src='https://sosimg.sgp1.cdn.digitaloceanspaces.com/artist-gallery/9067487_1701950323.webp' alt="logo" className='"w-[25px] h-[25px] rounded-full bg-gray-300"' />
          <div className='font-semibold'>Samay Raina </div>
         </div>






           
         <div className='flex gap-5 items-center p-[9px_10px] rounded-[15px] cursor-pointer hover:bg-[rgb(35,35,35)]' >
          <img src='https://upload.wikimedia.org/wikipedia/en/7/78/India%27s_Got_Latent_logo.jpg' alt="logo" className='"w-[25px] h-[25px] rounded-full bg-gray-300"' />
          <div className='font-semibold'>india's got latent </div>
         </div>




     </div>
    



</div>






  )
}

export default SideNavBar