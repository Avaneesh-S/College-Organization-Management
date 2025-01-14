import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-8 w-auto mr-2" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
          <h1 className="text-white text-xl font-bold">Organization Management System</h1>
        </div>
        <div className="sm:flex hidden">
        <ul className="flex justify-between items-center gap-6 px-4">
          <li className="text-slate-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            About
          </li>
          <li className="text-slate-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            Contact Us
          </li>
          <li className="text-slate-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            Sign In
          </li>
        </ul>
        <div className="flex border-l-[1px] border-slate-200 px-2">
          <FaGithub className="text-2xl hover:text-cyan cursor-pointer text-slate-200"/>
        </div>
      </div>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
