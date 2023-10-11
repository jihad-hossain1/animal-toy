import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TbEye } from "react-icons/tb";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { Rate } from "antd";

const ImageSlider = ({ trnad }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    zIndex: 1,
    cursor: "pointer",
  };
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    zIndex: 1,
    cursor: "pointer",
  };
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? trnad.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === trnad.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };
  const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const handleEnrollCart = (obj) => {
    // console.log(obj);
  };
  return (
    <>
      <div className="flex md:justify-between space-x-2 mb-2">
        <div className="uppercase font-bold  flex items-center space-x-2">
          <div className="bg-[#fc82bd] drop-shadow shadow-md rounded-full w-3 h-3 fontStyle"></div>{" "}
          <h4> deal Of The Day</h4>
        </div>
        {/* only for desktop side nav button slier  */}
        <div className="hidden md:block space-x-1">
          <button
            className="bg-[#f0c507]  p-1  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
            onClick={goToPrevious}
          >
            <AiOutlineLeft />
          </button>
          <button
            className="bg-[#f0c507]  p-1  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
            onClick={goToNext}
          >
            <AiOutlineRight />
          </button>
        </div>
      </div>
      {/* main slider components  */}
      <div className="relative h-full ">

        {/* for slider left & right button */}
        {/* <div  style={leftArrowStyles} className="">
        left
      </div>
      <div onClick={goToNext} style={rightArrowStyles} className="">
        right
      </div> */}


        {/* main slider  */}
        <div
          style={{
            backgroundImage: `url(${trnad[currentIndex]?.images?.img?.img1})`,
          }}
          className="w-full h-full rounded  bg-contain bg-no-repeat relative"
        >
            <div className="absolute bottom-5">
            <div className="text-3xl">
              {/* 20% off */}
            </div>
            </div>
        </div>


        {/* <div style={dotsContainerStyles} className="">
        {
            trnad.map((slide,slideIndex)=>{
                <div style={dotStyle} key={slideIndex} onClick={()=>goToSlide(slideIndex)}>
                    dot
                </div>
            })
        }
      </div> */}
        
      </div>

      {/* only for mobile device button slider */}
      <div className="md:hidden flex justify-center items-center">
        <div className="md:hidden space-x-1 mt-2">
          <button
            className="bg-[#f0c507]  p-2  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
            onClick={goToPrevious}
          >
            <AiOutlineLeft className="text-xl" />
          </button>
          <button
            className="bg-[#f0c507]  p-2  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
            onClick={goToNext}
          >
            <AiOutlineRight className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;


