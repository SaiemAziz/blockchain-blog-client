import React from "react";
import { Link } from "react-router-dom";

const SingleBlog = ({ blog }) => {
  return (
    <Link
      to={`/details/${blog?._id}`}
      className="border shadow-lg p-5 flex flex-col justify-between"
    >
      <h1 className="text-xl font-bold mb-5">{blog?.title}</h1>
      <h1 className="text-gray-600 text-justify">
        {blog?.details.slice(0, 200)}
      </h1>
      <div className="flex justify-between items-center ">
        <h1 className="p-1 px-3 bg-gray-800 text-white rounded-full my-5 w-fit ">
          {blog?.tag}
        </h1>
        <h1 className="text-right">
          {new Date(parseInt(blog?.time)).toLocaleTimeString()}
        </h1>
      </div>
    </Link>
  );
};

export default SingleBlog;
