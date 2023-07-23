import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "https://tpo-9ws3.onrender.com/images/";
  const defaultProfilePic =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaFTgxXpg7k6BasA_PI-ktZhg6tisWzzjFJzTydVgplQ&s"; // Replace with your default image URL

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const handleImageError = (e) => {
    e.target.src = defaultProfilePic;
  };

  return (
    <div className="topbar">
      <div className="topbar-left">
        <Link className="logo-link" to="/">
          <span className="logo-text">TPO</span>
        </Link>
      </div>
      <div className="topbar-center">
        <ul className="topbar-list">
          <li className="topbar-item">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to="/dsa">
              DSA
            </Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topbar-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && (
            <li className="topbar-item" onClick={handleLogout}>
              LOGOUT
            </li>
          )}
        </ul>
      </div>
      <div className="topbar-right">
        {user ? (
          <Link to="/settings">
            <img
              className="topbar-img"
              src={PF + user.profilePic}
              alt=""
              onError={handleImageError}
            />
          </Link>
        ) : (
          <ul className="topbar-list">
            <li className="topbar-item" id="login">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topbar-item" id="register">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topbar-searchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
