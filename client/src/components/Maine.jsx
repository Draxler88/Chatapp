import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <>
      <div className="relative">
        {/* Centered Navigation Links with Higher z-index */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <ul className="flex gap-5">
            <Link to="/Register" className="bg-cyan-500 rounded-md p-3 text-white shadow-lg">Register</Link>
            <Link to="/Login" className="bg-cyan-500 rounded-md p-3 text-white shadow-lg">Login</Link>
          </ul>
        </div>

        {/* Background Image */}
        <img className="h-screen w-screen object-cover blur-sm" src="/in-app-chat-blog-cover-image.png" alt="walo" />
      </div>
    </>
  );
};

export default MainPage;
