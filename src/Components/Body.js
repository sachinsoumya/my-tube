import React from "react";
import { SideBar } from "./SideBar";
import MainContainer from "./MainContainer";
import { useSelector } from "react-redux";

export const Body = () => {
  
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return (
    <MainContainer />
  )


  return (
    <div className="grid  grid-cols-3 lg:grid-cols-6 gap-3 md:grid-cols-4 w-100 ">

      <SideBar />
      <div className="w-full h-full col-span-2  lg:col-span-5 md:col-span-3 ">
        <MainContainer />
      </div>
      {/* <div className="bg-black w-full h-full  lg:col-span-3 md:col-span-2 ">fii</div> */}
      {/* <div className="bg-blue w-full h-full">hii</div>
      <div className="bg-blue w-full h-full">hii</div> */}
      {/* <div className="bg-blue w-full h-full">hii</div> */}
    </div>
  );
};
