import React, { useEffect, useState } from "react";
import { COMMENT_API } from "../Utils/Constant";
import TopComment from "./TopComment";
import { useSelector } from "react-redux";
import Shimmer3 from "./Shimmer/Shimmer3";
import { arr } from "../Utils/Constant";

const CommentBox = () => {
  const [comments, setComments] = useState("");
  const [error, setError] = useState("");
  const videoId = useSelector((store) => store.prop);
  // console.log(videoId.propValue); value of prop
  // console.log(comments); - comments
  const shimmer = arr;

  useEffect(() => {
    getComments(videoId.propValue);
  }, [videoId.propValue]);

  const getComments = async (videoId) => {
    try {
      const data = await fetch(COMMENT_API + videoId);
      const json = await data.json();
      // console.log(json); data coming from api
      setComments(json.items);
    } catch (error) {
      // console.log(error.message);
      setError(error.message);
    }

    // setComments("");
  };

  return (
    !error && (
      <div className="px-2 py-3">
        <div className="font-bold text-2xl underline decoration-slate-500 decoration-1 underline-offset-4 w-96">
          {comments ? comments.length : "0"}
          <span className="mx-2">Comments</span>
        </div>
        {comments
          ? comments.map((comment) => {
              return (
                <div key={comment.id}>
                  <TopComment data={comment} />
                </div>
              );
            })
          : shimmer.map((item, index) => <Shimmer3 key={index} />)}
      </div>
    )
  );
};

export default CommentBox;
