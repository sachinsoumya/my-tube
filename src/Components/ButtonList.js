import React from 'react'
import { Button } from './Button'

const nameList = ["All" , "News" , "Music" , "Trailers"  ] ;

const ButtonList = () => {
  return (
    <div className='flex justify-between overflow-scroll'>
      {/* <Button name="All" />
      <Button name ="News" />
      <Button name="Music" />
      <Button  name="Trailers"/> */}
      {/* <Button />
      <Button /> */}

      {nameList.map((item ,index)=>{
        return <Button name = {item} key={index}  />
      })}
      
      

    </div>
  )
}

export default ButtonList