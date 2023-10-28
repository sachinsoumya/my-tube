import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu} from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom"

const Watchpage = () => {
  const[searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="lg:w-4/6 lg:h-[32rem] md:h-[33rem] w-full h-60 p-2">
      <iframe
       className="w-full h-full rounded md:rounded-lg lg:rounded-lg"
        
        src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="ଚହଳ | Chahala | Full Video Song | Malyagiri | Babushaan | Sivani | Ananya | Gaurav | JP Wordsmith"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        
      ></iframe>
    </div>
  );
};

export default Watchpage;
