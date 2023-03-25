import React, { useState } from 'react';

const SelectableCard = ({ title, description, onSelect, isSelected }) => {
  const [hover, setHover] = useState(false);

  const handleClick = () => {
    onSelect();
  };

  return (
    <div
      className={`border rounded-lg shadow-md h-[8rem] cursor-pointer w-[12rem] ${
        isSelected ? 'border-blue-500' : hover ? 'border-gray-400' : 'border-transparent'
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div className="p-4 flex flex-col items-center">
        <h3 className="w-min text-lg font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SelectableCard;
