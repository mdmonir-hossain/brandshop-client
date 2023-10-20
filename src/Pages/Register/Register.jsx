import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [UserSuccess, setUserSuccess] = useState();
  const handleUserRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, image, name);
    if (!/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/.test(password)) {
      toast(
        "Minimum six characters, at least one capital letter and one special character"
      );
      return;
    }
   setError("");
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUserSuccess(result.user);
        if (result.user) {
          toast("User Create successfully");
        }
        updateProfile(result.user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => console.log("Profile updated successfully"))
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
    if (error) {
      toast(error);
    }
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <div className="w-1/2 shadow-lg mx-auto bg-[#E7EBEE]">
        <h1 className="text-3xl font-extrabold text-center mt-5">
          Please Register
        </h1>
        <form onSubmit={handleUserRegister} className="card-body">
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
            <button className="btn bg-red-600 text-white hover:text-black">
              Register
            </button>
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
    </div>
  );
};

export default Register;
