import React, { useEffect, useState } from "react";
import { CATEGORY_VIDEOS_API } from "../Utils/Constant";
import { Link, useParams } from "react-router-dom";
import VideoCart from "./VideoCart";

const Catagory = () => {
  const [catVideos, setCatVideos] = useState("");
  const params = useParams();
  console.log(params);
  const { id } = params;

  useEffect(() => {
    getData(id);
  }, [id]);

  const getData = async (id) => {
    const data = await fetch(`${CATEGORY_VIDEOS_API}${id}`);
    const json = await data.json();

    console.log(json);

    setCatVideos(json.items);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
      {catVideos &&
        catVideos.map((item) => {
          return <Link to={`/watch?v=${item.id}`}><VideoCart info={item} /></Link>;
        })}
    </div>
  );
};

export default Catagory;
