import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {
    
  }
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
          <div className=" mt-6 flex items-center justify-between">
            <button className="btn bg-red-600 text-white">Login</button>
            <button className="btn ">Google Login</button>
          </div>
          <hr />
          <div className="grid grid-cols-2">
            <p className="font-bold">
              Don't have an account?
              <Link to="/register" className="text-blue-600 ml-5">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
