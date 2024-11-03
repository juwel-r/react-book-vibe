import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import "./Nav.css";

LuMenu;
//npm install @react-icons/all-files --save ====>>install react icons
//npm install react-icons --save

const Nav = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/listed-books", name: "Listed Books" },
    { id: 3, path: "/about", name: "Pages To Read" },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div className="my-4 md:my-8 flex justify-between items-center">
      <div className="md:flex gap-2 justify-between items-center hidden">
        <h1 className="text-3xl font-bold">Book Vibe</h1>
      </div>
      <button
        onClick={() => setOpen(!open)}
        className="text-3xl md:hidden z-20"
      >
        {open ? <LuMenu /> : <RxCross2 />}
      </button>
      <div
        className={`md:flex justify-center z-10 absolute md:bg-transparent bg-white font-semibold rounded-sm px-2 pr-4 ${
          open ? "-left-[25%]" : "left-[3%] "
        } transition-all duration-300 top-[12%] md:static rounded-sm `}
      >
        {routes.map((route) => (
          <div id="navLink" onClick={() => setOpen(true)} key={route.id}>
            <NavLink to={route.path}>{route.name}</NavLink>
            <hr className="md:hidden" />
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div>
          <p className="btn h-full bg-primary text-white font-bold px-4 py-3 border-2 border-transparent hover:bg-transparent hover:text-primary hover:border-primary transition-all duration-500 text-lg text-nowrap">Sign In</p>
        </div>
        <div>
          <p className="btn h-full bg-[#59C6D2] text-white font-bold px-4 py-3 border-2 border-transparent hover:bg-transparent hover:text-[#59C6D2] hover:border-[#59C6D2] text-lg transition-all duration-500  text-nowrap">Sign Up</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;
