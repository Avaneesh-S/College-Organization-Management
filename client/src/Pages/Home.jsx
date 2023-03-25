import React from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "../Drawer/Drawer";
import Sidebar from "../home/Sidebar";
import Cards from "../home/Cards";
function Home() {
  return (
    <div className="flex h-full w-full bg-slate-900">
      <nav className="absolute top-0 w-full py-3 sm:px-8 px-3 h-fit flex justify-between">
        <div className="flex items-center">
          <img
            className="h-8 w-auto mr-2"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
            alt="Workflow"
          />
          <h1 className="lg:flex hidden text-white text-xl font-bold">
            Organization Management System
          </h1>
        </div>
        <div className="relative hidden md:flex gap-6 w-fit">
          <input className="w-[30rem] h-full pl-10 pr-2 text-slate-300 focus:outline-none bg-slate-900 rounded shadow-md shadow-slate-700" />
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <button className="h-full flex items-center justify-center aspect-square shadow-md shadow-slate-700">
            <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
              settings
            </span>
          </button>
          <button className="h-full flex items-center justify-center  aspect-square shadow-md shadow-slate-700">
            <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
              notifications
            </span>
          </button>
          <button className="h-full flex items-center justify-center  aspect-square shadow-md shadow-slate-700">
            <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
              person
            </span>
          </button>
        </div>
      </nav>
      <Drawer />
      <Sidebar />
      <div className="flex gap-8 w-full pl-[150px] pr-10 relative pt-24">
        <div className="w-full flex-col p-6"></div>
        <div className="gap-4 flex flex-col">
          <div className="flex gap-4">
            <Cards
              title={"Attendance"}
              color={"bg-gradient-to-r from-fuchsia-600 to-pink-600"}
              icon={"clock_loader_60"}
            />
            <Cards
              title={"Performance"}
              icon={"speed"}
              color={"bg-gradient-to-r from-orange-400 to-rose-400"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
