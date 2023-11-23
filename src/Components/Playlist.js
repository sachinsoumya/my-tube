import React, { useEffect, useState } from "react";
import { PLAYLIST_ITEM_API } from "../Utils/Constant";
import { PlayListCard } from "./VideoCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Shimmer1 from "./Shimmer/Shimmer1";
import { arr } from "../Utils/Constant";

const Playlist = ({ channelId }) => {
  const [playlistItems, setPlaylistItems] = useState("");
  const shimmer = arr;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(PLAYLIST_ITEM_API + channelId);

    const json = await data.json();

    console.log(json);
    setPlaylistItems(json.items);
    // setPlaylistItems("");
  };

  return (
    <div>
      <div className="text-gray-500 font-semibold text-xl px-2">Playlists</div>

      {!isMenuOpen ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full gap-3 md:px-0 px-2 ">
          {playlistItems
            ? playlistItems.map((playlists) => (
                <Link
                  to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`}
                >
                  <PlayListCard info={playlists} />
                </Link>
              ))
            : shimmer.map((item) => <Shimmer1 />)}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full gap-3 md:px-0 px-2 ">
          {playlistItems
            ? playlistItems.map((playlists) => (
                <Link
                  to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`}
                >
                  <PlayListCard info={playlists} />
                </Link>
              ))
            : shimmer.map((item) => <Shimmer1 />)}
        </div>
      )}
    </div>
  );
};

export default Playlist;
