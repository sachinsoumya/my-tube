import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";
import VideoDes from "./VideoDes";

import CommentBox from "./CommentBox";

const Watchpage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div>
      <div className="grid lg:grid-cols-3 grid-cols-1 ">
        <div className="col-span-2">
          <div className="lg:w-full lg:h-[32rem] md:h-[33rem] w-full h-60 p-2">
            <iframe
              className="w-full h-full rounded md:rounded-lg lg:rounded-lg"
              src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
              title="ଚହଳ | Chahala | Full Video Song | Malyagiri | Babushaan | Sivani | Ananya | Gaurav | JP Wordsmith"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <VideoDes videoId={searchParams.get("v")} />
        </div>
        <div className="w-full h-96 bg-slate-400">
          hii

        </div>
      </div>
      <CommentBox videoId = {searchParams.get("v")} />
    </div>
  );
};

export default Watchpage;
