import React from "react";
import Navbar from "../Navbar/Navbar";
import Drawer from "../Drawer/Drawer";
import Sidebar from "../home/Sidebar";
import ProfileDrawer from "../profile/ProfileDrawer";
import Cards from "../home/Cards";
import Footer from "../Footer/footer";
function Home() {
    const toggleDrawer = () => {
      document.getElementById("profile-drawer").style.right = '0px';
    };
  return (
    <div className="flex h-full overflow-y-auto w-full bg-slate-900">
      <nav className="border-b-[1px] border-slate-400 z-10 backdrop-filter overflow-x-hidden backdrop-blur-md bg-slate-900/60 absolute top-0 w-full py-3 sm:px-8 px-3 h-fit flex justify-between">
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
        <div className="relative pr-8 hidden md:flex gap-6 w-fit">
          <input className="w-[30rem] h-full pl-10 pr-2 text-slate-300 focus:outline-none bg-slate-900 rounded border-gray-600 border" />
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
          <button className="h-full flex items-center justify-center aspect-square">
            <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
              settings
            </span>
          </button>
          <button className="h-full flex items-center justify-center  aspect-square">
            <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
              notifications
            </span>
          </button>
        </div>
      </nav>
      <ProfileDrawer/>
      <Drawer />
      <Sidebar />
      <div className="flex flex-col">
      <div className="flex gap-8 w-full pl-[150px] pr-10 relative top-[10%] h-[90%]">
        <div className="w-full flex flex-col">
          <div className="w-full rounded-md items-end min-h-[25rem] justify-between bg-center flex flex-col p-6 bg-[url('https://t3.ftcdn.net/jpg/02/54/80/60/360_F_254806029_19mSXkOwpIHBbZXLDcSQVsIXIEEAyhlp.jpg')] bg-cover bg-no-repeat">
            <div className="text-4xl text-slate-200 text-right whitespace-nowrap">
              Hi Nikhil!
            </div>
            <div className="w-1/2 text-2xl text-right text-slate-400 ">
              Welcome to our management system website! We are here to help you
              manage your business with ease and efficiency.
            </div>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Explore
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
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
      <Footer/>
      </div>
    </div>
  );
}

export default Home;
