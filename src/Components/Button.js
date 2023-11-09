import React from 'react'

export const Button = ({name}) => {
  return (
    <div className='bg-slate-100 rounded-lg p-2 mx-2 text-center text-[0.5rem] md:py-2 lg:py-3  md:mx-2  md:text-sm font-semibold hover:bg-slate-200'>{name}</div>
  )
}
