import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2">
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
  );
};

export default Sidebar;
