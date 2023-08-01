import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_SELECT} from "../redux/actionTypes/blogActionTypes";
import SingleBlog from "../components/Home/SingleBlog";
import { tagSelect } from "../redux/functions/tagSelect";

const Home = () => {
  const dispatch = useDispatch();
  const { sort: sorted } = useSelector((state) => state.filters);
  const { tag } = useSelector((state) => state.filters);
  const { blogs } = useSelector((state) => state.blogs);


  return (
    <div>
      <div className="w-full flex md:flex-row flex-col justify-between my-5 items-center gap-5 ">
        <div className="flex gap-5 px-5">
        <button className={`p-1 px-3 border border-black ${tag === "all" && "bg-gray-800 text-white"} rounded-full my-5 w-fit `} onClick={()=>dispatch(tagSelect("all"))}>{"ALL"}</button>
        <button className={`p-1 px-3 border border-black ${tag==="popular" && "bg-gray-800 text-white"} rounded-full my-5 w-fit `} onClick={()=>dispatch(tagSelect("popular"))}>{"POPULAR"}</button>
        <button className={`p-1 px-3 border border-black ${tag === "top-rated" && "bg-gray-800 text-white"} rounded-full my-5 w-fit `} onClick={()=>dispatch(tagSelect("top-rated"))}>{"TOP RATED"}</button>
        </div>
        <div className="flex gap-2 items-center ">
          <p className="font-bold">Sort:</p>
          <select
            className={`input input-bordered input-info`}
            name="sort"
            defaultValue={"desc"}
            onChange={(e) => {
              dispatch({
                type: SORT_SELECT,
                payload: e.target.value,
              });
              console.log(e.target.value);
            }}
          >
            <option value={"asc"}>Sort by first upload</option>
            <option value={"desc"}>Sort by last upload</option>
          </select>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 my-10 ">
        {sorted === "none"
          ? blogs.filter(blog => tag!=="all" ? blog.tag === tag : true).map((blog) => <SingleBlog key={blog?.time} blog={blog} />)
          : blogs.filter(blog => tag!=="all" ? blog.tag === tag : true)
              .sort((a, b) =>
                sorted === "asc" ? a.time - b.time : b.time - a.time
              )
              .map((blog) => <SingleBlog key={blog?.time} blog={blog} />)}
      </div>
    </div>
  );
};

export default Home;
