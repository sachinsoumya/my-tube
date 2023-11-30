import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import VideoCart, { AdVideoCard } from "./VideoCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLike } from "../Utils/statSlice";
import Shimmer1 from "./Shimmer/Shimmer1";
import { arr } from "../Utils/Constant";
import Error from "./Error";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const shimmer = arr;
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API_KEY);
      const json = await data.json();
      // console.log(json);--api call data
      setVideos(json.items);
    } catch (error) {
      // console.log("Error" + error.message); -- error message
      setError(error.message);
    }
    // setVideos("");
  };

const statistics = {
  viewCount : "123443",
  likeCount : "124456"

}

  const searchResullts = useSelector((store) => store.searchValue.results);
  // console.log(searchResullts.length);--searchResult length

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!error) {
    if (!isMenuOpen) {
      if (searchResullts.length !== 0) {
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
            {searchResullts.map((video) => (
              <Link
                to={`/watch?v=${video.id.videoId}`}
                key={video.id.videoId}
                onClick={() => {
                  dispatch(addLike(statistics));
                }}
              >
                <VideoCart info={video} />
              </Link>
            ))}
          </div>
        );
      } else {
        return videos ? (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full md:px-0 px-2 ">
            {videos.map((video) => (
              <Link
                to={`/watch?v=${video.id}`}
                key={video.id}
                onClick={() => {
                  dispatch(addLike(video.statistics));
                }}
              >
                <VideoCart info={video} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full md:px-0 px-2 gap-3">
            {shimmer.map((item) => (
              <Shimmer1 />
            ))}
          </div>
        );
      }
    } else {
      if (searchResullts.length !== 0) {
        return (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full ">
            {/* {videos[0] && <AdVideoCard info={videos[0]}/>} */}
            {searchResullts.map((video) => (
              <Link
                to={`/watch?v=${video.id.videoId}`}
                onClick={() => {
                  dispatch(addLike(statistics));
                }}
                key={video.id.videoId}
              >
                <VideoCart info={video} />
              </Link>
            ))}
          </div>
        );
      } else {
        return videos ? (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full md:px-0 px-2">
            {videos[10] && <AdVideoCard info={videos[10]} />}
            {videos.map((video) => (
              <Link
                to={`/watch?v=${video.id}`}
                onClick={() => {
                  dispatch(addLike(video.statistics));
                }}
                key={video.id}
              >
                <VideoCart info={video} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 w-full md:px-0 px-2">
            {shimmer.map((item , index) => (
              <Shimmer1 key ={index}/>
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
    }
  } else {
    return (
      <div>
        <Error error={error} />
      </div>
    );
  }
};

export default VideoContainer;
