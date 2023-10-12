import React from 'react';
import { Outlet } from 'react-router-dom';

const SellerDashboard = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default SellerDashboard;