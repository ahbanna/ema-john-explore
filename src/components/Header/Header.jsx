import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
        <nav>
          <a href="">Shop</a>
          <a href="">Order Review</a>
          <a href="">Inventory</a>
          <a href="">Login</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
