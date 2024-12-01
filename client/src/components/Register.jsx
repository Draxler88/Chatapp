import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmeEmail: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmeEmail: "",
    password: "",
  });
  // submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const msgErr = "please fill fields";
    if (errors.email || errors.firstName || errors.lastName || errors.confirmeEmail || errors.password) return msgErr;

    if (data.firstName && data.lastName && data.email && data.password) {
      axios
        .post("http://localhost:4000/chatapp/adduser", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

  };

  //check correct email (email validation)
  const handleEmailChange = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value;
    if (emailPattern.test(value)) {
      setData((prevData) => ({ ...prevData, email: value }));
      setErrors((prevEmail) => ({ ...prevEmail, email: "" }));
      return;
    }
    setErrors((prevEmail) => ({ ...prevEmail, email: "invalid email" }));
  };

  //Password check
  const handlePasswordChange = (e) => {
    const value = e.target.value;

    if (value.length >= 3) {
      setData((prevData) => ({ ...prevData, password: value }));
      setErrors((prevPass) => ({ ...prevPass, password: "" }));
      return;
    }
    setData((prevData) => ({ ...prevData, password: "" }));
    setErrors((prevPass) => ({
      ...prevPass,
      password: "password must be bigger than 3 char",
    }));
  };
  //first name check
  const firstName = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setData((prevData) => ({ ...prevData, firstName: value }));
      setErrors((prevPass) => ({ ...prevPass, firstName: "" }));
      return;
    }
    setData((prevData) => ({ ...prevData, firstName: "" }));
    setErrors((prevPass) => ({
      ...prevPass,
      firstName: "first name must be bigger than 3 char",
    }));
  };

  //first name check
  const lastName = (e) => {
    const value = e.target.value;
    if (value.length >= 3) {
      setData((prevData) => ({ ...prevData, lastName: value }));
      setErrors((prevPass) => ({ ...prevPass, lastName: "" }));
      return;
    }
    setData((prevData) => ({ ...prevData, lastName: "" }));
    setErrors((prevPass) => ({
      ...prevPass,
      lastName: "last name must be bigger than 3 char",
    }));
  };

  const confirmeEmail = (e) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const value = e.target.value;
    if (emailPattern.test(value)) {
      if (value !== data.email) {
        setData((prevData) => ({ ...prevData, confirmeEmail: "" }));
        setErrors((prevData) => ({
          ...prevData,
          confirmeEmail: "Please check your email",
        }));
        setData((prevData) => ({ ...prevData, confirmeEmail: value }));
        return;
      }
      setErrors((prevEmail) => ({ ...prevEmail, confirmeEmail: "" }));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white w-96 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        {/* First Name and Last Name Row */}
        <div className="flex gap-4">
          {/* First Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName" className="text-gray-700 font-medium">
              First Name:
            </label>
            <input
              id="firstName"
              onChange={firstName}
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && <p className="danger">{errors.firstName}</p>}
          </div>

          {/* Last Name */}
          <div className="flex flex-col w-1/2">
            <label htmlFor="lastName" className="text-gray-700 font-medium">
              Last Name:
            </label>
            <input
              id="lastName"
              onChange={lastName}
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && <p className="danger">{errors.lastName}</p>}
          </div>
        </div>

        {/* Email */}
        <label htmlFor="email" className="text-gray-700 font-medium">
          Email:
        </label>
        <input
          onChange={handleEmailChange}
          id="email"
          type="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && <p className="danger">{errors.email}</p>}

        {/* Confirm Email */}
        <label htmlFor="confirmEmail" className="text-gray-700 font-medium">
          Confirm Email:
        </label>
        <input
          id="confirmEmail"
          onChange={confirmeEmail}
          type="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.confirmeEmail && <p className="danger">{errors.confirmeEmail}</p>}
        {data.email === data.confirmeEmail && <p className="succesWay">Correct email</p>}

        {/* Password */}
        <label htmlFor="password" className="text-gray-700 font-medium">
          Password:
        </label>
        <input
          id="password"
          onChange={handlePasswordChange}
          type="password"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && <p className="danger">{errors.password}</p>}

        <button className="mt-4 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
