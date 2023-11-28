import React, { useEffect, useState } from "react";
import { PLAYLIST_ITEM_API } from "../Utils/Constant";
import { PlayListCard } from "./VideoCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer1 from "./Shimmer/Shimmer1";
import { arr } from "../Utils/Constant";

const Playlist = ({ channelId }) => {
  const [playlistItems, setPlaylistItems] = useState("");
  const [error , setError] = useState("");
  const shimmer = arr;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getData(channelId);
  }, [channelId]);

  const getData = async (channelId) => {
    try{
    const data = await fetch(PLAYLIST_ITEM_API + channelId);

    const json = await data.json();

    // console.log(json);  datas from api
    setPlaylistItems(json.items);
    }catch(error){
      // console.log(error.message); error message
      setError(error.message);

    }
    // setPlaylistItems("");
  };

  return !error && (
    <div>
      <div className="text-gray-500 font-semibold text-xl px-2">Playlists</div>

      {!isMenuOpen ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-3 md:px-0 px-2 ">
          {playlistItems
            ? playlistItems.map((playlists) => (
                <Link
                  to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`} key={playlists.id}
                >
                  <PlayListCard info={playlists} />
                </Link>
              ))
            : shimmer.map((item , index) => <Shimmer1 key={index} />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-3 md:px-0 px-2 ">
          {playlistItems
            ? playlistItems.map((playlists) => (
                <Link
                  to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`} key={playlists.id}
                >
                  <PlayListCard info={playlists} />
                </Link>
              ))
            : shimmer.map((item , index) => <Shimmer1 key={index} />)}
        </div>
      )}
    </div>
  );
};

export default Playlist;
