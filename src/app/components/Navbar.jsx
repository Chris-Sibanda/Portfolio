import React from "react";

const tabButtonStyles = {
  base: 'px-4 py-2 mb-2 sm:mb-0 sm:mr-2 rounded-lg transition-all duration-300 bg-black border-80 border-gradient-to-br from-blue-500 via-cyan-500 to-green-500', // Gradient border, black background
  active:
    'bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 text-white border-transparent rounded-lg', // Active styles
  inactive:
    'text-white hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:via-cyan-500 hover:to-green-500 rounded-lg', // Hover styles
};


// Inside your TabButton component relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 animate-shine border-4 rounded-lg
const TabButton = ({ selectTab, active, children }) => {
  const styles = active
    ? `${tabButtonStyles.base} ${tabButtonStyles.active}`
    : `${tabButtonStyles.base} ${tabButtonStyles.inactive}`;

  return (
    <button className={styles} onClick={selectTab}>
      {children}
    </button>
  );
};

export default TabButton;
