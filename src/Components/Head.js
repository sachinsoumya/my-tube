import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
export const Head = () => {
  const dispatch = useDispatch();


  const toggleMenuHandler = ()=>{
    dispatch(toggleMenu());
   
  };


  return (
    <div className="grid grid-cols-6 justify-between gap-x-9 pb-2 pt-1 px-0 lg:px-4 md:gap-x-14 shadow-xl">
      <div className="flex">
        <img
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
          alt="hamburgericon"
          className="w-8 h-8 lg:w-16 lg:h-11 md:h-9 cursor-pointer"
          onClick={()=>toggleMenuHandler()}
        />

        <img
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
          alt="YoutubeLogo"
          className="w-14 h-8  lg:w-28 lg:h-12 md:h-10"
        />
      </div>

      <div className="col-span-4 px-3 md:px-8">
        <input
          type="text"
          className=" h-8  p-1 w-4/6 lg:h-10 border border-black rounded-l-full lg:w-5/6 lg:p-2  md:w-5/6 md:p-5"
          value="search"
        />

        <button className="border border-black p-1 md:p-2 rounded-r-full bg-gray-100 "> Search</button>
      </div>

      <div>
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokYiXVk2pTRq5-0qqY_NZw0ouDDZkcWiJWOQZ0NVW2fXKAVFHQHH7lSwGLyBLg3VwOik&usqp=CAU "
          className=" w-10 h-8 lg:w-16 lg:h-14  md:h-10"
          alt="UserIcon"
        />
      </div>
    </div>
  );
};
