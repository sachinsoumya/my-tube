import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { CATEGORY_RESULTS_API } from "../Utils/Constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// const nameList = ["All", "News", "Music", "Trailers"];

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "red",
        marginLeft: "24px",
      }}
      onClick={onClick}
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        color: "black",
        marginRight: "24px",
      }}
      onClick={onClick}
    />
  );
}

const ButtonList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 3,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [videoCategories, setVideoCategories] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(CATEGORY_RESULTS_API);
    const json = await data.json();

    console.log(json.items);

    setVideoCategories(json.items);
  };

  return (
    <div>
      {/* <Button name="All" />
      <Button name ="News" />
      <Button name="Music" />
      <Button  name="Trailers"/> */}
      {/* <Button />
      <Button /> */}

      <Slider {...settings} className="px-7">
        {videoCategories &&
          videoCategories.map((item, index) => {
            return (
              <Link to={`/catagory/${item.id}`} key={item.id}>
                <Button name={item.snippet.title} />
              </Link>
            );
          })}
      </Slider>
    </div>
  );
};

export default ButtonList;
