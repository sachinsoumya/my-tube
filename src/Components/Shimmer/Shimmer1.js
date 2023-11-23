import React from "react";

const Shimmer1 = () => {
  return (
    <div className="w-full  md:w-60 lg:w-72 rounded-lg my-2 p-2">
      <div className="bg-slate-500  h-36"></div>

      <div className="flex py-2 w-full justify-between">
        <div className="bg-slate-500 rounded-full w-12 h-10"></div>

        <div className="bg-slate-500 w-52 h-12"></div>
      </div>
    </div>
  );
};

export default Shimmer1;
