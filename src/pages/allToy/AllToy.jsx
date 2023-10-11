import React from "react";
// import { useToys } from '../../hooks/useToys';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import SingleCard from "./singleCard/SingleCard";
import { Button } from "antd";
// import { FadeLoader } from 'react-spinners';

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
    return (<div>
        {error.message}
    </div>)
  }

  return (
    <div className="">
      <div className="flex justify-center py-4">
        <Button danger
          className="button button-pink  px-4"
          
        >
         Total toy : <span className="ml-2">{data?.data?.length}</span>
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
        {data?.data?.map((card) => (
          <SingleCard key={card?._id} card={card}></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default AllToy;
