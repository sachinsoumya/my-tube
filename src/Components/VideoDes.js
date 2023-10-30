import React, { useEffect, useState } from "react";
import { VIDEO_DESCRIPTION_API } from "../Utils/Constant";

const VideoDes = ({ videoId }) => {
  const [description, setDescription] = useState([]);
  console.log(videoId);
  useEffect(() => {
    getDescription();
  }, []);

  const getDescription = async () => {
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
          <div className="flex justify-between lg:w-4/6 w-full py-4">
            <div className="font-bold text-sm">{description.channelTitle}</div>
            <div className="font-bold text-sm">{description.publishedAt}</div>
          </div>
          <div className="bg-zinc-300 lg:w-4/6 w-full py-4 shadow-lg rounded-lg">
            <div className="font-semibold text-sm my-1">
              {description.publishedAt}
            </div>
            <div className="font-semibold my-1">{description.description}</div>
            <div className="text-blue-600">
                <ul>
                 shadow-lg rounded-lg
                    {description.tags && description.tags.map((item) => {
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
