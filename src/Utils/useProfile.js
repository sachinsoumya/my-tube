import { useEffect, useState } from "react"
import { CHANNEL_API } from '../Utils/Constant'

const useProfile = (channelId)=>{

    const [profile ,setProfile] = useState("")



    useEffect(()=>{
        getData();

    },[])

    const getData = async()=>{
        const data = await fetch(CHANNEL_API+channelId);
        const json = await data.json();
        console.log(json);
        setProfile(json.items[0].snippet.thumbnails);

    }

    return Object.keys(profile).length && profile ;


    
    
}
export default useProfile