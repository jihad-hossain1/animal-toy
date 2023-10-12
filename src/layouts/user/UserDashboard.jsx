import React from 'react';
import { Outlet } from 'react-router-dom';
import SidenavUser from '../../pages/dashboard/user/userProfile/sidenavUser/SidenavUser';

const UserDashboard = () => {
    return (
        <div className=''>
            <SidenavUser />
            
        </div>
    );
};

export default UserDashboard;