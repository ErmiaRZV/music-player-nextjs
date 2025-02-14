import React, { useContext } from 'react'
import store from './store'
import '../css/fontello.css'
import Link from 'next/link'
export default function Footer() {
    const data = useContext(store)
  return (
    <div className='flex w-full h-[5vh] fixed left-0 top-[95vh] border-t z-50'>
        <MyName />
        <MySocial    />
    </div>
  )
}


function MyName(){
    return(
        <h1 className='h-full w-1/2 flex justify-center items-center text-white' >
         
                Ermia Razavi
            
        </h1>
    )
}
function MySocial(){
    return(
        <ul className='h-full w-1/2 flex justify-center items-center gap-5' >
         
                <li><Link href="https://github.com/ErmiaRZV" className='icon-linkedin text-white hover:text-[#e04616] p-1 duration-500' ></Link></li>
                <li><Link href="www.linkedin.com/in/ermia-razavi-a611312a3" className='icon-github-circled text-white hover:text-[#e04616] p-1 duration-500' ></Link></li>
                
            
        </ul>
    )
}
