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
      <div className="relative h-full">

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
          className="w-full h-full rounded bg-center  object-cover"
        >
            
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
        {/* <div className="">
          {trnad?.map((item) => (
            <div key={item?._id} className="">
              <div className="group">
                <div className="relative overflow-hidden">
                  <img src={item?.images?.img.img1} alt="" />

                  <div className="absolute w-full h-full flex flex-col justify-between -bottom-10 bg-blue-gray-400 bg-opacity-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-end ">
                      <div className="flex flex-col mr-4 mt-2">
                        <Link to={`/singletoy/${item?._id}`}>
                          <button className="rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500">
                            <TbEye className="h-5 w-5" />
                          </button>
                        </Link>
                        <button className="rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500">
                          <MdOutlineFavoriteBorder className="h-5 w-5" />
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-center mb-1">
                      <button
                        onClick={() => handleEnrollCart(item)}
                        className="bg-[#f0c507] px-2 py-1 md:px-4 md:py-2 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
                      >
                        add to cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center mt-2">
                  <h4 className="text-sm md:text-xl">{item?.toyTitle}</h4>
                  <Rate
                    disabled
                    defaultValue={item?.rating}
                    className="text-sm"
                  />
                  
                  <h4 className="text-sm md:text-md font-semibold">
                    <span className="text-blue-gray-600 line-through">
                      ${item?.price - 10}.00
                    </span>{" "}
                    <span>${item?.price}.00</span>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>

      {/* only for mobile device button slider */}
      <div className="md:hidden flex justify-center items-center">
        <div className="md:hidden space-x-1 mt-2">
          <button
            className="bg-[#f0c507]  p-3  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
            onClick={goToPrevious}
          >
            <AiOutlineLeft className="text-xl" />
          </button>
          <button
            className="bg-[#f0c507]  p-3  rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500"
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

// const raf=(
//     <>
//      <div className='group'>
//                 <Toaster />
//             {/* {quantity <= 0 ? 'hidden' :'block' } */}
//                 <div className='relative overflow-hidden'>

//                 {/* <img src={images?.img.img1} alt="" /> */}

//                     <div className="absolute w-full h-full flex flex-col justify-between -bottom-10 bg-blue-gray-400 bg-opacity-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">

//                         <div className='flex justify-end '>
//                             <div className='flex flex-col mr-4 mt-2'>
//                             <Link to={`/singletoy/${item?._id}`}>
//                             <button className='rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500'>
//                                 <TbEye className='h-5 w-5' />
//                             </button>
//                             </Link>
//                             <button className='rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500'>
//                                 <MdOutlineFavoriteBorder className='h-5 w-5' />
//                             </button>

//                             </div>
//                         </div>

//                         <div className='flex justify-center mb-1'>
//                         <button onClick={()=>handleEnrollCart(item)}  className='bg-[#f0c507] px-2 py-1 md:px-4 md:py-2 rounded text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500'>add to cart</button>
//                         </div>
//                     </div>

//                 </div>
//                 <div className='flex flex-col justify-center items-center mt-2'>
//                     <h4 className='text-sm md:text-xl'>
//                         {toyTitle}
//                     </h4>
//                     <Rate disabled defaultValue={rating} className='text-sm' />
//                     {/* <Rating readonly unratedColor="amber" ratedColor="amber" className='text-sm' value={rating} /> */}
//                     <h4 className="text-sm md:text-md font-semibold">
//                         <span className='text-blue-gray-600 line-through'>${price - 10}.00</span> <span>${price}.00</span>
//                     </h4>
//                 </div>
//             </div>
//     </>
// )
