import React, { useState } from 'react';
import {AiOutlinePicRight, } from 'react-icons/ai'
import {
  Drawer,
  Button,
  Typography,
  IconButton,

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
import {RxCross2} from 'react-icons/rx'
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useLocation } from 'react-router-dom';
import DealOfTheDay from './dealOfTheDay/DealOfTheDay';


const SideNavBar = () => {

  const location = useLocation();
  // console.log(location.pathname);
  const sideFilterNav = location.pathname.includes('/alltoys') 
  const nosideFilterNav = location.pathname.includes('/alltoys') 
  // const homeTrandingNav = location.pathname.includes('') || location.pathname.includes('/')
  // || location.pathname.includes('/alltoys') || location.pathname.includes('/contact') || location.pathname.includes('/tranding') 
  

    const [open, setOpen] = useState(0);
    const [openCategory, setOpenCategory] = useState(false);

   
    
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    const openDrawer = () => setOpenCategory(true);
  const closeDrawer = () => setOpenCategory(false);

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
  {/* h-[calc(100vh-2rem)] */}
        <div className="hidden md:block   w-full max-w-[20rem]  shadow-sm shadow-blue-gray-900/5 ">
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
     
     {/* {sideFilterNav && <div className='hidden md:block   w-full max-w-[20rem]  shadow-sm shadow-blue-gray-900/5  '>
      <div className='h-[400px] bg-blue-gray-50 p2 pt-3'>
      <h4 className='uppercase  font-semibold text-center'>
      Fileter on Toys
      </h4>
      </div>
    </div>} */}
    {nosideFilterNav || <div className='mt-4 hidden md:block   w-full max-w-[20rem]  shadow-sm shadow-blue-gray-900/5  '>
    {/* DEAL OF THE DAY */}
      {/* <DealOfTheDay /> */}
      {/* <div className='min-h-[100px] bg-gray-50 p-2'>
      new arrival
      </div>
      <div className='min-h-[100px] bg-gray-50 p-2'>
      What's our client says
      </div>
      <div className='min-h-[100px] bg-gray-50 p-2'>
      Newsletter
      </div> */}
    </div> }
    
    </div>
    
    
        
       
      <div className='block md:hidden sticky top-0 '>
      <button onClick={openDrawer} className=' px-2 shadow-sm drop-shadow-md'>
        <AiOutlinePicRight className='text-3xl text-gray-900'/>
      </button>
      </div>
      <Drawer open={openCategory} onClose={closeDrawer} className="">
        <div className='flex justify-between items-center bg-[#ffd92e]  drop-shadow py-2 px-4'>
          <h4 className='text-sm text-gray-900 uppercase font-semibold'>shop by category</h4>
          <button onClick={()=>setOpenCategory(false)}>
            <RxCross2 className='text-xl text-pink-500' />
          </button>
        </div>
        {sideNvList}
      </Drawer>
    
      
        </>
    );
};

export default SideNavBar;

