import React from "react";
import { RiPlayList2Fill } from "react-icons/ri";
import ProfileImage from "./ProfileImage";

const VideoCart = ({ info }) => {
  // console.log(info);
  const { snippet } = info;
  const { channelTitle, title, thumbnails, channelId } = snippet;
  // console.log(statistics.viewCount)
  // const profileImage = useProfile(channelId)
  // console.log(channelId); ---channelId

  return (
    <div className="shadow-lg w-full  md:w-60 lg:w-72 rounded-lg my-2 p-2 ">
      <img
        src={thumbnails.medium.url}
        alt="Thumbnail"
        className="rounded-lg w-full"
      />
      <div>
        <div className="text-sm md:text-base flex  p-1">
          <div>
            <ProfileImage channelId={channelId} />
          </div>

          <div className="pl-1">
            <div className="font-medium md:font-bold ">{title}</div>
            <div className="text-gray-500">{channelTitle}</div>
            {info.statistics !== undefined ? (
              <div>{info.statistics.viewCount} views</div>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 hover:bg-zinc-500 rounded-md ">
      <VideoCart info={info} />
      <div className="bg-gray-500 text-white hover:bg-black rounded-lg text-center font-semibold w-1/6">Ad →</div>
    </div>
  );
};

export const PlayListCard = ({ info }) => {
  return (
    <div className="relative px-2">
      <VideoCart info={info} />
      <div className="text-gray-500 font-semibold px-2 hover:text-gray-700 hover:underline">View playlist </div>
      <div className="absolute lg:top-32 lg:left-48 left-40 top-28  bg-stone-700 text-white p-1 md:text-sm text-xs rounded-md font-semibold">
        <span className="inline-block pr-1">
          <RiPlayList2Fill />
        </span>
        {info.contentDetails.itemCount} videos
      </div>
    </div>
  );
};
export default VideoCart;
