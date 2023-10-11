import React from "react";
import Slider from "./slider/Slider";
import Offer from "./offer/Offer";
import DealOfTheDay from "../../components/sideNavBar/dealOfTheDay/DealOfTheDay";
import SideNavBar from "../../components/sideNavBar/SideNavBar";

const Home = () => {
  return (
    <div>
      <div className="flex space-x-2">
        <div className="hidden md:block ">
          <SideNavBar></SideNavBar>
          {/* <DealOfTheDay /> */}
        </div>
        <div className="mt-2">
          <Slider />
        </div>
      </div>
      <div className="min-h-32 bg-blue-gray-50 bg-opacity-50 drop-shadow-sm mt-6 rounded-md p-2">
        <Offer />
      </div>
      {/* dealOfTheDay & tranding option  */}
      <div className="flex">
        <div className="hidden md:block">
          <DealOfTheDay />
        </div>
        <div>tranding</div>
      </div>
      <div className="h-[500px] md:hidden">
        <DealOfTheDay />
      </div>
    </div>
  );
};

export default Home;
