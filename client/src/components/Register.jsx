import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    confirmeEmail: "",
    password: "",
  });



  const validateField = (name, value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (value.length < 3 || !isNaN(+value)) {
          error = `${name} must be at least 3 characters and not numeric`;
        }
        break;
      case "email":
        if (!emailPattern.test(value)) {
          error = "Invalid email format";
        }
        break;
      case "confirmeEmail":
        if (value !== data.email) {
          error = "Emails do not match";
        }
        break;
      case "password":
        if (value.length < 3) {
          error = "Password must be at least 3 characters";
        }
        break;
      default:
        break;
    }

    return error;
  };
const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((err) => err);

    if (hasErrors || Object.values(data).some((field) => !field)) {
      toast.error("Please fill in all fields correctly");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/chatapp/adduser", data);
      if (res.status === 200) {
        toast.success("Successfully registered!");
        setData({ firstName: "", lastName: "", email: "", confirmeEmail: "", password: "" });
        navigate("/Login")
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-white w-96 shadow-md rounded-lg"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        {/* First Name */}
        <div className="flex flex-col">
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your first name"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
        </div>

        {/* Last Name */}
        <div className="flex flex-col">
          <label htmlFor="lastName">Last Name:</label>
          <input
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
            type="text"
            placeholder="Enter your last name"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        {/* Confirm Email */}
        <div className="flex flex-col">
          <label htmlFor="confirmeEmail">Confirm Email:</label>
          <input
            id="confirmeEmail"
            name="confirmeEmail"
            value={data.confirmeEmail}
            onChange={handleChange}
            type="email"
            placeholder="Re-enter your email"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.confirmeEmail && <p className="text-red-500">{errors.confirmeEmail}</p>}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            type="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-md p-2"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
