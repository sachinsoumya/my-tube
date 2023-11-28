import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "../Utils/Constant";
import SuggVideoCart from "./SuggVideoCart";
import { Link } from "react-router-dom";
import Shimmer2 from "./Shimmer/Shimmer2";
import { arr } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addLike } from "../Utils/statSlice";

const SuggestedVideos = () => {
  const [suggVideos, setSugVideos] = useState("");
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const shimmer = arr;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(YOUTUBE_API_KEY);
      const json = await data.json();
      // console.log(json); datas coming from api
      setSugVideos(json.items);
    } catch (error) {
      // console.log(error.message); error message
      setError(error.message);
    }

    //setSugVideos("");
  };

  return (
    !error && (
      <div>
        {suggVideos
          ? suggVideos.map((video) => (
              <div key={video.id}>
                <Link
                  to={`/watch?v=${video.id}`}
                  onClick={() => {
                    dispatch(addLike(video.statistics));
                  }}
                >
                  <SuggVideoCart data={video} />
                </Link>
              </div>
            ))
          : shimmer.map((item ,index) => <Shimmer2 key={index} />)}
      </div>
    )
  );
};

export default SuggestedVideos;
