import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { googleUserSignin, googleProvider, auth, user } =
    useContext(AuthContext);
  console.log(googleUserSignin);
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
  const handleLogin = () => {};
  return (
    <div>
      <div className="w-1/2  shadow-lg bg-[#E7EBEE] mx-auto mt-10 mb-10 ">
        <h1 className="text-3xl font-extrabold text-center">Please Login</h1>
        <form onSubmit={handleLogin} className="card-body">
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
          {user && navigate(location?.state ? location.state : '/')}
        </div>
      </div>
    </div>
  );
};

export default Login;
