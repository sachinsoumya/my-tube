import React, { useEffect, useState } from "react";
import { CHANNEL_API } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Channel = ({ channelId }) => {
  const [channelDetails, setChannelDetails] = useState("");

  useEffect(() => {
    getData(channelId);
  }, [channelId]);

  const getData = async (channelId) => {
    const data = await fetch(CHANNEL_API + channelId);
    const json = await data.json();
    console.log(json);
    console.log(channelId);
    setChannelDetails(json.items[0]);
  };

  return (
    channelDetails && (
      <div className="flex">
        <div>
          <Link to={`/${channelDetails.snippet.customUrl}`}>
            {" "}
            <img
              src={`${channelDetails.snippet.thumbnails.default.url}`}
              alt="channel banner"
              className="w-10 rounded-full"
            />
          </Link>
        </div>
        <div className="self-center px-2">
          <div>{channelDetails.snippet.localized.title}</div>
          <div>
            {channelDetails.statistics.subscriberCount}
            <span className="pl-1 text-xs text-zinc-400 font-normal">
              subscriber
            </span>
          </div>
        </div>
      </div>
    )
  );
};

export default Channel;
