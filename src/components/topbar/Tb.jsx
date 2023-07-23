import React, { useContext, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { FiMenu } from "react-icons/fi"; // Import the hamburger menu icon from react-icons
import { isMobile, isTablet } from "react-device-detect"; // Import the device detection functions
import "./Tb.css"; // Custom CSS file for styling

const Tb = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://tpo-9ws3.onrender.com/images/";
  const defaultProfilePic =
    "https://img.freepik.com/free-icon/user_318-792327.jpg?w=2000"; // Replace with your default image URL

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleImageError = (e) => {
    e.target.src = defaultProfilePic;
  };

  // State for toggling the responsive navigation
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef();

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  // Close the navigation when clicking outside the navbar
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${
        isNavOpen ? "show-nav" : ""
      }`}
    >
      {/* Added 'sticky-top' for making the topbar sticky */}
      <div className="container-fluid" ref={navRef}>
        {/* Left Section */}
        <div className="navbar-left">
          <Link className="navbar-brand" to="/">
            TPO NITRR {/* Company name at the top left */}
          </Link>
        </div>

        {/* Custom Toggle Button */}
        <button className="navbar-toggler" type="button" onClick={toggleNav}>
          <FiMenu />
        </button>

        {/* Middle and Right Section */}
        <div className={`navbar-middle-right ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav">
            <li className="nav-item ">
              <Link className="nav-link" to="/home" onClick={toggleNav}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dsa" onClick={toggleNav}>
                DSA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={toggleNav}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link middle" to="/write" onClick={toggleNav}>
                Write
              </Link>
            </li>
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/settings" onClick={toggleNav}>
                    <img
                      src={
                        user.profilePic
                          ? PF + user.profilePic
                          : defaultProfilePic
                      }
                      alt="User Profile"
                      onError={handleImageError}
                      className="rounded-circle me-2"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {user.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-danger"
                    to="/logout"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-success"
                    to="/login"
                    onClick={toggleNav}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-success"
                    to="/register"
                    onClick={toggleNav}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Tb;
