import React, { useEffect } from 'react'
import { CHANNEL_API } from '../Utils/Constant';

const Channel = ({ channelId}) => {
    
  useEffect(()=>{
    getData();

  },[])

  const getData = async()=>{
    const data = await fetch(CHANNEL_API+channelId)
    const json = await data.json();
    console.log(json);
  }


  return (
    <div>{ channelId}</div>
  )
}

export default Channel