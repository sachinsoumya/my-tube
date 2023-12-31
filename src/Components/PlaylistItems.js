import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { PLAYLIST_LIST_API } from "../Utils/Constant";
import { RiPlayListAddLine } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosPlay, IoIosShuffle } from "react-icons/io";
import PlaylistVideos from "./PlaylistVideos";
import { arr } from "../Utils/Constant";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchResullts } from "../Utils/SearchValue";

import Shimmer2 from "./Shimmer/Shimmer2";
import Error from "./Error";

const PlaylistItems = () => {
  const [searchParams] = useSearchParams();
  const [listItems, setListItems] = useState("");
  const [error, setError] = useState("");
  const searchResult = useSelector((store) => store.searchValue.results);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(searchParams);

  const shimmer = arr;

  const playlistId = searchParams.get("list");
  const results = searchParams.get("results");

  useEffect(() => {
    getData();
    if (searchResult) {
      dispatch(searchResullts(""));
    }
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(
        `${PLAYLIST_LIST_API}&maxResults=${results}&playlistId=${playlistId} `
      );
      const json = await data.json();

      // console.log(json); datas coming from api

      setListItems(json.items);
    } catch (error) {
      // console.log(error.message); error message
      setError(error.message);
    }
    // setListItems("");
  };

  if (searchResult) {
    navigate("/");
  }

  return !error ? (
    listItems ? (
      <div className="md:px-2 px-0 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-3 ">
          <div className="lg:h-screen bg-gradient-to-b from-blue-300 rounded-lg py-2 my-2 ">
            <div className="lg:mx-auto">
              <img
                src={listItems[0].snippet.thumbnails.medium.url}
                alt="thumbnailimage"
                className="rounded-md mx-auto w-3/4 h-3/4"
              />

              <div className="md:font-bold font-semibold  md:text-lg text-base text-center py-4 px-2 ">
                {listItems[0].snippet.title}
              </div>
              <div className="text-sm px-2 font-bold">
                {listItems[0].snippet.channelTitle}
              </div>

              <div className="text-xs md:py-2 py-1 px-2 font-semibold text-gray-500">
                {listItems.length} videos{" "}
                <span className="px-2"> {new Date(listItems[0].snippet.publishedAt).toLocaleDateString()} {" "} {new Date(listItems[0].snippet.publishedAt).toLocaleTimeString()}</span>
              </div>

              <div className="flex justify-between w-52 mx-auto py-2">
                <div className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer">
                  <RiPlayListAddLine />
                </div>
                <div className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer">
                  <PiShareFat />
                </div>
                <div className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer">
                  {" "}
                  <LiaDownloadSolid />
                </div>
                <div className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer">
                  <HiOutlineDotsVertical />
                </div>
              </div>
              <div className="flex md:w-72 w-52  mx-auto justify-between py-3 text-center">
                <div className="rounded-lg bg-slate-400 p-3 w-2/4 hover:bg-slate-600 cursor-pointer">
                  <Link
                    to={`/watch?v=${listItems[0].snippet.resourceId.videoId}`}
                  >
                    <IoIosPlay className="inline" /> play all
                  </Link>
                </div>
                <div className="rounded-lg bg-slate-400 p-3 w-2/4 ml-2 hover:bg-slate-600 cursor-pointer">
                  <IoIosShuffle className="inline" /> shuffle
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            {listItems ? (
              listItems.map((item) => (
                <Link
                  to={`/watch?v=${item.snippet.resourceId.videoId}`}
                  key={item.id}
                >
                  <PlaylistVideos list={item} />
                </Link>
              ))
            ) : (
              <Shimmer2 />
            )}
          </div>
        </div>
      </div>
    ) : (
      <div className="md:px-2 px-0 ">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-3 ">
          <div className="py-2 px-2">
            <div className="bg-slate-400 w-full h-72 rounded-lg shadow-lg "></div>
          </div>

          <div className="col-span-2">
            {shimmer.map((item , index) => (
              <Shimmer2 key={index} />
            ))}
          </div>
        </div>
      </div>
    )
  ) : (
    <div>
      <Error error={error} />
    </div>
  );
};

export default PlaylistItems;
