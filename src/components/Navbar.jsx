import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="bg-[#a1b7db] text-xl flex items-center justify-center h-20 shadow-2xl">
      <div className="mx-auto w-10/12  flex justify-around items-center">
        <Link to="/" className="flex text-3xl">
          <b>
            <i className="text-stone-700">Tanvir</i>
          </b>
          <p className="font-semibold">Property</p>
        </Link>
        <div className="flex justify-between">
          <Link to={"/"} className="mx-5 hover:underline">
            Home
          </Link>
          <Link to={"/about"} className="mx-5 hover:underline">
            About
          </Link>
          <Link to={"/login"} className="mx-5 hover:underline">
            Login
          </Link>
          <Link to={"/create-listing"} className="mx-5 hover:underline">
            Create Listing
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <input
            className="shadow-lg bg-slate-300 focus:outline-none focus:border-slate-500 focus:ring-slate-500 focus:ring-1 rounded h-[3rem] p-5"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <div className="relative ">
            <FaSearch className="absolute right-[1rem] top-[-8px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
