import React from "react";

const PlaylistVideos = ({ list }) => {
  const { snippet } = list;
  const { thumbnails, title, channelTitle, publishedAt } = snippet;

  return snippet && (
    <div>
      <div className=" flex justify-between  my-2 mx-2">
        <div className="w-60">
          <img
            src={Object.keys(thumbnails).length && list.snippet.thumbnails.standard.url}
            alt="Thumbnail"
            className="rounded-lg w-full  h-full  "
          />
        </div>

        <div className="text-black w-full px-2">
          <div className="text-sm md:text-base font-medium md:font-semibold">
            {title}
          </div>

          <div className="text-xs py-2 text-gray-600">
            {channelTitle} <span className="px-2">{new Date(publishedAt).toLocaleDateString()} {" "} {new Date(publishedAt).toLocaleTimeString()}</span>
          </div>
          {/* <div className="text-xs">{viewCount} views</div> */}
        </div>
      </div>
    </div>
  );
};

export default PlaylistVideos;
