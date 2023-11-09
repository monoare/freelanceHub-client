import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../assets/image/login.jpg";
import toast from "react-hot-toast";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, logout, googleLogin } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    form.reset();

    // password length verification
    if (password.length < 6) {
      toast.error("Password must be six or more character!");
      return;
    }

    // password special character verification
    if (!/[A-Z!@#$%^&*()_+{}|:"<>?]/.test(password)) {
      toast.error(
        "Password must be an uppercase letter and one special character!"
      );
      return;
    }

    const toastId = toast.loading("Logging in ...");
    try {
      const user = await login(email, password);
      console.log(user);

      const res = await axios.post("/auth/access-token", {
        email: user.user?.email,
      });

      if (res.data.success) {
        toast.success("Logged in", { id: toastId });
        navigate("/");
      } else {
        logout();
      }
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  const handleGoogleLogin = async () => {
    const toastId = toast.loading("Logging in ...");

    try {
      await googleLogin(email, password);
      toast.success("Logged in", { id: toastId });
      navigate("/");
    } catch (error) {
      toast.error(error.message, { id: toastId });
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${loginImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center w-full">
        <p className="text-5xl font-bold text-base-100">Log Now!</p>
        <div className="shadow-lg lg:w-1/3 rounded-lg bg-base-100">
          <form className="card-body w-full" onSubmit={handleSubmit}>
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
              onClick={handleGoogleLogin}
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
