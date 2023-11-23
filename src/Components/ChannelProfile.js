import React, { useState } from "react";

const ChannelProfile = ({ details, statistics }) => {
  console.log(details);

  const [btn, setBtn] = useState("more");
  const { customUrl, description, title, thumbnails, country } = details;

  const [text, setText] = useState(description.slice(0, 150));

  const { subscriberCount, videoCount, viewCount } = statistics;

  const { medium } = thumbnails;

  const updateComp = () => {
    if (text.length < description.length) {
      setText(description);
      setBtn("less");
    } else {
      setText(description.slice(0, 150));
      setBtn("more");
    }
  };

  return (
    <div>
      <div className="grid grid-cols-3 lg:w-5/6 w-full justify-evenly py-3 px-1 gap-2">
        <div>
          <img
            src={`${medium.url}`}
            alt="profile"
            className="rounded-full border border-slate-200 "
          />
        </div>

        <div className="col-span-2 w-full">
          <div className="font-bold lg:text-4xl text-lg">
            {title}
            <span className="px-2 font-normal text-xs">{country}</span>
          </div>
          <div className="flex justify-between flex-col lg:flex-row py-2 md:h-auto h-32 text-gray-500">
            <div>{customUrl}</div>

            <div>
              {subscriberCount}
              <span className="text-xs">{" "}Subscribers</span>
            </div>
            {/* <div></div> */}

            <div>
              {videoCount}
              <span className="text-xs">{" "}Videos.</span>
            </div>
            {/* <div></div> */}

            <div>
              {viewCount}
              <span className="text-xs">{" "}Views.</span>
            </div>
            {/* <div></div> */}
          </div>
          <div>
            {text}
            <span onClick={() => updateComp()}> {text && btn}</span>
          </div>
          <div className="my-3">
            <button className="bg-black text-white w-24 p-2 border border-black rounded-full font-medium text-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelProfile;
