import React, { useState, useEffect, useRef } from "react";
// Components
import Logo from "../components/Logo";

const MbHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white pt-3 ">
      <header className="lg:hidden  container mx-auto  w-[90%] mt-5 ">
        <div className=" flex justify-between">
          <div>
            <Logo />
          </div>
          <div className="flex items-center " ref={menuRef}>
            <button onClick={handleToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-7 text-[#9E9AA8]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className=" bg-[#3A3054] text-white px-10 py-7 mt-[40px] z-20 text-center absolute w-[90%] flex flex-col justify-center rounded-lg border border-[#979797]">
            <ul className="w-full border-b-[1px] border-[#979797]">
              <li className="font-bold text-lg py-4">Features</li>
              <li className="font-bold text-lg py-4">Pricing</li>
              <li className="font-bold text-lg py-4">Resources</li>
            </ul>
            <a href="#" className="font-bold text-lg py-4 mt-2">
              Login
            </a>
            <a
              href="#"
              className="mainBg border-2 border-[#2BD0D0] my-2  rounded-3xl font-bold px-8 py-3 text-[15px] 
           hover:bg-[#9AE3E3] transition-all"
            >
              Sign Up
            </a>
          </div>
        )}
      </header>
    </nav>
  );
};

export default MbHeader;
