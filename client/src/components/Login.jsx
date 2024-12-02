import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [data, setData] = useState({});
  const handelInputs = (e) => {
    const { value, name } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };
const navigate = useNavigate()
  const handelLogIn = async (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email)) return toast.error("invalid email format");
    if (!data.email) return toast.error("email is required");
    if (!data.password) return toast.error("password is required");
      try {
        const req = await axios.post(
          "http://localhost:4000/chatapp/login",
          data
        );
        navigate("/Accuille")
        toast.success(req.data.message);
      } catch (err) {
        toast.error(err?.response?.data?.message || err.message);
      }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold mb-4">Login</h1>
        <form className="flex flex-col gap-4 p-6 bg-white shadow-md w-96 rounded-lg">
          <label htmlFor="username" className="text-gray-700 font-medium">
            Email:
          </label>
          <input
            id="username"
            type="text"
            name="email"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handelInputs}
          />

          <label htmlFor="password" className="text-gray-700 font-medium">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handelInputs}
            name="password"
          />
          <div className="flex gap-5 justify-around">
            <button
              type="submit"
              className="mt-4 bg-blue-500 w-36 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
              onClick={handelLogIn}
            >
              Login
            </button>
            <Link
              to="/Register"
              className="mt-4 w-36 text-center bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition duration-200"
            >
              <FontAwesomeIcon icon={faPlus} /> Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
