import React, { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { searchResullts } from "../Utils/SearchValue";
import UserProfile from "./UserProfile";

const About = () => {
  const [profile, setProfile] = useState("");
  const searchResult = useSelector((store) => store.searchValue.results);
  const dispatch = useDispatch();

  useEffect(() => {
    getData();

    if (searchResult) {
      dispatch(searchResullts(""));
    }
    // eslint-disable-next-line 
  }, []);

  const getData = async () => {
    const data = await fetch(`https://api.github.com/users/SACHINSOUMYA`);
    const json = await data.json();
    setProfile(json);
  };

  if (searchResult) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3">
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/011/998/173/small_2x/youtube-icon-free-vector.jpg"
            alt="youtube"
          />
          {/* <img
            src="https://lh3.googleusercontent.com/pw/ADCreHcwmJzKuG4CS93Bi6Ehmu-nyAVRW_fD9XFV65GNSY97TXsH0N_P1CNpTMNaNw3Rt2akHnCgFW5IlFjjDj0aquKPaYb0lpZpkN6AqAqUybQdpI28wdfNfOPc9xI3qW4ux5F9g1MxhWF_ARKDaG0q4RVl=w483-h516-s-no-gm?authuser=0"
            alt="profilepic" className="rounded-full border border-gray-500"
          /> */}
        </div>
        <div className="md:col-span-2 font-medium text-xl">
          <div>
            This is{" "}
            <span className="font-bold text-2xl text-red-700">YouTube</span>{" "}
            Clone. It is made up with tech-stack like
            <div className="my-2">
              <ol className="italic font-thin">
                <li className="py-1">
                  <span className="font-normal">React</span>- It consists
                  overall UI development logic .
                </li>
                <li className="py-1">
                  <span className="font-normal">TailWind Css</span> - It is used
                  for styling , look and feel of app and also responsive design.
                </li>
                <li className="py-1">
                  <span className="font-normal">Redux</span> - It is an external
                  library widely used with react for state management.
                </li>
              </ol>
              <div className="font-normal">
                The data are got from api provided by{" "}
                <span className="font-bold md:text-2xl  text-base text-red-700">
                  YouTube.
                </span>
              </div>
            </div>
            <div className="my-3">
              <div className="text-semibold">Features :</div>
              <ol className="italic font-thin list-disc mx-5">
                <li className="py-1">List of most popular videos</li>
                <li className="py-1">List of videos as per category.</li>
                <li className="py-1">List of videos as per search results.</li>
                <li className="py-1">Details about a video.</li>
                <li className="py-1">Comments about a video.</li>
                <li className="py-1">Suggested video list.</li>
                <li className="py-1">Details about a channel.</li>
                <li className="py-1">
                  Number of play lists and videos inside a playlist.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3 py-2">
        <UserProfile profileData={profile} />
      </div>
    </div>
  );
};

export default About;
