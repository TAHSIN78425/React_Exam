
import React from 'react';
import Logo from '../assets/logo-panda.png';
import defaultUserImage from '../assets/user-null.jpg';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();

  return (
    <nav className="bg-pink-600 w-full h-[100px] flex justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        <img className="h-[80px] w-auto" src={Logo} alt="Logo" />
      </div>

      {/* Button Section */}
      <div className="flex h-full justify-center items-center gap-10">
        <NavLink
          to={'/'}
          className="text-pink-600 font-semibold bg-white px-3 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300"
        >
          Home
        </NavLink>

        {isAuthenticated ? (
          <NavLink
            to="/profile"
            className="text-pink-600 font-semibold bg-white px-3 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            {user?.name || 'Profile'}
          </NavLink>
        ) : (
          <button
            className="text-pink-600 font-semibold bg-white px-3 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            User
          </button>
        )}

        {isAuthenticated ? (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
            className="text-pink-600 font-semibold bg-white px-3 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            Log Out
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="text-pink-600 font-semibold bg-white px-3 py-2 rounded-md hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            Log In
          </button>
        )}
      </div>

      {/* Profile Dropdown */}
      <div className="dropdown dropdown-end flex justify-center items-center mr-3">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="User Avatar"
              src={isAuthenticated ? user?.picture : defaultUserImage}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
         {
          isAuthenticated?
          <li>
          <NavLink to="/profile" className="justify-between">
            {user.name}
            <span className="badge">New</span>
          </NavLink>
        </li>: <li>
            <button  className="justify-between">
              Profile
              <span className="badge">New</span>
            </button>
          </li>
         }
          {isAuthenticated ? (
            <li>
              <button
                onClick={() =>
                  logout({ logoutParams: { returnTo: window.location.origin } })
                }
              >
                Log Out
              </button>
            </li>
          ) : (
            <li>
              <button onClick={() => loginWithRedirect()}>Log In</button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
