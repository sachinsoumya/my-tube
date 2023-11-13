import React, { useEffect, useState } from "react";
import { VIDEO_DESCRIPTION_API } from "../Utils/Constant";
import Channel from "./Channel";

const VideoDes = ({ videoId }) => {
  const [description, setDescription] = useState("");
  console.log(videoId);
  useEffect(() => {
    getDescription(videoId);
  }, [videoId]);

  const getDescription = async (videoId) => {
    const data = await fetch(VIDEO_DESCRIPTION_API + videoId);
    const json = await data.json();
    console.log(json);
    setDescription(json.items[0].snippet);
  };
  return (
    <div className="px-2">
      {description && (
        <div>
          <div className="font-bold text-xl py-2">{description.title}</div>
          <div className="flex justify-between  w-full py-4">
            <div className="font-bold text-sm  p-2">
              <Channel channelId={description.channelId} />
            </div>
            <div className="font-bold text-sm self-center"><button className="bg-black text-white w-24 p-2 border border-black rounded-full font-medium text-center">Subscribe</button></div>
          </div>
          <div className="bg-zinc-300  w-full py-4 shadow-lg rounded-lg">
            <div className="font-semibold text-sm my-1">
              {description.publishedAt}
            </div>
            <div className="font-semibold my-1">{description.description}</div>
            <div className="text-blue-600">
              <ul>
                shadow-lg rounded-lg
                {description.tags &&
                  description.tags.map((item) => {
                    return <li key={item}>#{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDes;
