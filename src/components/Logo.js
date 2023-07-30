import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="">
      <Link to="/">
        <img src={logo} alt="Shortly" />
      </Link>
    </div>
  );
};

export default Logo;
