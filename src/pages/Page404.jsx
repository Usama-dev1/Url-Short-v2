import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../assets/siteimg/3.png";

const Page404 = () => {
  return (
    <>
      <div className="w-full h-screen text-center flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center my-4">
          <button
            className="bg-sorange px-10 absolute top-20 mt-4 left-4 hover:bg-steal py-4 text-white text-xl "
            to="/">
            <Link>
              {" "}
              <FaArrowLeft className="inline-block mx-1" />
              GO BACK
            </Link>
          </button>
        </div>
        <h1 className="text-8xl text-primary">404</h1>
        <p className="text-2xl text-primary">
          Oops! The page you're looking for doesn't exist.
        </p>
        <img src={img1} alt="" className="h-40"/>
      </div>
    </>
  );
};

export default Page404;
