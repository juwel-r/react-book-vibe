import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="w-[95%] mx-auto mb">
        <Nav></Nav>
      </div>
      <Outlet />
      <div className="w-[95%] mx-auto">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
