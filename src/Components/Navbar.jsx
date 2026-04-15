import { ImStatsDots } from "react-icons/im";
import { MdOutlineHome } from "react-icons/md";
import { RiTimeLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `btn btn-ghost ${isActive ? "bg-green-800 text-white" : ""}`;

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink to="/" className={navClass}><MdOutlineHome />Home</NavLink>
              <NavLink to="/timeline" className={navClass}><RiTimeLine />Timeline</NavLink>
              <NavLink to="/stats" className={navClass}><ImStatsDots />Stats</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost font-bold text-xl">Keen<span className="text-green-800">Keeper</span></NavLink>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink to="/" className={navClass}><MdOutlineHome />Home</NavLink>
            <NavLink to="/timeline" className={navClass}><RiTimeLine />Timeline</NavLink>
            <NavLink to="/stats" className={navClass}><ImStatsDots />Stats</NavLink>
          </ul>
        </div>
      </div>
    </>
  );
}