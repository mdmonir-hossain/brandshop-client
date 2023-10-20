import { Link } from "react-router-dom";


const Register = () => {

    const handleRegister = () => {
    
}

    return (
      <div className="w-1/2 shadow-lg mx-auto bg-[#E7EBEE]">
        <h1 className="text-3xl font-extrabold text-center mt-5">
          Please Register
        </h1>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo Url"
              name="image"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control mt-6">
            <button className="btn bg-red-600 text-white">Register</button>
            <div className="grid grid-cols-2 justify-start ">
              <p className="font-bold">
                Already Have an Account?
                <Link to="/login" className="text-blue-600 ml-5">
                  Log in
                </Link>
              </p>
              <hr />
            </div>
          </div>
        </form>
      </div>
    );
};

export default Register;