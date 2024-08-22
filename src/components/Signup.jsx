import React, { useState } from "react";
import img1 from "../assets/siteimg/7.png";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { Signup, loading, error } = useSignup();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Signup(data.username, data.email, data.password);
    console.log(data);
  };

  return (
    <>
      <div>{loading}</div>
      <div className="container bg-secondary py-4 px-4 md:px-8 flex flex-col items-center sm:flex-row sm:justify-evenly ">
        <div className="w-full max-w-[10rem] md:max-w-[30rem]">
          <img src={img1} alt="" className="md:w-full h-auto" />
        </div>
        <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full mb-6 text-center">
              <span className="text-steal text-2xl md:text-4xl font-bold">
                Sign Up
              </span>
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="username"
                className="text-primary font-bold mb-2 block">
                Username:
              </label>
              <input
                type="text"
                name="username"
                value={data.username}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3"
              />
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="email"
                className="text-primary font-bold mb-2 block">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3"
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="password"
                className="text-primary font-bold mb-2 block">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3"
              />
            </div>
            <div className="w-full text-center mb-4">
              <button
                type="submit"
                className="py-3 px-6 hover:bg-orange-600 bg-sorange text-white font-bold">
                SIGN UP
              </button>
            </div>
            {error && <div className="text-red-500 text-center">{error}</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
