import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const HeaderMain = () => {
    if (location.pathname === "/") {
      return (
        <div className="Navbar">
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/logouts" style={{ textDecoration: "none" }}>
            <li style={{ color: "rgb(30, 13, 109)" }}>Logout</li>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="Navbar">
          <li
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
        </div>
      );
    }
  };

  return (
    <div className="head">
      FilterTask App
      <HeaderMain />
    </div>
  );
};

export default Header;
