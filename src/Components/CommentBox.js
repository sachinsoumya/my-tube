import React, { useEffect, useState } from "react";
import { COMMENT_API } from "../Utils/Constant";
import TopComment from "./TopComment";

const CommentBox = ({ videoId }) => {
  const [comments, setComments] = useState("");
  console.log(comments);
  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENT_API + videoId);
    const json = await data.json();
    console.log(json);
    setComments(json.items);
  };

  return (
    <div>
      {comments &&
        comments.map((comment) => {
          return (
            <div className="px-2">
              <TopComment data={comment} key={comment.id} />
            </div>
          );
        })}
    </div>
  );
};

export default CommentBox;
