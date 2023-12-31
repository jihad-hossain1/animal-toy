import React from 'react';
import { Link } from 'react-router-dom';
import {TbEye} from 'react-icons/tb'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import { Badge } from 'antd';

const NewArrival = () => {
    return (
       
        <div className='group p-3'>
  
    <Badge.Ribbon text="New Arrive" color="gold" >
            <div className=''>
            <div className='relative overflow-hidden'>
                <img className='rounded-lg' src="https://i.ibb.co/stW7VR0/left-banner.webp" alt="" />
                <div  className="absolute w-full h-full flex flex-col justify-between -bottom-10 bg-blue-gray-400 bg-opacity-20 scale-105 group-hover:translate-x-2 group-hover:translate-y-3 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className='flex justify-end '>
                            <div className='flex flex-col mr-4 mt-8'>
                            <Link to={`/alltoys`}>
                            <button className='rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500'>
                                <TbEye className='h-5 w-5' />
                            </button>
                            </Link>
                            <button className='rounded-full p-1 flex items-center justify-center bg-white border border-blue-gray-100 mb-1 hover:bg-pink-300 hover:text-white transition-all duration-500'>
                                <MdOutlineFavoriteBorder className='h-5 w-5' />
                            </button>
                            
                            
                            </div>
                        </div>
                </div>
            </div>

            </div>
            </Badge.Ribbon>
        </div>
        
    );
};

export default NewArrival;


