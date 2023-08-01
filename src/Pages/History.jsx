import React from 'react';
import { useSelector } from 'react-redux';

const History = () => {
    let {history} = useSelector(state => state.blogs)

    return (
        <div className="overflow-x-auto flex-1 my-20 p-5">
      <h1 className="text-3xl text-center border-b-2 border-black font-bold pb-5 mb-10">
        Reading History
      </h1>
      <table className="flex justify-center items-center table mx-auto">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody className="w-full">
          {history
            .map((blog, index) => (
              <Row key={blog?._id} blog={blog} index={index} />
            ))}
        </tbody>
      </table>
    </div>
    );
};

export default History;

const Row = ({ blog, index }) => {
   
    return (
      <tr className="hover w-full">
        <th>{index + 1}</th>
        <td>{blog?.title?.slice(0, 30)}...</td>
        <td>{blog?.details?.slice(0, 30)}...</td>
      </tr>
    );
  };