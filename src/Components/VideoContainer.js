import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import VideoCart , {AdVideoCard} from "./VideoCart";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";



const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const navigate= useNavigate();
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  const searchResullts = useSelector((store)=>store.searchValue.results)
  console.log(searchResullts.length)

 
    
  

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) {
    if(searchResullts.length!==0){
      return (<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
      {searchResullts.map((video) => (
        <Link to={`/watch?v=${video.id.videoId}`} key={video.id}>
          <VideoCart info={video} />
        </Link>
      ))}
    </div>)

    }else{
    return videos && (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
        {videos.map((video) => (
          <Link to={`/watch?v=${video.id}`} key={video.id}>
            <VideoCart info={video} />
          </Link>
        ))}
      </div>
    );
  }
}
  else{
    if(searchResullts.length!==0){
      return (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full ">
          {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
          {searchResullts.map((video) => (
            <Link to={`/watch?v=${video.id.videoId}`}>
              <VideoCart info={video} />
            </Link>
          ))}
        </div>
      );

    }else{
      
      return videos && (
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full">
          {videos[0] && <AdVideoCard info={videos[0]}/>}
          {videos.map((video) => (
            <Link to={`/watch?v=${video.id}`}>
              <VideoCart info={video} />
            </Link>
          ))}
        </div>
      );
    }
  // return videos && (
  //   <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 ">
  //     {videos[0] && <AdVideoCard info={videos[0]}/>}
  //     {videos.map((video) => (
  //       <Link to={`/watch?v=${video.id}`}>
  //         <VideoCart info={video} />
  //       </Link>
  //     ))}
  //   </div>
  // );
};
}

export default VideoContainer;



