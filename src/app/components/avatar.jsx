import React, { useContext } from 'react'
import store from './store'
export default function Avatar() {
    const data = useContext(store)
  return (
    <div className='w-full h-[50vh]  flex justify-center items-center' >
      <figure className='w-[200px] h-[200px] flex  ' >
      <img className='rounded-full   object-cover w-full h-full ' src={data.current.avatar}  />

      </figure>
    </div>
  )
}
