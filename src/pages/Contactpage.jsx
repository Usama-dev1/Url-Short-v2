import React, { useState } from "react";
import img1 from "../assets/siteimg/5.png"
const Contactpage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      {/* <div>{loading}</div> */}
      <div className="container bg-secondary py-4 px-4 md:px-8 flex flex-col items-center sm:flex-row justify-center ">
        <div className="w-full max-w-[10rem] md:max-w-[30rem]">
          <img src={img1} alt="" className="md:w-full h-auto" />
        </div>
        <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-lg md:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <div className="w-full mb-6 text-center">
              <span className="text-steal text-2xl md:text-4xl font-bold">
                CONTACT US
              </span>
            </div>
            <div className="w-full mb-4">
              <label
                htmlFor="username"
                className="text-primary font-bold mb-2 block">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name here"
                value={data.name}
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
                placeholder="Enter your email here"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3"
              />
            </div>
            <div className="w-full mb-6">
              <label
                htmlFor="message"
                className="text-primary font-bold mb-2 block">
                Message
              </label>
              <textarea
                type="message"
                placeholder="Enter your message here"
                name="message"
                value={data.message}
                onChange={handleChange}
                className="w-full h-40 border border-secondary px-3"
              />
            </div>
            <div className="w-full text-center mb-4">
              <button
                type="submit"
                className="py-3 px-6 hover:bg-orange-600 bg-sorange text-white font-bold">
                CONTACT US
              </button>
            </div>
            {/* {error && <div className="text-red-500 text-center">{error}</div>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactpage;
