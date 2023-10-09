import React from 'react';
import Slider from './slider/Slider';
import Offer from './offer/Offer';

const Home = () => {
    return (
        <div>
            <div className='mt-2'>
            <Slider />
            </div>
            <div className="min-h-32 bg-blue-gray-50 bg-opacity-50 drop-shadow-sm mt-6 rounded-md p-2">
            <Offer />
            </div>

        </div>
    );
};

export default Home;