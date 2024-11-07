const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="flex flex-col gap-4  p-6 bg-white w-96 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <label htmlFor="email" className="text-gray-700 font-medium">
          Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="confirmEmail" className="text-gray-700 font-medium">
          Confirm Email:
        </label>
        <input
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="password" className="text-gray-700 font-medium">
          Password:
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="mt-4 bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 transition duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
