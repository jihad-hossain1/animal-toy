import React from "react";
import MainContainer from "../container/MainContainer";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="bg-blue-gray-50">
      <MainContainer>
        <footer className="relative w-full">
          <div className="mx-auto w-full max-w-7xl px-8">
            <div className="mx-auto grid w-full gap-8 py-12 grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
              {SITEMAP.map(({ title, links }, key) => (
                <div key={key} className="w-full">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-4 font-bold uppercase opacity-50"
                  >
                    {title}
                  </Typography>
                  <ul className="space-y-1">
                    {links.map((link, key) => (
                      <Typography
                        key={key}
                        as="li"
                        color="blue-gray"
                        className="font-normal"
                      >
                        <Link
                          to={'/'}
                          className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                        >
                          {link}
                        </Link>
                      </Typography>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex w-full  items-center justify-center border-t border-blue-gray-50 py-4 ">
              <Typography
                variant="small"
                className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
              >
                &copy; {currentYear}{" "}
                <Link to="https:jihad-hossain.web.app/">Jihad Hossain</Link>. All
                Rights Reserved.
              </Typography>
              
            </div>
          </div>
        </footer>
      </MainContainer>
    </div>
  );
};

export default Footer;
