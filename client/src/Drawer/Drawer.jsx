import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

function Drawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle drawer */}
      <button
        className="fixed top-0 right-0 m-4 md:hidden z-50"
        onClick={toggleDrawer}
      >
        {isOpen ? (
          <AiOutlineClose className="text-gray-600 w-8 h-8" />
        ) : (
          <FiMenu className="text-gray-600 w-8 h-8" />
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:w-1/3 bg-gray-800 text-white p-4 z-40 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Organization Details</h2>
        <ul>
          <li className="mb-2">
            <span className="font-semibold">Name:</span> Avaneesh S
          </li>
          <li className="mb-2">
            <span className="font-semibold">Location:</span> Bengaluru, India
          </li>
          <li className="mb-2">
            <span className="font-semibold">Industry:</span> Technology
          </li>
        </ul>
      </div>
    </>
  );
}

export default Drawer;
