import React, { useEffect, useState } from "react";
import { VIDEO_DESCRIPTION_API } from "../Utils/Constant";
import Channel from "./Channel";
import { useSelector } from "react-redux";
import { AiOutlineLike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { BiDislike } from "react-icons/bi";
import Shimmer4 from "./Shimmer/Shimmer4";
import Error from "./Error";

const VideoDes = ({ videoId }) => {
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  const [readButton, setReadButton] = useState("...more");
  const [error , setError] = useState("");
  const analytics = useSelector((store) => store.statistics.statistics);
  // console.log(analytics)
  const { viewCount, likeCount } = analytics;

  // console.log(viewCount);
  // console.log(likeCount);
  // console.log(favoriteCount);

  console.log(videoId);
  useEffect(() => {
    getDescription(videoId);
  }, [videoId]);

  const getDescription = async (videoId) => {
    try{
    const data = await fetch(VIDEO_DESCRIPTION_API + videoId);
    const json = await data.json();
    // console.log(json);--api call data
    setDescription(json.items[0].snippet);
    // setDescription("");
    setText(json.items[0].snippet.description.slice(0, 150));
    }catch(error){
      // console.log(error.message); - error message 
      setError(error.message);
    }
  };

  // if(description){
  //   // setText(description.description.slice(0,15))
  //   console.log("hiii")
  // }

  const desMagic = () => {
    if (text.length < 151) {
      setText(description.description);
      setReadButton("show less");
    } else {
      setText(description.description.slice(0, 150));
      setReadButton("...more");
    }
  };

  return  !error  ? (
    <div className="px-2">
      {description ? (
        <div>
          <div className="font-bold text-xl py-2">{description.title}</div>
          <div className="grid  md:grid-cols-2 grid-col-1  gap-4 w-full py-4">
            <div className="flex justify-between">
              <div className="font-bold text-sm  p-2">
                <Channel channelId={description.channelId} />
              </div>
              <div className="font-bold text-sm self-center md:justify-self-start justify-self-end">
                <button className="bg-black text-white w-24 p-2 border border-black rounded-full font-medium text-center">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex self-center justify-around text-lg">
              <div className=" rounded-lg bg-zinc-100 flex justify-evenly  lg:w-32 md:w-28 w-24">
                <div className=" hover:bg-zinc-200 lg:w-16 md:w-14 w-12 rounded-lg">
                  <AiOutlineLike className="inline" />
                  <span className="lg:text-sm md:text-[0.7rem] text-[0.55rem]">
                    {likeCount}
                  </span>
                </div>{" "}
                <div className=" hover:bg-zinc-200  md:w-14 text-center w-12 rounded-lg">
                  <BiDislike className="inline" />
                </div>{" "}
              </div>
              <div className="bg-zinc-100 rounded-lg hover:bg-zinc-200 text-center lg:w-32 md:w-28 w-24">
                <PiShareFat className="inline" />
              </div>
              <div className="bg-zinc-100 rounded-lg hover:bg-zinc-200 text-center lg:w-32 md:w-28 w-24">
                <LiaDownloadSolid className="inline" />
              </div>
            </div>
          </div>
          <div className="bg-zinc-300  w-full py-4 shadow-lg rounded-lg">
            <div className="font-semibold text-sm my-1">
              {viewCount} views{"  "}
              {description.publishedAt}
            </div>
            <div className="font-semibold my-1">
              {text}...{" "}
              <div className="cursor-pointer" onClick={() => desMagic()}>
                {readButton}
              </div>
            </div>
            <div className="text-blue-600">
              <ul>
                shadow-lg rounded-lg
                {description.tags &&
                  description.tags.map((item) => {
                    return <li key={item}>#{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      ):<Shimmer4 />}
    </div>
  ): (
    <div><Error error={error}/></div>
  );
};

export default VideoDes;
