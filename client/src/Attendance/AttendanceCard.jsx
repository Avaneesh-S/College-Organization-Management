import React, { useState } from "react";

function AttendanceCard({ title, icon, onSelect, isSelected, color }) {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    onSelect();
  };
  return (
    <div
      className={`rounded-lg shadow-lg shadow-slate-700 cursor-pointer ${
        isSelected ? color : hover ? color : "bg-white text-slate-700"
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div className="p-3 flex gap-2 items-center">
        <span className=" pointer-events-none material-symbols-outlined">
          {icon}
        </span>
        <h3 className="w-min text-lg font-medium mb-2">{title}</h3>
      </div>
    </div>
  );
}

export default AttendanceCard;
