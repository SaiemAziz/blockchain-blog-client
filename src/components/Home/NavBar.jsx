import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 border-b-2 shadow-xl sticky top-0">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost normal-case text-xl">BlockChain</Link>
      </div>
      <div className="navbar-end">
        <Link to='/reading-history' className="btn btn-accent btn-outline mr-5">HISTORY</Link>
        <Link to='/admin-panel' className="btn btn-info btn-outline">ADMIN</Link>
      </div>
    </div>
  );
};

export default NavBar;
