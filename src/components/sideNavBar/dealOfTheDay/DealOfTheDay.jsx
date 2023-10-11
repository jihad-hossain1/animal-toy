import React, { useEffect, useState } from "react";
import ImageSlider from "./ImageSlider";


const DealOfTheDay = () => {
    const [trnad,setTrand] =useState([])

  useEffect(()=>{
     fetch(`${import.meta.env.VITE_BASE_URL}/toys`).then(res=>res.json()).then(data=>{
        const dat = data?.filter((toy)=>toy?.rating >= 4)
        setTrand(dat)
    })
  },[])
    const containerStyles = {
        with: '500px',
        height: '380px',
        margin: '0 auto',
        
    }
  return (
    <div className=" min-h-[100px] bg-gray-50 bg-opacity-30 p-2 border rounded-lg">
      
    <div style={containerStyles} className="h-full w-full p-2">
    <ImageSlider trnad={trnad} />
    </div>
    </div>
  );
};

export default DealOfTheDay;
