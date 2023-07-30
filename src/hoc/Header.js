import React from "react";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import NavItem from "../components/NavItem";

const Header = () => {
  return (
    <nav className="bg-white">
      <header className="hidden   mx-auto  container  lg:grid lg:grid-cols-2 py-10">
        <div className="flex gap-12">
          <Logo />
          <ul className="nav mt-1">
            <NavItem navItem={"Features"} />
            <NavItem navItem={"Pricing"} />
            <NavItem navItem={"Resources"} />
          </ul>
        </div>
        <div className="text-end flex justify-end gap-4 ">
          <Link
            to={"#"}
            className="px-8 py-3 text-[15px] text-[#9E9AA8] font-bold hover:border-[#2BD0D0]"
          >
            Login
          </Link>
          <Link
            to={"#"}
            className="mainBg border-2 border-[#2BD0D0]  rounded-3xl font-bold px-8 py-3 text-[15px] 
           hover:bg-[#9AE3E3] transition-all"
          >
            Sign Up
          </Link>
        </div>
      </header>
    </nav>
  );
};

export default Header;
