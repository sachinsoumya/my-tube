import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import SuggVideoCart from "./SuggVideoCart";
import { Link } from "react-router-dom";

const SuggestedVideos = () => {
  const [suggVideos, setSugVideos] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    console.log(json);
    setSugVideos(json.items);
  };

  return (
    <div>
      {suggVideos &&
        suggVideos.map((video) => (
          <div>
            <Link to={`/watch?v=${video.id}`}>
              <SuggVideoCart data={video} />
            </Link>
          </div>
        ))}
    </div>
  );
};

export default SuggestedVideos;
