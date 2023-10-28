import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import VideoCart from "./VideoCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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

  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen)
  if(!isMenuOpen){
    return(
      <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5">
        {videos.map((video)=> <Link to={`/watch?v=${video.id}`}><VideoCart info = {video} /></Link>)}
         

      </div>
    )
  }

  return (
  <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 ">
     {videos.map((video)=><Link to={`/watch?v=${video.id}`}><VideoCart info = {video} /></Link> )}
     

  </div>
  );
};

export default VideoContainer;
