import React from 'react' ;
import useProfile from '../Utils/useProfile';


const ProfileImage = ({channelId}) => {
    console.log(channelId);
  
    const profileImage = useProfile(channelId)

  return Object.keys(profileImage).length && (
    <div className='w-full'>
        <img src={profileImage.default.url} alt="profile" className='rounded-full' />
    </div>
  )
}

export default ProfileImage