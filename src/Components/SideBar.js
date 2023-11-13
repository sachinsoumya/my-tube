import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CATEGORY_RESULTS_API } from "../Utils/Constant";
import {AiOutlineHome} from 'react-icons/ai'

export const SideBar = () => {
  const [list, setList] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(CATEGORY_RESULTS_API);
    const json = await data.json();

    console.log(json.items);
    setList(json.items);
  };

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="px-3 md:px-7 shadow-lg  w-28 md:w-40 lg:w-48 ">
      <div className="font-medium py-2 text-xs md:text-base">
        <ul>
          <Link to="/">
            <li className="pt-3 hover:bg-slate-200 hover:border hover:border-slate-200 hover:rounded-lg"><AiOutlineHome  />Home</li>
          </Link>
          <li className="pt-3 hover:bg-slate-200 hover:border hover:border-slate-200 hover:rounded-lg">Shorts</li>
          <li className="pt-3 hover:bg-slate-200 hover:border hover:border-slate-200 hover:rounded-lg">Subscription</li>
        </ul>
      </div>
      <div className="py-2">
        <h1 className="font-bold text-xs md:text-base">Explore</h1>
        <ul className="font-normal text-xs md:text-base">
          {list &&
            list.map((item) => {
              return (
                [1, 2, 10, 15, 17, 20, 22, 23, 24, 25, 26, 28].includes(
                  Number(item.id)
                ) && (
                  <Link to={`/catagory/${item.id}`} key={item.id}>
                    <li className="py-2 hover:bg-slate-200 hover:border hover:border-slate-200 hover:rounded-lg">{item.snippet.title}</li>
                  </Link>
                )
              );
            })}
          {/* <li className="pt-3">Music</li>
          <li className="pt-3">Sports</li>
          <li className="pt-3">Gaming</li>
          <li className="pt-3">Flims</li> */}
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
