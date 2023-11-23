import React from "react";

const Shimmer4 = () => {
  return (
    <div>
      <div className="font-bold text-xl py-2 w-full h-7 bg-slate-400 rounded-full shadow-lg"></div>
      <div className="grid  md:grid-cols-2 grid-col-1  gap-4 w-full py-4">
        <div className="flex justify-between">
          <div className="font-bold text-sm  p-2 h-14 w-2/6 bg-slate-400 rounded-full shadow-lg"></div>
          <div className="font-bold text-sm self-center md:justify-self-start justify-self-end w-2/6 h-10">
            <button className=" w-full h-full p-2 border  rounded-full font-medium text-center bg-slate-400 shadow-lg"></button>
          </div>
        </div>
        <div className="flex self-center justify-around text-lg ">
          <div className=" rounded-lg  flex justify-evenly  lg:w-1/6 md:w-28 w-24 bg-slate-400 shadow-lg">
            <div className=" hover:bg-zinc-200 lg:w-16 md:w-14 w-12 rounded-lg ">
              <span className="lg:text-sm md:text-[0.7rem] text-[0.55rem] "></span>
            </div>{" "}
            <div className=" hover:bg-zinc-200  md:w-14 text-center w-12 rounded-lg bg-slate-400 shadow-lg"></div>{" "}
          </div>
          <div className=" rounded-lg hover:bg-zinc-200 text-center lg:w-1/6 h-8 md:w-28 w-24 bg-slate-400 shadow-lg"></div>
          <div className=" rounded-lg hover:bg-zinc-200 text-center lg:w-1/6 h-8 md:w-28 w-24 bg-slate-400 shadow-lg"></div>
        </div>
      </div>
      <div className="bg-slate-400  w-full py-4 shadow-lg rounded-lg h-40"></div>
    </div>
  );
};

export default Shimmer4;
