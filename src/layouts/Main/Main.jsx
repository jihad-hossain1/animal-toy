import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import TopHeader from "../../components/header/topHeader/TopHeader";
import LogoWithSearchNav from "../../components/LogoWithSearchNav/LogoWithSearchNav";
import DesktopNav from "../../components/desktopNav/DesktopNav";

import SideNavBar from "../../components/sideNavBar/SideNavBar";
const Main = () => {
  return (
    <div className="">
      <header>
        {/* top nav  */}
       <TopHeader></TopHeader>
        {/* logo with search and shoping cart  */}
        <LogoWithSearchNav></LogoWithSearchNav>
        {/* Desktop Navbar  */}
        <DesktopNav></DesktopNav>
      </header>
      <div className="container mx-auto flex space-x-2">
        <SideNavBar></SideNavBar>
        <div className="md:ml-48 container mx-auto border">
        <Outlet></Outlet>
        </div>
      </div>
      <footer>footer</footer>
    </div>
  );
};

export default Main;
