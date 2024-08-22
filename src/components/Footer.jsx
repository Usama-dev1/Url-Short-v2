import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <div className="h-40 block w-full bg-primary text-center">
        <div className="flex justify-center item-center space-x-5 md:ms-2 py-5 overflow-hidden">
          <FaFacebook className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
          <FaInstagram className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
          <FaTwitter className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
          <FaYoutube className="text-secondary mx-1 w-6 h-6 hover:text-sorange" />
        </div>
        <p className="text-white text-md pb-2">
          Made by © <Link to="https://www.linkedin.com/in/usama-altaf-3050b0321/">Usama</Link>
        </p>
      </div>
    </>
  );
}

export default Footer