import React, { useState } from "react";
import img1 from "../assets/siteimg/2.png";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const { login, loading, error } = useLogin();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${data.email},${data.password}`);
    login(data.email, data.password);
  };

  return (
    <>
      <div>{loading && <p>Loading...</p>}</div>
      <div className="container bg-secondary py-4 px-4 md:px-8 flex flex-col items-center sm:flex-row sm:justify-evenly ">
        <div className="w-full max-w-[10rem] md:max-w-[30rem]">
          <img src={img1} alt="" className="md:w-full h-auto" />
        </div>
        <div className="w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center px-6 bg-white w-full shadow-lg rounded-lg">
            <div className="w-full p-8 text-center">
              <span className="text-steal text-3xl md:text-4xl font-bold">
                LOGIN
              </span>
            </div>
            <div className="py-4 w-full">
              <label
                htmlFor="email"
                className="text-primary font-bold mb-3 block text-left">
                Email:
              </label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3 rounded-lg"
              />
            </div>
            <div className="py-4 w-full">
              <label
                htmlFor="password"
                className="text-primary font-bold mb-3 block text-left">
                Password:
              </label>
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                className="w-full h-12 border border-secondary px-3 rounded-lg"
              />
            </div>
            <div className="w-full text-center my-5">
              <button
                type="submit"
                className="py-3 px-6 hover:bg-orange-600 bg-sorange text-white font-bold rounded-lg">
                LOGIN
              </button>
            </div>
            <div>{error && <p className="text-red-500">{error}</p>}</div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
