import React, { useContext } from "react";
import store from "./store";
import Link from "next/link";

export default function Header() {
  const data = useContext(store);

  return (
    <div className="h-[10vh] lg:h-[15vh] w-full  flex justify-center items-center bg-[#262a2f] text-white relative ">
      <span onClick={data.moveFav} style={{color:data.isFav?'#e04616':'white'}} className="cursor-pointer  duration-500  absolute top-0 left-6 h-full  flex items-center justify-center  ">
      <svg style={{color:data.isFav?'#e04616':'white',fill:data.isFav?'#e04616':'white'}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

      </span>
      <div className="h-auto   justify-center  w-56 flex flex-wrap gap-3 pt-8">
      <h1 className="text-2xl w-full flex justify-center text-white text-center  " >{data.current.name}</h1> 
      <h2 className="text-lg flex justify-center text-[#ffffffa3] text-center" >{data.current.author}</h2>
      </div>
      
      <span onClick={data.openList}   className=" cursor-pointer absolute top-0 right-6 h-full  flex items-center justify-center  ">
    
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
    </div>
  );
}
