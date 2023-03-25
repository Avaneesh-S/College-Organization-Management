import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ProfilePage from "./profile";
function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle drawer */}
      <button className="fixed top-0 right-0 m-4 z-50" onClick={toggleDrawer}>
        {isOpen ? (
          <AiOutlineClose className="text-gray-600 w-8 h-8" />
        ) : (
          <span className="text-slate-500 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            person
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-[10%] border-slate-600 border right-0 h-fit w-full md:w-1/3 bg-gray-900/50 rounded backdrop-blur-md text-white overflow-hidden z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-[-2rem]" : "translate-x-[110%]"
        }`}
      >
        <ProfilePage/>
      </div>
    </>
  );
}

export default ProfileDrawer;
