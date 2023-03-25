import React from "react";
function Navbar() {
  return (
    <nav className="absolute border-b-[1px] border shadow-md z-10 top-0 backdrop-filter backdrop-blur-md flex py-6 px-6 w-full items-center justify-between">
      <div className="text-blue-500 text-2xl font-semibold">ProjectPilot</div>
      <div className="sm:flex hidden">
        <ul className="flex justify-between items-center gap-6 px-4">
          <li className="text-blue-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            About
          </li>
          <li className="text-blue-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            Contact Us
          </li>
          <li className="text-blue-300 hover:text-cyan-300 after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
            Sign In
          </li>
        </ul>
        <div className="flex border-l-[1px] border-slate-200 px-2">
          <i className="fa text-blue-500 cursor-pointer fa-moon-o text-2xl px-2"></i>
          <i className="fa fa-github text-2xl hover:text-cyan cursor-pointer text-slate-200 px-2"></i>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
