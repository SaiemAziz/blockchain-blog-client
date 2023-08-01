import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import getContentDB from "./redux/functions/getContentDB";
import { GET_CONTENT } from "./redux/actionTypes/blogActionTypes";
import NavBar from "./components/Home/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Home/Footer";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContentDB());
  }, []);
  return (
    <div className="max-w-5xl mx-auto flex flex-col justify-between min-h-screen">
      <div className="flex flex-col">
        <NavBar />
          <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
