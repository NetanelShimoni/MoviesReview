import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth, useTheme } from "../../hooks";

export default function Navbar() {
  const { toggleTheme } = useTheme();
  const { authInfo, handleLogout } = useAuth();
  const { isLoggedIn } = authInfo;
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <div className="flex justify-between items-center pl-2">
        <Link to="/">
          <img src="./logo.jpg" alt="" className="h-8" />
        </Link>
        {/** TODO replace input to autoComplete**/}
        <input
          type="text"
          className="border-2 border-dark-subtle p-1 rounded bg-transparent text-xl outline-none focus:border-white transition text-white "
          placeholder="Search..."
        />

        <ul className="flex items-center space-x-4">
          <li hidden={!isLoggedIn}>
            <button className="text-white font-semibold text-lg">
              {" "}
              Edit Profile
            </button>
          </li>
          <li className="pr-3">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white font-semibold text-lg"
              >
                Log out
              </button>
            ) : (
              <Link
                className="text-white font-semibold text-lg"
                to="auth/signin"
              >
                Login
              </Link>
            )}
          </li>
          <li className=" pr-3">
            <button
              onClick={toggleTheme}
              className="dark:bg-white bg-dark-subtle p-1 rounded "
            >
              <BsFillSunFill className="text-secondary" size={24} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
