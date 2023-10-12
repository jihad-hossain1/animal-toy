import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MoonLoader } from "react-spinners";
import SingleManageToy from "./SingleManageToy";
import { AuthContext } from "../../../../authentication/AuthProvider";

import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Avatar", "Info", "Category", "Price", "QTY", "Action"];



const fetchData = () => {
  return axios.get(`${import.meta.env.VITE_BASE_URL}/toys`);
};

const ManageToy = () => {
  const { user } = useContext(AuthContext);
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
    <div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {/* {data?.data?.filter((item)=>item?.email === user?.email).map((ite,index)=><SingleManageToy key={index} ite={ite} />)} */}
        </div>
      </div>
      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Add
                Toy
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <>
              {data?.data
                ?.filter((item) => item?.email === user?.email)
                .map((ite,index) =>{
                    const isLast = index === data?.data
                    ?.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                    return  (
                        <SingleManageToy key={ite?._id} classes={classes} ite={ite} />
                      )
                })}
              </>
            </tbody>
          </table>
        </CardBody>
        {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter> */}
      </Card>
    </div>
  );
};

export default ManageToy;
