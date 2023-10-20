import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { googleUserSignin, googleProvider, auth, user, loginUser } =
    useContext(AuthContext);
  const [error, setError] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleUserSingin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
        if (result.user) {
          toast("User Login successfully");
        }
      })
      .catch((error) => {
        setError(error.message);
        if (error) {
          toast("Email or Password does not match.");
        }
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="w-1/2  shadow-lg bg-[#E7EBEE] mx-auto mt-10 mb-10 ">
        <h1 className="text-3xl font-extrabold text-center">Please Login</h1>
        <form onSubmit={handleUserLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="input input-bordered"
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
              name="password"
              className="input input-bordered"
              required
            />
          </div>
          <div className=" mt-6 form-control w-full">
            <button className="btn bg-red-600 text-white hover:text-black">
              Login
            </button>
          </div>
          <hr />
        </form>
        <div className="grid grid-cols-2 justify-between items-center">
          <p className="font-bold">
            Don't have an account?
            <Link to="/register" className="text-blue-600 ml-5">
              Register
            </Link>
          </p>
          <button onClick={handleGoogleUserSingin} className="btn ">
            <FaGoogle></FaGoogle> Google Login
          </button>
          {user && (
            <Navigate to={location?.state ? location.state : "/"}></Navigate>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
