import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import SingleCard from "./singleCard/SingleCard";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import { AiOutlinePause } from "react-icons/ai";
import { HiOutlineBars4, HiOutlineBars3 } from "react-icons/hi2";
import { Tooltip } from "@material-tailwind/react";
import ProductFilter from "../../components/productFilter/ProductFilter";

const fetchData = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/toys`);
};
const AllToy = () => {
  const { isLoading, data, isError, error } = useQuery(["toys"], fetchData);
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
    <div className="flex  md:space-x-2 pb-6 mx-3">
      <div>
      <div className="hidden md:block ">
        <SideNavBar></SideNavBar>
        <div className="border border-blue-gray-100/70 p-3 drop-shadow-sm shadow-sm rounded-lg bg-blue-gray-50 bg-opacity-50">
        <ProductFilter data={data} />
        </div>
      </div>

      </div>
      <div className="">
        <div className="flex flex-col md:flex-row md:justify-between space-y-3 md:space-y-0 md:items-center py-4 bg-blue-gray-50 rounded border drop-shadow-sm border-blue-gray-50 px-2 mb-4 mt-4">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-3 items-center">
              <div className=" space-x-4">
                <Tooltip
                  content="toy show two line"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <button>
                    <AiOutlinePause className="text-xl text-blue-gray-700" />
                  </button>
                </Tooltip>
                <Tooltip
                  content="toy show three line"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                 <button>
                  <HiOutlineBars3 className="text-xl text-blue-gray-700" />
                </button>
                </Tooltip>
                <Tooltip
                  content="toy show four line"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <button>
                  <HiOutlineBars4 className="text-xl text-blue-gray-700" />
                </button>
                </Tooltip>
              </div>
              <h4 className="text-blue-gray-700">
                Showing {data?.data?.length} of {data?.data?.length} Toys
              </h4>
            </div>
          </div>
          <div className=" flex space-x-2 items-center">
           <h4> Sort by: </h4>
          <select className="bg-blue-gray-50 bg-opacity-40 px-2 border-b border-blue-gray-200 ">
           
           <option>A-Z Toys</option>
           <option>low to high price</option>
           <option>AllToy</option>
          </select>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        
          {data?.data?.map((card) => (
            <SingleCard key={card?._id} card={card}></SingleCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllToy;
