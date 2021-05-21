import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="header__nav">
        <div className="header__left">
          <a>
            <img src="./images/booksLogo.png" alt="home_logo" />
          </a>
        </div>
        <div className="header__right">
          <a>
            <span>About</span>
          </a>
          <a>
            <span>Blog</span>
          </a>
          <a>
            <span>Contact</span>
          </a>
        </div>
        <a className="header__register">
          <span>Register</span>
        </a>
        <a className="header__login">
          <span>Login</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
