import React from 'react';
import Menu from '../components/Admin/Menu';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='flex lg:flex-row flex-col'>
            <Menu />
            <Outlet />
        </div>
    );
};

export default Admin;