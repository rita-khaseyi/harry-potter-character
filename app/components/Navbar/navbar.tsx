import React, { useState } from "react";

interface NavbarProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ setSearchTerm }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbar p-4" style={{ backgroundColor: "rgb(2, 39, 66)" }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logos.png" alt="Logo" width={150} height={50} />
        </div>
        <div className="flex space-x-4 items-center">
          <button className="text-golden text-lg sm:hidden" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
          <ul className={`flex space-x-4 sm:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <li>
              <input
                type="text"
                placeholder="Find a Character"
                onChange={handleSearch}
                className="px-2 py-1 rounded bg-gray-300 text-gray-800 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 text-center sm:min-w-[300px] sm:rounded-[5px] md:min-w-[400px] lg:min-w-[500px]" 
              />
            </li>
            <li>
              <button className="text-golden font-semibold text-lg" style={{ color: "rgb(255, 174, 0)" }}>
                Search
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
