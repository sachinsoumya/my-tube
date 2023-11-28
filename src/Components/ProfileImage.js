import React from "react";
import useProfile from "../Utils/useProfile";
import { Link } from "react-router-dom";

const ProfileImage = ({ channelId }) => {
  // console.log(channelId);---channelId

  const profileImage = useProfile(channelId);

  return Object.keys(profileImage).length ? (
    <div className="w-full">
      <Link to={`/${profileImage.snippet.customUrl}/${profileImage.id}`}>
        <img
          src={profileImage.snippet.thumbnails.default.url}
          alt="profile"
          className="rounded-full"
        />
      </Link>
    </div>
  ) : (
    <div className="w-full bg-slate-400 h-10"></div>
  );
};

export default ProfileImage;
