import React, { useEffect, useState } from "react";
import { CATEGORY_VIDEOS_API } from "../Utils/Constant";
import { Link, useParams } from "react-router-dom";
import VideoCart from "./VideoCart";
import { useSelector } from "react-redux";

import { addLike } from "../Utils/statSlice";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { searchResullts } from "../Utils/SearchValue";
import Error from "./Error";
import Shimmer1 from "./Shimmer/Shimmer2";
import { arr } from "../Utils/Constant";

const Catagory = () => {
  const [catVideos, setCatVideos] = useState("");
  const [error, setError] = useState("");
  const shimmer = arr;
  // const [check , setCheck] = useState(false);

  const searchResult = useSelector((store) => store.searchValue.results);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    getData(id);

    // console.log("Hello");
    if (searchResult) {
      dispatch(searchResullts(""));
    }
    // eslint-disable-next-line
  }, [id]);

  const getData = async (id) => {
    try {
      const data = await fetch(`${CATEGORY_VIDEOS_API}${id}`);
      const json = await data.json();

      // console.log(json);  datas from api

      setCatVideos(json.items);
    } catch (error) {
      // console.log(error.message); error message
      setError(error.message);
    }
  };

  const goNavigate = () => {
    // eslint-disable-next-line
    navigate("/");
  };

  if (searchResult) {
    goNavigate();
  } else {
    // console.log("hii");
  }

  const statistics = {
    viewCount: "No records",
    likeCount: "No records",
  };

  return !error ? (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
      {catVideos
        ? catVideos.map((item) => {
            return (
              <Link
                to={`/watch?v=${item.id}`}
                key={item.id}
                onClick={() => {
                  dispatch(addLike(statistics));
                }}
              >
                <VideoCart info={item} />
              </Link>
            );
          })
        : shimmer.map((item, index) => <Shimmer1 key={index} />)}
    </div>
  ) : (
    <div>
      <Error error={error} />
    </div>
  );
};

export default Catagory;
