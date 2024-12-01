import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'



const Login = () => {
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
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <label htmlFor="password" className="text-gray-700 font-medium">
            Password:
          </label>
          <input
            id="password"
            type="password"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex gap-5 justify-around">
            <button
            type="submit"
            className="mt-4 bg-blue-500 w-36 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
          <Link to="/Register" className="mt-4 w-36 text-center bg-green-500 text-white rounded-md p-2 hover:bg-green-600 transition duration-200"><FontAwesomeIcon icon={faPlus} /> Register</Link>
          </div>
          
        </form>
      </div>
    </>
  );
};

export default Login;
