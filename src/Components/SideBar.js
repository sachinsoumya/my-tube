import React from "react";
import { useSelector } from "react-redux";

export const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="px-3 md:px-7 shadow-lg  w-28 md:w-40 lg:w-48 ">
      <div className="font-medium py-2 text-xs md:text-base">
        <ul>
          <li className="pt-3">Home</li>
          <li className="pt-3">Shorts</li>
          <li className="pt-3">Subscription</li>
        </ul>
      </div>
      <div className="py-2">
        <h1 className="font-bold text-xs md:text-base">Explore</h1>
        <ul className="font-normal text-xs md:text-base">
          <li className="pt-3">Music</li>
          <li className="pt-3">Sports</li>
          <li className="pt-3">Gaming</li>
          <li className="pt-3">Flims</li>
        </ul>
      </div>
      <div className=" py-2">
        <h1 className="font-bold text-xs md:text-base">You</h1>
        <ul className="font-normal text-xs md:text-base">
          <li className="pt-3">Your Channek</li>
          <li className="pt-3">History</li>
          <li className="pt-3">Watch Later</li>
          <li className="pt-3">Liked vedios</li>
        </ul>
      </div>
    </div>
  );
};
