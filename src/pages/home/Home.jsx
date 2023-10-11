import React from 'react';
import Slider from './slider/Slider';
import Offer from './offer/Offer';
import DealOfTheDay from '../../components/sideNavBar/dealOfTheDay/DealOfTheDay';

const Home = () => {
    return (
        <div>
            <div className='mt-2'>
            <Slider />
            </div>
            <div className="min-h-32 bg-blue-gray-50 bg-opacity-50 drop-shadow-sm mt-6 rounded-md p-2">
            <Offer />
            </div>
            <div className='h-[500px] md:hidden'>
                <DealOfTheDay />
            </div>

        </div>
    );
};

export default Home;