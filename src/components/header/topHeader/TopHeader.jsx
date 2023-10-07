import React from "react";
import { Link, NavLink } from "react-router-dom";
import { VscTag } from "react-icons/vsc";
import { IoLogoUsd } from "react-icons/io";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { FaUserGear } from "react-icons/fa6";
import { TbLogin2,TbHelpTriangleFilled } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiChevronDown,BiLogOut } from "react-icons/bi";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const TopHeader = () => {
  return (
    <>
      <div className="bg-blue-gray-50 text-gray-700">
        <div className="container mx-auto flex md:items-center md:justify-between justify-center  md:px-0">
          <div className="hidden md:block">
            <h4 className="flex text-gray-700 space-x-3 items-center">
              <VscTag />
              <span> Welcome To Our Animal Toy Store</span>
            </h4>
          </div>
          <div className="py-2 px-1">
            <ul className="flex space-x-3 items-center">
              <Link to={"/whitelist"}>
                <li className="text-sm md:text-md">whiteList</li>
              </Link>
              <div className="h-[10px] min-h-[20px] w-px self-stretch bg-gradient-to-tr from-transparent via-blue-gray-900 to-transparent opacity-20 dark:opacity-100"></div>
              <li className="cursor-pointer ">
                <Menu>
                  <MenuHandler>
                    <button className="flex space-x-2 items-center"><span className="text-sm md:text-md">Account</span> <BiChevronDown className="text-md md:text-xl"/></button>
                  </MenuHandler>
                  <MenuList>
                    <Link to={'/login'}>
                    <MenuItem className="flex space-x-2 items-center"> <TbLogin2 className="text-xl"/> <span>Log-In</span> 
                    </MenuItem>
                    </Link>
                    <Link to={'/'}>
                    <MenuItem className="flex space-x-2 items-center"> <BiLogOut className="text-xl"/> <span>Log-Out</span> 
                    </MenuItem>
                    </Link>
                    <Link to={'/'}>
                    <MenuItem className="flex space-x-2 items-center"> <LuLayoutDashboard className="text-xl"/> <span>Dashboard</span> 
                    </MenuItem>
                    </Link>
                    <Link to={'/'}>
                    <MenuItem className="flex space-x-2 items-center"> <FaUserGear className="text-xl"/> <span>Profile</span> 
                    </MenuItem>
                    </Link>
                    <Link to={'/'}>
                    <MenuItem className="flex space-x-2 items-center"> <TbHelpTriangleFilled className="text-xl"/> <span>Help</span> 
                    </MenuItem>
                    </Link>
                    
                  </MenuList>
                </Menu>
                
              </li>
              <div className="h-[10px] min-h-[20px] w-px self-stretch bg-gradient-to-tr from-transparent via-blue-gray-900 to-transparent opacity-20 dark:opacity-100"></div>
              <li className="cursor-pointer">
              <Menu>
                  <MenuHandler>
                    <button className="flex space-x-2 items-center"><span className="text-sm md:text-md">USD $</span> <BiChevronDown className="text-md md:text-xl"/></button>
                  </MenuHandler>
                  <MenuList>
                  
                    <MenuItem className="flex space-x-2 items-center"> <IoLogoUsd className="text-xl"/> <span>USD</span> 
                    </MenuItem>
                    <MenuItem className="flex space-x-2 items-center"> <PiCurrencyGbpBold className="text-xl"/> <span>GBP</span> 
                    </MenuItem>
                    
                  </MenuList>
                </Menu>
              </li>
              <div className="h-[10px] min-h-[20px] w-px self-stretch bg-gradient-to-tr from-transparent via-blue-gray-900 to-transparent opacity-20 dark:opacity-100"></div>
              <li className="cursor-pointer">
              <Menu>
                  <MenuHandler>
                    <button className="flex space-x-2 items-center"><span className="text-sm md:text-md">English</span> <BiChevronDown className="text-md md:text-xl"/></button>
                  </MenuHandler>
                  <MenuList>
                  
                    <MenuItem className="text-center"> English 
                    </MenuItem>
                    <MenuItem className="text-center"> العربية 
                    </MenuItem>
                    <MenuItem className="text-center"> Espenol 
                    </MenuItem>
                   
                  </MenuList>
                </Menu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
