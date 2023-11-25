import React, { useEffect, useState } from "react";
import ChannelProfile from "./ChannelProfile";
import Playlist from "./Playlist";
import { CHANNEL_API } from "../Utils/Constant";
import { useParams } from "react-router-dom";
import { searchResullts } from "../Utils/SearchValue";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Error from "./Error";

const ChannelDetails = () => {
  const [profile, setProfile] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const searchResult = useSelector((store) => store.searchValue.results);
  const dispatch = useDispatch();
  const params = useParams();
  const { userName, id } = params;
  console.log(userName);

  useEffect(() => {
    getData();
    if (searchResult) {
      dispatch(searchResullts(""));
    }
  }, []);

  const getData = async () => {
    try {
      const data = await fetch(CHANNEL_API + id);
      const json = await data.json();

      console.log(json);
      setProfile(json.items[0]);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  if (searchResult) {
    navigate("/");
  }

  return !error ? (
    profile && 
      <div>
        <ChannelProfile
          details={profile.snippet}
          statistics={profile.statistics}
        />
        <Playlist channelId={id} />
      </div>
    
  ) : (
    <div><Error error={error}/></div>
  );
};

export default ChannelDetails;
