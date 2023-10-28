import React from 'react'

const VideoCart = ({info}) => {
    console.log(info);
    const {snippet , statistics } = info
    const {channelTitle , title , thumbnails} = snippet;

    
  return (
    
    <div className='shadow-lg w-28  md:w-64 lg:w-72 rounded-lg my-2 p-2'>
        <img src={thumbnails.medium.url} alt="Thumbnail" className='rounded-lg' />
        <ul>
            <li className='text-sm md:text-base font-medium md:font-bold'>{title}</li>
            <li >{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
           
        </ul>

    </div>
  )
}

export default VideoCart