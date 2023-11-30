import React from "react";

const UserProfile = ({ profileData }) => {
  const { avatar_url, bio, name, location } = profileData;

  return (
    <>
      <div className="md:order-last order-first mx-2">
        <img
          src={avatar_url}
          alt="profilepic"
          className="rounded-full border border-gray-500"
        />
      </div>

      <div className="md:col-span-2  text-xl self-center md:text-start text-center">
        <div className=" md:text-lg text-sm font-medium">
          Developped by - {name}
          <span className="text-sm font-thin mx-1">({location},Odisha)</span>
          <div className="text-sm font-thin">{bio}</div>
        </div>
        <div className="flex  md:w-3/6 marker:w-full  justify-between content-center py-3">
          <div className="hover:bg-slate-300 rounded-lg">
            <a href="https://www.instagram.com/sachinsoumya/">
              {" "}
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/instagram-new--v1.png"
                alt="instagram-new--v1"
              />
            </a>
          </div>
          <div className="hover:bg-slate-300 rounded-lg">
            <a href="https://twitter.com/SoumyaSachinPa1">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/twitterx--v1.png"
                alt="twitterx--v1"
              />
            </a>
          </div>
          <div className="hover:bg-slate-300 rounded-lg">
            <a href="https://www.linkedin.com/in/soumyasachin/">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
          <div className="hover:bg-slate-300 rounded-lg">
            <a href="https://github.com/sachinsoumya">
              {" "}
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/color/48/github--v1.png"
                alt="github--v1"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
