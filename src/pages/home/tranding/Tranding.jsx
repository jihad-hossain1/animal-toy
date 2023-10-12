import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleTrandingToy from "./SingleTrandingToy";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoonLoader } from "react-spinners";

const fetchData = () => {
    return axios.get(`${import.meta.env.VITE_BASE_URL}/toys`);
  };

const Tranding = () => {
  const { isLoading, data, isError, error,refetch } = useQuery(["toys"], fetchData);
  if (isLoading) {
    return (
      <div className=" flex flex-col justify-center items-center my-20  md:mt-48">
        <MoonLoader color="#ff0b96" />
      </div>
    );
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="p-2">
      <Tabs>
        <TabList
          className={`grid md:flex space-x-3 md:justify-between justify-center items-center border-b pb-3`}
        >
          <div className="font-extrabold uppercase text-center md:text-start mb-5 md:mb-0 border-b md:border-0 pb-4 md:pb-0 flex space-x-4 items-center">
            <div className="bg-[#fc82bd] drop-shadow shadow-md rounded-full w-3 h-3"></div>
            <h4>Trending Products</h4>
          </div>
          <div>
            <div className="flex space-x-4">
              <Tab className={`cursor-pointer font-semibold`}>Featured</Tab>
              <Tab className={` cursor-pointer font-semibold`}>Latest</Tab>
              <Tab className={` cursor-pointer font-semibold`}>
                Best Sellers
              </Tab>
            </div>
          </div>
        </TabList>

        <div className="mt-4">
          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data?.data?.filter((item)=>item?.featured === "featured").map((ite,index)=><SingleTrandingToy key={index} ite={ite} />)}
            </div>
            <div className="flex justify-center mt-6">
              <Link to={'/alltoys'}>
              <button className="bg-[#f0c507] px-3 py-2 md:px-4 md:py-2 rounded-lg text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
                View all
              </button>
              </Link>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data?.data?.filter((item)=>item?.featured === "latest").map((ite,index)=><SingleTrandingToy key={index} ite={ite} />)}
            </div>
            <div className="flex justify-center mt-6">
              <Link to={'/alltoys'}>
              <button className="bg-[#f0c507] px-3 py-2 md:px-4 md:py-2 rounded-lg text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
                View all
              </button>
              </Link>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {data?.data?.filter((item)=>item?.featured === "bestseller").map((ite,index)=><SingleTrandingToy key={index} ite={ite} />)}
            </div>
            <div className="flex justify-center mt-6">
              <Link to={'/alltoys'}>
              <button className="bg-[#f0c507] px-3 py-2 md:px-4 md:py-2 rounded-lg text-black text-xs md:text-[14px] inline-block uppercase hover:bg-[#fc82bd] hover:text-white transition-all duration-500">
                View all
              </button>
              </Link>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default Tranding;
