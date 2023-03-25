import React from "react";

function SidebarComponents({ name, icon, type }) {
  return (
    <div className="flex items-center w-full justify-between gap-4 cursor-pointer">
      <div className="text-slate-300 font-semibold">{name}</div>
      <span className="text-slate-500 text-4xl peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
        {icon}
      </span>
    </div>
  );
}

export default SidebarComponents;
