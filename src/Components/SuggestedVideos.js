import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import SuggVideoCart from "./SuggVideoCart";
import { Link } from "react-router-dom";
import Shimmer2 from "./Shimmer/Shimmer2";

const SuggestedVideos = () => {
  const [suggVideos, setSugVideos] = useState("");
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setSugVideos(json.items);

    // setSugVideos("");
  };

  return (
    <div>
      {suggVideos
        ? suggVideos.map((video) => (
            <div key={video.id}>
              <Link to={`/watch?v=${video.id}`}>
                <SuggVideoCart data={video} />
              </Link>
            </div>
          ))
        : arr.map((item) => <Shimmer2 />)}
    </div>
  );
};

export default SuggestedVideos;
