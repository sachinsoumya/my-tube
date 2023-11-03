import React from 'react'

const Chatmessage = ({message , name}) => {

   
  return (
    <div className='pt-2 '>
        <img src="https://yt4.ggpht.com/ytc/APkrFKa3N1hXAZ9m9dobB8vftBiMKOUQYK-bhPUIhozHuM5K97vboZ2eC1iHZrW74uEe=s32-c-k-c0x00ffffff-no-rj" alt="useicon" className='inline' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}🙏🏻🙏🏻</span>
    </div>
  )
}

export default Chatmessage