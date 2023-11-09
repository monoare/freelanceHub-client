import { NavLink } from "react-router-dom";
import login from "../assets/image/login.jpg";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "../Config/Firebase.config";

const Register = () => {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUp, user } = useAuth();
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    form.reset();

    // // password length verification
    // if (password.length < 6) {
    //   toast.error("Password must be six or more character!");
    //   return;
    // }

    // // password special character verification
    // if (!/[A-Z!@#$%^&*()_+{}|:"<>?]/.test(password)) {
    //   toast.error(
    //     "Password must be an uppercase letter and one special character!"
    //   );
    //   return;
    // }

    try {
      await signUp(email, password);
      // Update the user's profile
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      console.log("success");
      toast.success("User has been successfully created!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${login})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content flex-col text-center w-full">
        <p className="text-5xl font-bold text-base-100">Register Now!</p>
        <div className="shadow-lg w-1/3 rounded-lg bg-base-100 ">
          <form
            onSubmit={handleSubmit}
            className="card-body shadow-lg rounded-lg bg-base-100"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
                onBlur={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered"
                required
                onBlur={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                onBlur={(e) => setEmail(e.target.value)}
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
              <p className="text-center text-black text-sm pt-3">
                Don&apos;t have an account ?{" "}
                <NavLink
                  to="/login"
                  className="text-primary font-bold hover:underline cursor-pointer "
                >
                  Login
                </NavLink>
              </p>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
