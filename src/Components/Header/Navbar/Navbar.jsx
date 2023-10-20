import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {

  const { user, logOutUser } = useContext(AuthContext);
  console.log(user)

  const handleLogOut = () => {
    logOutUser()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <div className="navbar min-h-[1rem] bg-base-100">
        <div className="navbar-start">
          <div className="dropdown"></div>
          <h1>(+088)01304076121 | Store Location</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="">
            <li>
              <h1 className="animate-pulse text-red-600">
                Save 20% on your next purchase!
              </h1>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          {user?.displayName}
          <img className="w-5 rounded-full" src={user?.photoURL} />
          {user ? (
            <button onClick={handleLogOut}>LogOut</button>
          ) : (
            <div>
              <Link to="/login">Log in</Link> |
              <Link to="/register">Register</Link>
            </div>
          )}
        </div>
      </div>
      <hr />

      <div className="navbar bg-base-100 shadow-lg ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-100 rounded-box gap-3 w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-red-600"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addproduct"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-red-600"
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
            </ul>
          </div>
          <img className="w-20" src="https://i.ibb.co/vL9Kt0Q/mh-store.png" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 gap-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-red-600"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/addproduct"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-red-600"
                    : ""
                }
              >
                Add Product
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "border-b-2 border-red-600"
                    : ""
                }
              >
                My Cart
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <input type="checkbox" className="toggle" checked />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
