import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { READING_HISTORY } from '../redux/actionTypes/blogActionTypes';

const Details = () => {
    let dispatch = useDispatch()
    let location = useLocation()
    let id = location.pathname.split('/')[location.pathname.split('/').length-1]
    let {blogs} = useSelector(state => state.blogs)
    let blog = blogs.find(blog => blog._id === id)

    useEffect(()=> {
        dispatch({type: READING_HISTORY, payload: blog?._id})
    }, [])

    return (
        <div className='my-20 text-center mx-5'>
            <h1 className='text-4xl font-bold mb-10'>{blog?.title}</h1>        
            <h1 className='italic text-justify'>{blog?.details}</h1>    
            <div className='mt-10 flex justify-between'>
            <h1 className='p-1 px-3 bg-gray-800 text-white rounded-full w-fit '>{blog?.tag}</h1>
            <h1 className='font-bold w-fit '>{new Date(parseInt(blog?.time)).toLocaleTimeString()}</h1>
            </div>    
        </div>
    );
};

export default Details;