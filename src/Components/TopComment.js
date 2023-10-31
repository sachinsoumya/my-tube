import React from "react";

const TopComment = ({ data }) => {
  console.log(data);
  const {
    textDisplay,
    authorDisplayName,
    authorProfileImageUrl,
    publishedAt,
    updatedA,
    likeCount,
  } = data.snippet.topLevelComment.snippet;

  return (
    <div className="py-3 ">
      <div className="flex">
        <div>
          <img
            src={`${authorProfileImageUrl}`}
            alt="profilepic"
            className="rounded-full"
          />
        </div>

        <div className="px-2">
          <div className="font-semibold pt-1">
            {authorDisplayName}{" "}
            <span className="text-slate-400 font-normal text-sm">
              {publishedAt}
            </span>
          </div>

          <div>{textDisplay}</div>
          <div>👍🏻{likeCount}</div>
        </div>
      </div>
    </div>
  );
};

export default TopComment;
