import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import deleteContentDB from "../../redux/functions/deleteContentDB";
import updateContentDB from "../../redux/functions/updateContentDB";

const AllPosts = () => {
  let { blogs } = useSelector((state) => state.blogs);
  return (
    <div className="overflow-x-auto flex-1 my-5 lg:my-20 p-5">
      <h1 className="text-3xl text-center border-b-2 border-black font-bold pb-5 mb-10">
        All Post
      </h1>
      <table className="flex justify-center items-center table mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {blogs
            ?.sort((a, b) => a?.time - b?.time)
            .map((blog, index) => (
              <Row key={blog?._id} blog={blog} index={index} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPosts;

const Row = ({ blog, index }) => {
  let dispatch = useDispatch();
  let [show, setShow] = useState(false)
  let handleDelete = (id) => {
    let check = window.confirm("Are you sure you want to delete this post?");
    if (check) {
      dispatch(deleteContentDB(id));
    }
  };
  const submit = e => {
    e.preventDefault()
    let title = e.target.title.value
    let details = e.target.details.value
    let tag = e.target.tag.value
    // let time = Date.now()
    let newContent = {
        title, tag, details,
    }
    dispatch(updateContentDB(newContent, blog?._id))
    setShow(false)
}
  return (
    <tr className="hover w-full">
      <th>{index + 1}</th>
      <td>{blog?.title?.slice(0, 30)}...</td>
      <td>{blog?.details?.slice(0, 30)}...</td>
      <td className="flex flex-col gap-3">
        <button className="btn btn-info btn-xs" onClick={()=>setShow(true)}>Update</button>
        <button
          className="btn btn-error btn-xs"
          onClick={() => handleDelete(blog?._id)}
        >
          Delete
        </button>
      </td>

      {
        show && <div className="flex top-0 left-0 justify-center items-center backdrop-blur-lg bg-gray-600 bg-opacity-20 fixed z-50 h-screen w-screen">
      <div className='flex-1 p-5 bg-white max-w-2xl relative'>
            <button className="p-2 px-5 btn btn-error rounded-full absolute right-3 top-3" onClick={()=>setShow(false)}>X</button>
            <h1 className='text-3xl text-center border-b-2 border-black font-bold pb-5 mb-10'>Update Post</h1>
            <form onSubmit={submit} className='flex flex-col gap-5 items-stretch'>
                <input className='input input-info' placeholder='Title' defaultValue={blog?.title} name='title' type="text"/>
                <select className={`input input-bordered input-info`} name="tag" defaultValue={blog?.tag}>
                    <option value={"popular"}>Popular</option>
                    <option value={"top-rated"}>Top Rated</option>
                </select>
                <textarea className='textarea textarea-info' placeholder='Details' name='details' defaultValue={blog?.details}/>
                <input className='btn btn-info' type="submit" value="SUBMIT"/>
            </form>
        </div>
      </div>
      }
    </tr>
  );
};
