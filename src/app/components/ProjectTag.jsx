import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500" // Active styles with gradient background
    : "text-[#ADB7BE]  hover:text-white hover:border-white hover:bg-gradient-to-br hover:from-blue-500 hover:via-cyan-500 hover:to-green-500"; // Hover and default styles

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300`} // Added transition
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
