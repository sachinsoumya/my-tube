import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import SuggVideoCart from "./SuggVideoCart";
import { Link } from "react-router-dom";
import Shimmer2 from "./Shimmer/Shimmer2";
import { arr } from "../Utils/Constant";

const SuggestedVideos = () => {
  const [suggVideos, setSugVideos] = useState("");
  const [error , setError] = useState("");
  const shimmer =arr ;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {

    
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setSugVideos(json.items);
    }catch(error){
      console.log(error.message);
      setError(error.message);
      
    }

    //setSugVideos("");
  };

  return !error && (
    <div>
      {suggVideos
        ? suggVideos.map((video) => (
            <div key={video.id}>
              <Link to={`/watch?v=${video.id}`}>
                <SuggVideoCart data={video} />
              </Link>
            </div>
          ))
        : shimmer.map((item) => <Shimmer2 />)}
    </div>
  );
};

export default SuggestedVideos;
