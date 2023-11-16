import React, { useEffect, useState } from 'react'
import ChannelProfile from './ChannelProfile'
import Playlist from './Playlist' 
import { CHANNEL_API } from '../Utils/Constant'
import { useParams } from 'react-router-dom'

const ChannelDetails = () => {
  const [profile , setProfile] = useState("");
  const params = useParams();
  const {userName ,id} = params;
  console.log(userName);

  useEffect(()=>{
    getData();

  },[])

  const getData = async()=>{
    const data = await fetch(CHANNEL_API+id);
    const json = await data.json();

    console.log(json);
    setProfile(json.items[0]);


  }
  return profile && (
    <div>
      <ChannelProfile details= {profile.snippet} statistics = {profile.statistics}/>
      <Playlist channelId={id}/>
    </div>
  )
}

export default ChannelDetails