import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {MdAddShoppingCart} from 'react-icons/md'
import {TfiEmail} from 'react-icons/tfi'
const LogoWithSearchNav = () => {
  const [searchProduct, setSearchProduct] = useState("");
  // const onChange = ({ target }) => setSearchProduct(target.value);
  return (
    <div className="container mx-auto flex justify-between items-center mt-2 py-6 text-gray-700">
      {/* logo here  */}
      <Link to={'/'} className="">
        <img src="https://i.ibb.co/sm78DcQ/toy.png" className="inline-block w-2/6 md:w-2/5 lg:w-2/5 object-cover" alt="" />
      </Link>
    {/* search section  */}
      <div className="">
        <div className="relative flex lg:w-[24rem] ">
          <Input
            type="text"
            label="Search Products"
            value={searchProduct}
            onChange={({ target }) => setSearchProduct(target.value)}
            className="pr-20"
            containerProps={{
              className: "m w-full",
            }}
          />
          <Button
            size="sm"
            color={searchProduct ? "yellow" : "blue-gray"}
            disabled={!searchProduct}
            className="!absolute right-1 top-1 rounded hover:text-white hover:bg-pink-500"
          >
            Search
          </Button>
        </div>
      </div>
        {/* cart and contact email  */}
      <div>
          <div className="flex space-x-3 items-center">
            <div className="flex space-x-3 items-center">
              <TfiEmail className="text-4xl" />
              <div>
              <h4 className=" font-semibold">
                Email Us
              </h4>
              <p className="text-gray-600 text-sm">abcInfo@example.com</p>
              </div>
            </div>
            <button className="flex space-x-2 items-center">
              <MdAddShoppingCart className="text-4xl" />
              <div>
              <span className=" font-semibold">
                Shoping Cart
              </span>
              <p className="text-gray-600 text-sm">0 item</p>
              </div>
            </button>
          </div>
      </div>
    </div>
  );
};

export default LogoWithSearchNav;
