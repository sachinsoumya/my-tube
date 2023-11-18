import React, { useEffect, useState } from "react";
import { PLAYLIST_ITEM_API } from "../Utils/Constant";
import VideoCart, { PlayListCard } from "./VideoCart";
import { useSelector} from "react-redux";
import {Link} from "react-router-dom"

const Playlist = ({ channelId }) => {
  const [playlistItems, setPlaylistItems] = useState("");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(PLAYLIST_ITEM_API + channelId);

    const json = await data.json();

    console.log(json);
    setPlaylistItems(json.items);
  };

  return (
    playlistItems && (
      <div>
        <div className="text-gray-500 font-semibold text-xl px-2">
          Playlists
        </div>
        {!isMenuOpen ? <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 w-full">
          {playlistItems ? (
            playlistItems.map((playlists) => <Link to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`}><PlayListCard info={playlists} /></Link>)
          ) : (
            <div>No playlists</div>
          )}
        </div>:<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {playlistItems ? (
            playlistItems.map((playlists) => <Link  to={`/playlist?list=${playlists.id}&results=${playlists.contentDetails.itemCount}`}><PlayListCard info={playlists} /></Link>)
          ) : (
            <div>No playlists</div>
          )}
        </div>}
      </div>
    )
  );
};

export default Playlist;
