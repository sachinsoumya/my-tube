import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

import { YOUTUBE_SEARCH_API } from "../Utils/Constant";
import { cacheResult } from "../Utils/SearchSlice";
import { searchResullts } from "../Utils/SearchValue";
import { SEARCH_RESULTS_API } from "../Utils/Constant";

export const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");
  const [searchValue, setSearchValue] = useState(false);
  const [error, setError] = useState("");
  console.log(searchValue);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // console.log(searchQuery);

  useEffect(() => {
    //api call
    // console.log(searchQuery);

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSuggestions();
      }
    }, 200);

    //make an api call after every key press .
    //but if the difference between 2 api calls is < 200ms then ,
    // Declain the api call

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line
  }, [searchQuery]);

  const getSuggestions = async () => {
    try {
      console.log("Api Call -" + searchQuery);
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      // console.log(json[1]); datas coming from api

      dispatch(
        cacheResult({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      // console.log(error); error
      setError(error.message);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const updateState = (item) => {
    setsearchQuery(item);

    setShowSuggestions(false);
    if (searchValue) {
      setShowSuggestions(false);
    } else {
      setSearchValue(true);
    }

    apiCall(item);
  };

  const apiCall = async (value) => {
    const data = await fetch(`${SEARCH_RESULTS_API}${value}`);
    const json = await data.json();
    // console.log(json); datas coming from api

    dispatch(searchResullts(json.items));
  };

  return (
    <div className="grid grid-cols-6  gap-x-9 pb-2 pt-1 px-0 lg:px-4 md:gap-x-14 shadow-xl">
      <div className="flex ">
        <img
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
          alt="hamburgericon"
          className="w-8 h-8 lg:w-16 lg:h-11 md:h-9 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />

        <img
          src="https://t3.ftcdn.net/jpg/04/09/83/66/360_F_409836622_TRZxeID3QUi3gqecV0V1TQiCYEskG61a.jpg"
          alt="YoutubeLogo"
          className="w-14 h-8  lg:w-16 lg:h-12 md:h-10"
        />
      </div>

      <div className="col-span-4 px-3 md:px-8">
        <input
          type="text"
          className=" h-8  p-1 w-4/6 lg:h-10 border border-black rounded-l-full lg:w-5/6 lg:p-2  md:w-5/6 md:p-5"
          onChange={(e) => setsearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          // onBlur={() => searchValue && setShowSuggestions(false)}
          value={searchQuery}
        />

        <button className="border border-black p-1 md:p-2 rounded-r-full bg-gray-100 "  onClick={() => updateState(searchQuery)}>
          {" "}

          🔍
        </button>

        {!error && showSuggestions && (
          <div className="fixed w-40 md:w-96 lg:w-3/6 bg-white p-2 rounded-lg mt-2 shadow-md border border-gray-200 ">
            <ul>
              {suggestions &&
                suggestions.map((item) => {
                  return (
                    <li
                      className="py-2 hover:bg-gray-200"
                      key={item}
                      onClick={() => updateState(item)}
                    >
                      {" "}
                      🔍{item}
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTokYiXVk2pTRq5-0qqY_NZw0ouDDZkcWiJWOQZ0NVW2fXKAVFHQHH7lSwGLyBLg3VwOik&usqp=CAU "
          className=" w-10 h-8 lg:w-16 lg:h-14  md:h-10"
          alt="UserIcon"
        />
      </div>
    </div>
  );
};
