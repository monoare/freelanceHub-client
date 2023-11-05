import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import login from "../assets/image/login.jpg";

const Login = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${login})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center w-full">
        <p className="text-5xl font-bold text-base-100">Log Now!</p>
        <div className="shadow-lg w-1/3 rounded-lg bg-base-100">
          <form
            className="card-body"
            // onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                onBlur={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                onBlur={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="text-center text-black text-sm">
              Don&apos;t have an account ?{" "}
              <NavLink
                to="/register"
                className="text-primary font-bold hover:underline cursor-pointer "
              >
                Sign Up
              </NavLink>
            </p>
            <div className="form-control mt-2">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="divider text-black">Or, Continue With</div>
            <button
              type="button"
              // onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary  w-full flex justify-between items-center cursor-pointer "
            >
              Google
              <FcGoogle className="w-8 h-8" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
