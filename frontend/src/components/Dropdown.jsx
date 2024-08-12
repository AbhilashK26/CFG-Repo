import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button 
        onClick={toggleDropdown}
        className="bg-blue-600 text-white py-2 px-2 text-lg rounded-lg border-none hover:bg-green-700 focus:outline-none"
      >
        Languages
      </button>

      <div className={`${isOpen ? 'block' : 'hidden'} absolute mt-1 bg-gray-100 min-w-max shadow-lg z-10`}>
        <a href="#" className="block text-black py-3 px-4 hover:bg-gray-300">Kannada</a>
        <a href="#" className="block text-black py-3 px-4 hover:bg-gray-300">Tamil</a>
        <a href="#" className="block text-black py-3 px-4 hover:bg-gray-300">Telugu</a>
      </div>
    </div>
  );
};

export default Dropdown;
