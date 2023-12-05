import React, { useContext } from "react";
import { MoonLoader } from "react-spinners";
import SingleCard from "./singleCard/SingleCard";
import SideNavBar from "../../components/sideNavBar/SideNavBar";
import { AiOutlinePause } from "react-icons/ai";
import { HiOutlineBars4, HiOutlineBars3 } from "react-icons/hi2";
import { Tooltip } from "@material-tailwind/react";
import ProductFilter from "../../components/productFilter/ProductFilter";
import { AuthContext } from "../../authentication/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

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

  const {
    filterState: { byStock, byFastDelivery, byRating, sort, searchQuery },
  } = useContext(AuthContext);

  const transformProducts = () => {
    let sortedProducts = [...data?.data];
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((itm) => itm.quantity);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((itm) => itm?.fast);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((itm) => itm.rating >= byRating);
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((itm) =>
        itm.toyTitle.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProducts;
  };
  return (
    <section className="flex  md:space-x-2 pb-6 mx-3">
      <div>
        <div className="hidden md:block ">
          <SideNavBar></SideNavBar>
          <div className="border border-blue-gray-100/70 p-3 drop-shadow-sm shadow-sm rounded-lg bg-blue-gray-50 bg-opacity-50">
            <ProductFilter />
          </div>
        </div>
      </div>
      <div>
        <div className="bg-blue-gray-100 p-4 flex justify-end">
          <div className="flex items-center gap-6">
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
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {transformProducts()?.map((card) => (
            <SingleCard key={card?._id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllToy;
