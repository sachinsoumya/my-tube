import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { PLAYLIST_LIST_API } from "../Utils/Constant";
import { RiPlayListAddLine } from "react-icons/ri";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LiaDownloadSolid } from "react-icons/lia";
import { IoIosPlay , IoIosShuffle} from "react-icons/io";

const PlaylistItems = () => {
  const [searchParams] = useSearchParams();
  const [listItems, setListItems] = useState("");

  console.log(searchParams);

  const playlistId = searchParams.get("list");
  const results = searchParams.get("results");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      `${PLAYLIST_LIST_API}&maxResults=${results}&playlistId=${playlistId} `
    );
    const json = await data.json();

    console.log(json);

    setListItems(json.items);
  };

  return (
    listItems && (
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 py-3 ">
          <div className="lg:h-screen bg-gradient-to-b from-blue-300 rounded-lg py-2 my-2 ">
            <div className="lg:mx-auto">
              <img
                src={listItems[0].snippet.thumbnails.medium.url}
                alt="thumbnailimage"
                className="rounded-md mx-auto"
              />

              <div className="md:font-bold font-semibold  md:text-lg text-base text-center py-4 px-2 ">
                {listItems[0].snippet.title}
              </div>
              <div className="text-sm md:px-2 font-bold">
                {listItems[0].snippet.channelTitle}
              </div>

              <div className="text-xs md:py-2 py-1 md:px-2 font-semibold text-gray-500">
                {listItems.length}{" "}videos <span className="px-2">{listItems[0].snippet.publishedAt}</span>
              </div>

              <div className="flex justify-between w-52 mx-auto py-2">
                <div className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer"><RiPlayListAddLine /></div>
                <div  className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer"><PiShareFat  /></div>
                <div  className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer"> <LiaDownloadSolid  /></div>
                <div  className="p-2 bg-slate-400 rounded-full hover:bg-slate-500 cursor-pointer"><HiOutlineDotsVertical /></div>
                
              </div>
              <div className="flex md:w-72 w-52  mx-auto justify-between py-3 text-center">
                <div className="rounded-lg bg-slate-400 p-3 w-2/4 hover:bg-slate-600 cursor-pointer"><IoIosPlay className="inline" /> play all</div>
                <div className="rounded-lg bg-slate-400 p-3 w-2/4 ml-2 hover:bg-slate-600 cursor-pointer"><IoIosShuffle className="inline" /> shuffle</div>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            {listItems &&
              listItems.map((item) => (
                <div className=" flex justify-between  my-2 mx-2">
                  <div className="w-60">
                    <img
                      src={item.snippet.thumbnails.standard.url}
                      alt="Thumbnail"
                      className="rounded-lg w-full  h-full  "
                    />
                  </div>

                  <div className="text-black w-full px-2">
                    <div className="text-sm md:text-base font-medium md:font-bold">
                      {item.snippet.title}
                    </div>

                    <div className="text-xs py-2 text-gray-600">
                      {item.snippet.channelTitle}{" "}
                      <span className="px-2">{item.snippet.publishedAt}</span>
                    </div>
                    {/* <div className="text-xs">{viewCount} views</div> */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    )
  );
};

export default PlaylistItems;
