import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Menu = () => {
    const [menu, setMenu] = useState("all-post")
    const location = useLocation()
    useEffect(()=> {
        if(location.pathname.includes('add-post'))
            setMenu('add-post')
            else
            setMenu('all-post')
    }, [location])

    return (
        <div className='lg:w-[300px] w-full lg:min-h-[85vh]   bg-blue-50 flex lg:flex-col gap-5 p-5 items-stretch justify-center'>
            <Link to='/admin-panel'>
            <button className={`btn w-full btn-success ${menu !== "all-post" && "btn-outline"}`}>All Post</button>
            </Link>
            <Link to='/admin-panel/add-post'> 
            <button className={`btn w-full btn-success ${menu !== "add-post" && "btn-outline"}`}>Add Post</button>
            </Link>
        </div>
    );
};

export default Menu;