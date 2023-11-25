import React from "react";
import { RiSignalWifiErrorLine } from "react-icons/ri";;

const Error = ({ error }) => {
  return (
    <div className="flex justify-center w-6/6 text-center">
      <div>
        <div className="flex justify-center py-2 "><RiSignalWifiErrorLine className="inline-block w-28 h-28" /></div>
      
        <div className="font-bold text-lg">  !Oops....Error Occured </div>
        <div className="font-medium text-sm ">{error}..Check your internate connection or contact to developer.</div>
      </div>
    </div>
  );
};

export default Error;
