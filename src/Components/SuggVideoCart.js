import React from "react";

const SuggVideoCart = ({ data }) => {
  const { channelTitle, title, thumbnails } = data.snippet;
  const { viewCount} = data.statistics;
  const { medium } = thumbnails;

  return (
    data && (
      <div className="hover:bg-gray-200">
        <div className="flex justify-between my-3 mx-2">
          <div className="w-60">
            <img src={medium.url} alt="Thumbnail" className="rounded-lg w-full h-full" />
          </div>

          <div className="text-black w-full pl-1">
            <div className="text-sm md:text-base font-medium md:font-semibold">
              {title}
            </div>

            <div className="text-xs">{channelTitle}</div>
            <div className="text-xs">{viewCount} views</div>
          </div>
        </div>
      </div>
    )
  );
};

export default SuggVideoCart;
