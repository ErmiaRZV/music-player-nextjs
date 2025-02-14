import React, { useContext } from "react";
import store from "./store";

export default function Control() {
  const data = useContext(store);
  return (
    <div className="w-full h-[45vh] lg:h-[35vh] flex flex-wrap ">
      <audio
      onEnded={data.endMusic}
        onTimeUpdate={data.updateTime}
        className="hidden"
        ref={data.music}
        onLoadedMetadata={data.metaData}
        src={data.current.url}
      ></audio>
      <div className="w-full h-[10vh]  flex justify-center items-center gap-4 ">
        <span className="text-white">
          {Math.floor(data.currentTime / 60) +
            ":" +
            Math.floor(data.currentTime % 60)}
        </span>
        <div
          onClick={data.navClick}
          ref={data.nav}
          className=" cursor-pointer h-[8px] w-44 rounded-2xl bg-black border border-[#e7e7e776] relative  "
        >
          <span
            style={{ width: (data.currentTime * 100) / data.musicDur + "%" }}
            className="h-full absolute top-0 left-0 rounded-2xl  bg-[#e04616] "
          ></span>
        </div>
        <span className="text-white">
          {parseInt(Math.floor(data.musicDur) / 60) +
            ":" +
            (Math.floor(data.musicDur) % 60)}
        </span>
      </div>
      <div className="w-full h-[35vh] lg:h-[25vh] flex justify-center items-center pb-10 lg:items-center lg:pb-0 content-start gap-3 md:gap-7 lg:gap-10  ">
        <button onClick={data.repeat} className="hover:bg-[#25292e] duration-500   flex justify-center items-center text-white w-12 h-12 rounded-full border border-[#e04616] bg-[#1b1d21] "
         > 
          {data.repeatIcon}
        </button>
        <button
          onClick={data.previous}
          className="hover:bg-[#25292e] duration-500   flex justify-center items-center text-white w-12 h-12 rounded-full border border-[#e04616] bg-[#1b1d21] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061A1.125 1.125 0 0 1 21 8.689v8.122ZM11.25 16.811c0 .864-.933 1.406-1.683.977l-7.108-4.061a1.125 1.125 0 0 1 0-1.954l7.108-4.061a1.125 1.125 0 0 1 1.683.977v8.122Z"
            />
          </svg>
        </button>
        <button
          onClick={data.playy}
          className="hover:bg-[#e04616] duration-500 w-16 h-16 rounded-full border bg-[#e03816fa] border-[#1b1d21] text-white justify-center items-center flex "
        >
          {data.icon}
        </button>
        <button
          onClick={data.next}
          className="hover:bg-[#25292e] duration-500 flex justify-center items-center text-white w-12 h-12 rounded-full border border-[#e04616] bg-[#1b1d21] "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811V8.69ZM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061a1.125 1.125 0 0 1-1.683-.977V8.69Z"
            />
          </svg>
        </button>
        <button onClick={data.mute} className="hover:bg-[#25292e] duration-500   flex justify-center items-center text-white w-12 h-12 rounded-full border border-[#e04616] bg-[#1b1d21] "
        >
          {data.muteIcon}
        </button>
      </div>
    </div>
  );
}
