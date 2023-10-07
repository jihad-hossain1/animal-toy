import React, { useState } from "react";
import { Input, Button, Drawer, Typography, IconButton, DialogHeader, DialogBody, Dialog, DialogFooter } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {MdAddShoppingCart} from 'react-icons/md'
import {TfiEmail} from 'react-icons/tfi'
import {RiSearchLine} from 'react-icons/ri'
import Search from "../search/Search";

const LogoWithSearchNav = () => {
  // const [openSearch, setOpenSearch] = useState(false)
  // const onChange = ({ target }) => setSearchProduct(target.value);
  const [openRight, setOpenRight] = useState(false);
  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
 
  return (
    <div className="container mx-auto flex justify-between items-center md:mt-2 py-3  md:py-6 text-gray-700 px-2">
      {/* logo here  */}
      {/* <div>
        <button className="">Animal toy</button>
      </div> */}
      <div className="block md:hidden">
        <button  onClick={handleOpen}>
        <RiSearchLine className="text-3xl" />
        </button>
      </div>
      <div className="md:hidden ">
        {open ?  <Dialog open={open} handler={handleOpen} className="fixed top-10">
        <DialogHeader className="ml-6">
         <Search />
        </DialogHeader>
        <DialogBody divider className="grid place-items-center gap-4">
          <div className="min-h-[200px]"></div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          
          <Button size="sm" variant="gradient" onClick={handleOpen}>
           close
          </Button>
        </DialogFooter>
      </Dialog> : ''}
      </div>
      <div className="-ml-12 md:ml-0">
      <Link to={'/'} className="flex flex-col items-center drop-shadow-sm">
        <span className="text-pink-600 font-bold text-md md:text-xl">Animal Toy</span>
        <span className="bg-[#ffd92e] rounded-sm px-1 text-black text-xs md:text-sm font-serif uppercase">Super Store</span>
        {/* <img src="https://i.ibb.co/sm78DcQ/toy.png" className="inline-block w-24 md:w-2/5 lg:w-2/5 object-cover" alt="" /> */}
      </Link>
      </div>
    {/* search section  */}
      <div className="hidden md:block">
        <Search />
      </div>
        {/* cart and contact email  */}
      <div>
          <div className="flex space-x-3 items-center">
            <div className="hidden md:flex space-x-3 items-center">
              <TfiEmail className="text-4xl" />
              <div>
              <h4 className=" font-semibold">
                Email Us
              </h4>
              <p className="text-gray-600 text-sm">abcInfo@example.com</p>
              </div>
            </div>
            <button className="md:flex space-x-2 items-center">
              <MdAddShoppingCart onClick={openDrawerRight} className="text-3xl md:text-4xl" />
              <div className="hidden md:block">
              <span className=" font-semibold">
                Shoping Cart
              </span>
              <p className="text-gray-600 text-sm">0 item</p>
              </div>
            </button>
          </div>
          <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between border-b border-blue-gray-200">
          <Typography variant="h5" color="blue-gray" className="uppercase text-sm">
            Cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
        <p className="text-gray-600 text-sm">0 item</p>
        </div>
      </Drawer>
      </div>
    </div>
  );
};

export default LogoWithSearchNav;
