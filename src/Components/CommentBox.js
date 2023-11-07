import React, { useEffect, useState } from "react";
import { COMMENT_API } from "../Utils/Constant";
import TopComment from "./TopComment";
import { useSelector } from "react-redux";


const CommentBox = () => {
  const [comments, setComments] = useState("");
  const videoId = useSelector((store)=>store.prop)
  console.log(videoId.propValue);
  console.log(comments);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENT_API + videoId.propValue);
    const json = await data.json();
    console.log(json);
    setComments(json.items);
  };

  return (
    <div className="px-2 py-3">
      
      <div className="font-bold text-2xl underline decoration-slate-500 decoration-1 underline-offset-4 w-96">{comments ? comments.length : "0"}<span className="mx-2">Comments</span></div>
      {comments &&
        comments.map((comment) => {
          return (
            <div >
              <TopComment data={comment} key={comment.id} />
            </div>
          );
        })}
    </div>
  );
};

export default CommentBox;
