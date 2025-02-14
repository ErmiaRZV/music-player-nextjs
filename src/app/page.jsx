"use client";
import useFetch from "./components/usefetch";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import store from "./components/store";
import Header from "./components/header";
import Avatar from "./components/avatar";
import Control from "./components/control";
import Page2 from "./components/list";
import Footer from "./components/footer";

export default function Page() {

  // FETCHING DATA 
  const data = useFetch(
    "https://67aa0dcb65ab088ea7e57f70.mockapi.io/musicList"
  );
  // FETCHING DATA 
  
  // COUNTING NUMBER OF DATA OR MUSICS 
  const [count, setCount] = useState(0);
  useEffect(() => {
    data.map(() => {
      setCount((prev) => {
        return prev + 1;
      });
    });
  }, [data]);
  // COUNTING NUMBER OF DATA OR MUSICS 


  let newData = [];
  let indexInp;
  let newFav;
  // FAVORITE MUSISCS LIST LOCAL STORAGE 
  const [fav, setFav] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Fav") == null || "") {

      localStorage.setItem("Fav", JSON.stringify([...fav]));
    } else {
      setFav(JSON.parse(localStorage.getItem("Fav")));
    }
  }, []);
  // FAVORITE MUSISCS LIST LOCAL STORAGE 

  const [showList, setShowList] = useState("100%");
  const nav = useRef(null);
  const music = useRef(null);
  const [playPause, setPlayPause] = useState(true);
  const [icon, setIcon] = useState(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
      />
    </svg>
  );
  const [isAll, setIsAll] = useState(true);
  const [current, setCurrent] = useState({
    name: "Navazesh",
    url: "https://ts17.tarafdari.com/contents/user659301/content-sound/navazesh_ebi_.mp3",
    avatar:
      "https://ts17.tarafdari.com/contents/user659301/content-sound/img_20240412_174634_684_0.jpg ",
    author: "Ebi",
    id: "1",
  });

  const [indexCurrent, setIndexCurrent] = useState(parseInt(current.id - 1));
  // COLOR OF HEART LOCAL STORAGE 
  const [isFav, setIsFav] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isFav") == null || "") {
      localStorage.setItem("isFav", JSON.stringify(isFav));
    } else {
      setIsFav(JSON.parse(localStorage.getItem("isFav")));
    }
  }, []);
  // COLOR OF HEART LOCAL STORAGE 

  useEffect(()=>{
    if (localStorage.getItem('indexCurrent') == null || "") {
      localStorage.setItem('indexCurrent', indexCurrent)
    }else{
      setIndexCurrent(JSON.parse(localStorage.getItem("indexCurrent")))
    }
  },[])

  // CURRENT MUSIC LOCALSTORAGE 
  useEffect(() => {
    if (localStorage.getItem("current") == null || "") {
      localStorage.setItem("current", JSON.stringify(current));
    } else {
      setCurrent(JSON.parse(localStorage.getItem("current")));
     
 
      
    }
  }, []);
  // CURRENT MUSIC LOCALSTORAGE 
  
  // COLOR OF HEART IN MAIN PAGE 
  const isFavFunPre = () => {
    setIsFav(false);
    localStorage.setItem("isFav", false);
    fav.map((v, i) => {
      if (indexCurrent -1 < 0) {
        if (data[count -1].name == v.name) {
          setIsFav(true);
          localStorage.setItem("isFav", true);
        }
      }else{
      if (data[indexCurrent - 1].name == v.name) {
        setIsFav(true);
        localStorage.setItem("isFav", true);
      }}
    });
  };
  const isFavFunNext = () => {
    setIsFav(false);
    localStorage.setItem("isFav", false);

    fav.map((v, i) => {
      if (indexCurrent +1 > count-1) {
        if (data[0].name == v.name) {
          setIsFav(true);
          localStorage.setItem("isFav", true);
        }
      }else{
      if (data[indexCurrent+ 1].name == v.name) {
        setIsFav(true);
        localStorage.setItem("isFav", true);
      }}
    });
  };
  // COLOR OF HEART IN MAIN PAGE 

  const [listData, setListData] = useState([]);
  const [inpSearch, setInpSearch] = useState("");
  const [currentTime, setCurrentTime] = useState(0);

 
  // SEARCH INPUT 
  const keySearch = () => {
    newData = [];
    if (isAll == true) {
      data.map((val) => {
        indexInp = val.name.toLowerCase().indexOf(inpSearch.toLowerCase());

        if (indexInp != -1) {
          newData.push(val);
        }
      });
      setListData(newData);
    } else {
      fav.map((val) => {
        indexInp = val.name.toLowerCase().indexOf(inpSearch.toLowerCase());

        if (indexInp != -1) {
          newData.push(val);
        }
      });
      setListData(newData);
    }
  };
  // SEARCH INPUT 


  const [isMute, setIsMute] = useState(false)
  const [muteIcon, setMuteIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
  </svg>
  )

  // CONTROLERS
 
  // CLICK ON MUTE BUTTON 
  const mute = ()=>{
    if (isMute == false) {
      setMuteIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
      )
      setIsMute(true)
      music.current.muted = true
    
    }else{
      setMuteIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
      </svg>
      )
      setIsMute(false)
      music.current.muted = false


    }
  }
  // CLICK ON MUTE BUTTON 

  // CLICK ON REPEAT BUTTON 
  const repeat = ()=>{
    
    if (isRepeat == false) {
      setRepeatIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
      )
      setIsRepeat(prev=>{
        return true
      })
    }else{
      setRepeatIcon(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>)
      setIsRepeat(prev=>{
        return false
      })

    }
  }
  // CLICK ON REPEAT BUTTON 
  
  // CLICK ON PLAY AND PAUSE BUTTON 
  const playy = () => {
    if (playPause == true) {
      music.current.play();
      setPlayPause(false);
      setIcon(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={3.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 5.25v13.5m-7.5-13.5v13.5"
          />
        </svg>
      );
      setMusicDur(music.current.duration);
    } else {
      music.current.pause();
      setPlayPause(true);
      setIcon(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
          />
        </svg>
      );
    }
  };
  // CLICK ON PLAY AND PAUSE BUTTON 

  // CLICK ON NEXT MUSIC BUTTON 
  const next = () => {
    setIndexCurrent((prev) => {
      return prev + 1;
    });
    localStorage.setItem('indexCurrent',indexCurrent+1)
    if (indexCurrent == count - 1) {
      setIndexCurrent((prev) => {
        
        return 0;
      });
      localStorage.setItem('indexCurrent',0)

      isFavFunNext();
      setCurrent(data[0]);
      localStorage.setItem("current", JSON.stringify(data[0]));

      setTimeout(() => {
        music.current.play();
        setPlayPause(false);
        setIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
        setMusicDur(music.current.duration);
      }, 100);
    } else {
      isFavFunNext();
      setCurrent(data[indexCurrent + 1]);

      localStorage.setItem("current", JSON.stringify(data[indexCurrent + 1]));

      setTimeout(() => {
        music.current.play();
        setPlayPause(false);
        setIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
        setMusicDur(music.current.duration);
      }, 100);
    }
  };
  // CLICK ON NEXT MUSIC BUTTON 

  // CLICK ON PREVIOUS MUSIC BUTTON 
  const previous = () => {
    setIndexCurrent((prev) => {
      return prev - 1;
    });
    localStorage.setItem('indexCurrent',indexCurrent-1)

    if (indexCurrent == 0) {
      setIndexCurrent((prev) => {
        return count -1;
      });
    localStorage.setItem('indexCurrent',count -1)

      isFavFunPre();
      setCurrent(data[count - 1]);
      localStorage.setItem("current", JSON.stringify(data[count - 1]));

      setTimeout(() => {
        music.current.play();
        setPlayPause(false);
        setIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
        setMusicDur(music.current.duration);
      }, 100);
    } else {
      isFavFunPre();
      setCurrent(data[indexCurrent - 1]);
      localStorage.setItem("current", JSON.stringify(data[indexCurrent - 1]));

      setTimeout(() => {
        music.current.play();
        setPlayPause(false);
        setIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
        setMusicDur(music.current.duration);
      }, 100);
    }
  };
  // CLICK ON PREVIOUS MUSIC BUTTON 

   // CONTROLERS
  const [musicDur, setMusicDur] = useState(0);
  const metaData = () => {
    setMusicDur(music.current.duration);
  };
  const [repeatIcon , setRepeatIcon] = useState(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
  </svg>)
  const [isRepeat, setIsRepeat] = useState(false)
  const updateTime = () => {
    setCurrentTime(Math.round(music.current.currentTime));


  };
  
  
  // WHEN MUSIC IS ENDED

  const endMusic = ()=>{
    if (isRepeat == false) {
      next()
      
    }else{
      setCurrent(data[indexCurrent]);

      localStorage.setItem("current", JSON.stringify(data[indexCurrent]));
     
        
    }
    
    
    
    setCurrentTime(0);
   
    setTimeout(() => {
      
      music.current.play()
    }, 400);
  }
  // WHEN MUSIC IS ENDED


  // CLICK ON HEART ICON 
  const moveFav = () => {
    if (isFav == true) {
      newFav = [...fav];
      fav.map((val, i) => {
        if (val.name == data[indexCurrent].name) {
          newFav.splice(i, 1);
        }
      });

      setFav([...newFav]);
      setIsFav(false);
      localStorage.setItem("isFav", false);
      localStorage.setItem("Fav", JSON.stringify([...newFav]));
    } else {
      newFav = [...fav, data[indexCurrent]];
      setFav(newFav);
      setIsFav(true);
      localStorage.setItem("isFav", true);
      localStorage.setItem("Fav", JSON.stringify([...newFav]));
    }
  };
  // CLICK ON HEART ICON 

  // CLICK ON MUSIC BAR 
  const navClick = (e) => {
    const clickX = e.nativeEvent.offsetX;
    const width = nav.current.clientWidth;
    const newTime = (clickX / width) * musicDur;
    setCurrentTime(newTime);
    music.current.currentTime = newTime;
  };
  // CLICK ON MUSIC BAR 

  // CLICK ON MENU ICON 

  const openList = () => {
    if (showList == "100%") {
      setShowList(0);
      setIsAll(true);
      setListData(data);
    } else {
      setShowList("100% ");
    }
  };
  // CLICK ON MENU ICON 


  // CLICK ON ALL BUTTON AND HEART BUTTON IN LIST PAGE
  const listFav = () => {
    setListData([...fav]);
    setIsAll(false);
  };
  const listAll = () => {
    setListData([...data]);
    setIsAll(true);
  };
  // CLICK ON ALL BUTTON AND HEART BUTTON IN LIST PAGE


  // CHOOSING MUSIC BY CLICKING ON MUSIC LIST 
  const choose = (i, v) => {
    if (isAll == true) {
      

      data.map((value, index) => {
        if (v.name == value.name) {
          localStorage.setItem("current", JSON.stringify(data[index]));
          setCurrent(data[index]);
          setIsFav(false);
          localStorage.setItem("isFav", false);
          setIndexCurrent((prev) => {
            return index;
          });
    localStorage.setItem('indexCurrent',index)

          fav.map((v) => {
            if (data[index].name == v.name) {
              setIsFav(true);
            }
          });
        }
      });

      setShowList("100%");
      setTimeout(() => {
        music.current.play();
        setPlayPause(false);
        setIcon(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 5.25v13.5m-7.5-13.5v13.5"
            />
          </svg>
        );
        setMusicDur(music.current.duration);
      }, 100);
    } else {
      data.map((val, ind) => {
        if (val.name == v.name) {
          localStorage.setItem("current", JSON.stringify(data[ind]));
          setCurrent(data[ind]);
          setIndexCurrent((prev) => {
            return ind;
          });
          localStorage.setItem('indexCurrent',ind)

          setIsFav(true);
          localStorage.setItem("isFav", true);

          setShowList("100%");
          setTimeout(() => {
            music.current.play();
            setPlayPause(false);
            setIcon(
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="currentColor"
                className="size-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 5.25v13.5m-7.5-13.5v13.5"
                />
              </svg>
            );
            setMusicDur(music.current.duration);
          }, 100);
        }
      });
    }
  };
  // CHOOSING MUSIC BY CLICKING ON MUSIC LIST 

  // CLICK ON BACK BUTTON 
  const back = () => {
    setShowList("100%");
  };
  // CLICK ON BACK BUTTON 
  
  // RENDERING MUSIC LIST 
  useEffect(() => {
    data.map((val) => {
      newData.push(val);
    });
    setListData(newData);
  }, []);
  // RENDERING MUSIC LIST 

  return (
    <div
      style={{ overflow: "hidden" }}
      className="w-full h-[100vh] bg-[#262a2f] overflow-x-hidden   "
    >
      <store.Provider
        value={{
          data,
          previous,
          listAll,
          isAll,
          listData,
          moveFav,
          isFav,
          listFav,
          next,
          playy,
          music,
          icon,
          current,
          metaData,
          musicDur,
          currentTime,
          updateTime,
          nav,
          navClick,
          openList,
          showList,
          choose,
          back,
          inpSearch,
          setInpSearch,
          keySearch,
          repeat,
          repeatIcon,
          mute,
          muteIcon,
          endMusic
        }}
      >
        <Page2 />
        <Header />
        <Avatar />
        <Control />
        <Footer />
      </store.Provider>
    </div>
  );
}
