import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import VideoCart from "./VideoCart";

const VideoContainer = () => {
  const [videos , setVideos] = useState([])
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
  <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 ">
     {videos.map((video)=> <VideoCart info = {video} />)}
     

  </div>
  );
};

export default VideoContainer;
