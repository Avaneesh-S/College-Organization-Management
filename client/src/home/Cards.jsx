import React from "react";

function Cards({ title, icon, color }) {
  return (
    <div
      className={`rounded-lg shadow-md h-[10rem] cursor-pointer w-[18rem] ${color}`}
    >
      <div className="p-4 flex h-full justify-center flex-col items-center">
        <span className="text-white text-3xl w peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
          {icon}
        </span>
        <h3 className="w-min text-white text-lg font-medium mb-2">{title}</h3>
      </div>
    </div>
  );
}

export default Cards;
