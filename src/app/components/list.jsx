"use client";
import React, { useContext, useState } from "react";
import store from "../components/store";

export default function Page2() {
  const data = useContext(store);
  return (
    <div
      className="w-full h-[100vh] bg-[#262a2f] absolute top-0 z-50 overflow-y-auto overflow-x-hidden "
      style={{ left: data.showList }}
    >
      <Header />
      <List />
      <Mode />
    </div>
  );
}

function Header() {
  const data = useContext(store);
  return (
    <header className="w-full h-[10vh] lg:h-[15vh] border-b border-[white] flex ">
      <div className="h-full w-1/4  flex justify-center items-center">
        <button className=" duration-500 hover:text-[#e04616] text-white" onClick={data.back}>
          Back
        </button>
      </div>
      <div className="h-full w-3/4 flex justify-center items-center">
        <input
          onKeyUp={data.keySearch}
          placeholder="Search..."
          className="text-white bg-[#25292e] outline-none py-1 px-3 border-b border-[#e04616]"
          value={data.inpSearch}
          onChange={(e) => data.setInpSearch(e.target.value)}
          type="text"
        />
      </div>
    </header>
  );
}

function List() {
  const data = useContext(store);
  return (
    <nav style={{scrollbarWidth:' none'}} className="w-[100vw]  h-[75vh] overflow-y-auto overflow-x-clip ">
      <ul className="w-full h-full flex flex-wrap items-start content-start">
        {data.listData.map((val, i) => {
          

            if (data.current.name == val.name) {
              // console.log(data.data[i].name,val.name);
              
              return (
            
                <li
                  onClick={() => data.choose(i,val)}
                  className=" relative cursor-pointer w-full h-20 flex items-center content-center group border-[#858484b1] justify-between border-b px-3 md:px-7 
                    "
                  key={"list" + i}
                >
                  <div className="flex justify-center items-center gap-1 content-center ">
                  <span className="text-[#e04616] group-hover:text-[#e04616] text-xl duration-500 ">{val.name}</span>
                  <span className="text-[#ffffffa3] text-sm  duration-500 ">[{val.author}]</span>
                  </div>
                  <img className="w-16 h-16   " src={val.avatar} alt="" />
                </li>
              );
              
            }else{
              return (
            
                <li
                  onClick={() => data.choose(i,val)}
                  className=" relative cursor-pointer w-full h-20 flex items-center content-center group border-[#858484b1] justify-between border-b px-3 md:px-7  "
                  key={"list" + i}
                >
                  <div className="flex justify-center items-center gap-1 content-center ">
                  <span className="text-white group-hover:text-[#e05d16da] text-xl duration-500 ">{val.name}</span>
                  <span className="text-[#ffffffa3] text-sm  duration-500 ">[{val.author}]</span>
                  </div>
                  <img className="w-16 h-16  " src={val.avatar} alt="" />
                </li>
              );
            }
          
          
        })}
      </ul>
    </nav>
  );
}

function Mode() {
    const data = useContext(store)
  return (
    <div className="absolute h-[10vh] lg:h-[10vh] w-full border-t left-0 top-[85vh] items-center content-center flex z-30 bg-[#25292e] ">
      <div onClick={data.listAll} style={{color:data.isAll?'#e04616':'white'}} className=" cursor-pointer duration-500 h-full w-1/2 flex justify-center text-xl border-r items-center  " >All</div>
      <div onClick={data.listFav} style={{color:data.isAll?'white':'#e04616'}} className=" cursor-pointer duration-500 h-full w-1/2 flex justify-center border-l items-center  " >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >   
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
      </div>
    </div>
  );
}
