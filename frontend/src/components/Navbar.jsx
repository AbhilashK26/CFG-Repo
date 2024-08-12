import React from "react";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import Dropdown from './Dropdown';

const Navbar = () => {
  const router = useLocation();
  const navigate = useNavigate();

  return (
    <div className="shadow-md px-6 py-4">
      <div className="max-w-6xl flex justify-between items-center mx-auto">
        <p
          className="font-semibold text-2xl flex justify-center items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <span className="mr-2">
            <RxDashboard />
          </span>{" "}
          {router.state && router.state.type} Dashboard
        </p>
        <img src="/jtd.jpg" alt="Compoany logo" className="w-12 h-12"/>
        <Dropdown />
        <div className="flex items-center space-x-4">
         <a 
            href="#"
            className="bg-blue-600 text-white px-3 py-2 font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            FAQ
          </a>
          <a 
            href="/test.html"
            className="bg-blue-600 text-white px-3 py-2 font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            Inspire
          </a>
          <a 
            href="/faq.pdf"
            className="bg-blue-600 text-white px-3 py-2 font-semibold rounded-lg hover:bg-blue-700 focus:outline-none"
          >
            FAQ
          </a>
          <button
            className="flex justify-center items-center text-red-500 px-3 py-2 font-semibold rounded-sm"
            onClick={() => navigate("/")}
          >
            Logout
            <span className="ml-2">
              <FiLogOut />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
