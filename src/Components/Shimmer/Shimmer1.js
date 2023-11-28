import React from "react";

const Shimmer1 = () => {
  return (
    <div className="w-full  md:w-60 lg:w-72 xl:w-full my-2 p-2">
      <div className="bg-slate-400  h-36 rounded-lg"></div>

      <div className="flex py-2 w-full justify-between ">
        <div className="bg-slate-400 rounded-full w-12 h-10 self-center"></div>

        <div className="bg-slate-400 w-52 h-12 rounded-lg lg:ml-0  ml-1"></div>
      </div>
    </div>
  );
};

export default Shimmer1;
