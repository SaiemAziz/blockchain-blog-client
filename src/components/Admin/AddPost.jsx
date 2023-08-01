import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addContentDB from '../../redux/functions/addContentDB';
import { useNavigate, useNavigation } from 'react-router-dom';

const AddPost = () => {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let {blogs} = useSelector(state => state.blogs)
    const submit = e => {
        e.preventDefault()
        let title = e.target.title.value
        let details = e.target.details.value
        let tag = e.target.tag.value
        let time = Date.now()
        let newContent = {
            title, tag, details, time,
        }
        dispatch(addContentDB(newContent))
        setTimeout(()=>{
            navigate('/admin-panel/')
        }, 2000)
    }
    
    return (
        <div className='flex-1 my-5 lg:my-20 p-5'>
            <h1 className='text-3xl text-center border-b-2 border-black font-bold pb-5 mb-10'>Add Post</h1>
            <form onSubmit={submit} className='flex flex-col gap-5 items-stretch'>
                <input className='input input-info' placeholder='Title' name='title' type="text"/>
                <select className={`input input-bordered input-info`} name="tag" defaultValue={"popular"}>
                    <option value={"popular"}>Popular</option>
                    <option value={"top-rated"}>Top Rated</option>
                </select>
                <textarea className='textarea textarea-info' placeholder='Details' name='details'/>
                <input className='btn btn-info' type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
};

export default AddPost;