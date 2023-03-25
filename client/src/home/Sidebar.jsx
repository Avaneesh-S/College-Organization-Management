import React, { useState } from "react";
import SidebarComponents from "./SidebarComponents";
function Sidebar() {
  const [open, setOpen] = useState(false);
  const Components = [
    {
      name: "Home",
      icon: "home",
      type: false,
    },
    {
      name: "Dashboard",
      icon: "bar_chart_4_bars",
      type: false,
    },
    {
      name: "Friends",
      icon: "group",
      type: false,
    },
    {
      name: "Home",
      icon: "home",
      type: false,
    },
    {
      name: "Home",
      icon: "home",
      type: false,
    },
  ];
  function open1() {
    document.getElementById("sidebar").style.left = "-4px";
  }
  function close() {
    document.getElementById("sidebar").style.left = "-200px";
  }
  return (
    <div
      id="sidebar"
      className="border border-slate-500 fixed top-[10%] z-10 h-4/5 left-[-200px] w-[300px] flex flex-col gap-8 transition-[left] duration-700 rounded-md bg-gray-900/70 backdrop-filter backdrop-blur-md p-4"
    >
      {open ? (
        <div
          className="flex w-full justify-end cursor-pointer"
          onClick={() => {
            setOpen(!open);
            close();
          }}
        >
          <span className="text-slate-500 text-3xl w peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            navigate_before
          </span>
        </div>
      ) : (
        <div
          className="flex w-full justify-end cursor-pointer"
          onClick={() => {
            setOpen(!open);
            open1();
          }}
        >
          <span className="text-slate-500 text-3xl peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            navigate_next
          </span>
        </div>
      )}
      {Components.map((e) => (
        <SidebarComponents name={e.name} icon={e.icon} type={e.type} />
      ))}
    </div>
  );
}

export default Sidebar;
