import React, { useState } from 'react';
import {AiOutlinePicRight} from 'react-icons/ai'
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  InboxIcon,
} from "@heroicons/react/24/solid";
import {TbHorseToy} from 'react-icons/tb'
import {MdCollectionsBookmark} from 'react-icons/md'
import {GiBoxUnpacking} from 'react-icons/gi'
import {LuMailQuestion} from 'react-icons/lu'
import {TbArrowRoundaboutRight} from 'react-icons/tb'
import {RiBearSmileLine} from 'react-icons/ri'
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";


const SideNavBar = () => {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
    const sideNvList = (
        <>
        <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3 hover:text-pink-400">
              <ListItemPrefix>
                <TbHorseToy className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal hover:text-pink-400">
                Toys
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                List Item
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                List Item
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                List Item
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
            />
          }
        >
          <ListItem className="p-0 " selected={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3 hover:text-pink-400">
              <ListItemPrefix>
                <MdCollectionsBookmark className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal hover:text-pink-400">
                Accessories
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                List Item
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                List Item
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem className='hover:text-pink-400'>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Collection
          <ListItemSuffix>
            <Chip value="new" size="sm" variant="ghost" color="pink" className="rounded" />
          </ListItemSuffix>
        </ListItem>
        <ListItem className='hover:text-pink-400'>
          <ListItemPrefix>
            <RiBearSmileLine className="h-5 w-5" />
          </ListItemPrefix>
          Teddies
          
        </ListItem>
        <ListItem className='hover:text-pink-400'>
          <ListItemPrefix>
            <LuMailQuestion className="h-5 w-5" />
          </ListItemPrefix>
          FAQs
        </ListItem>
        <ListItem className='hover:text-pink-400'>
          <ListItemPrefix>
            <GiBoxUnpacking className="h-5 w-5" />
          </ListItemPrefix>
          Toy Box
        </ListItem>
        <ListItem className='hover:text-pink-400'>
          <ListItemPrefix>
            <TbArrowRoundaboutRight className="h-5 w-5" />
          </ListItemPrefix>
          About Us
        </ListItem>
      </List>
        </>
    )
    return (
        <>
  
        <div className="border h-[calc(100vh-2rem)] w-full max-w-[20rem]  shadow-sm shadow-blue-gray-900/5 sticky top-0">
      <div className="mb-2">
      <div className="bg-[#ffd92e]  drop-shadow">
          <h4 className=" w-full uppercase font-semibold py-3 flex items-center  space-x-3 px-5">
          <AiOutlinePicRight className="text-2xl" />
          <span>shop by category</span>
          </h4>
          </div>
      </div>
      {
        sideNvList
      }
    </div>
        </>
    );
};

export default SideNavBar;

