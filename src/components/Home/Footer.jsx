import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-black text-white">
      <div>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by BlockChain</p>
      </div>
    </footer>
  );
};

export default Footer;
