import { NavLink } from "react-router-dom";
import logo from "../../assets/image/Fh.png";

const Navbar = () => {
  return (
    <div className="w-full max-w-7xl px-6 mx-auto">
      <div className="flex items-center">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <div>
              <img className="w-16 mr-10" src={logo} alt="" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">FreelanceHub</h1>
            </div>
          </div>
        </div>
        <div className="flex-none hidden lg:block">
          <div className="flex items-center gap-2">
            {/* Navbar menu content here */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/addJob"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Add Job
            </NavLink>
            <NavLink
              to="/myPostedJobs"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              My Posted Jobs
            </NavLink>
            <NavLink
              to="/myBids"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              My Bids
            </NavLink>
            <NavLink
              to="/bidRequests"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Bid Requests
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "btn btn-primary btn-sm" : "btn btn-ghost btn-sm"
              }
            >
              Register
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
