import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const navLinks = [
    { id: 1, name: 'Home', to: 'home' },
    { id: 2, name: 'About', to: 'about' },
    { id: 3, name: 'Projects', to: 'projects' },
    { id: 4, name: 'Resume', to: 'resume' },
    { id: 5, name: 'Connect', to: 'connect' },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-6 bg-black text-white z-50 shadow-md hover:shadow-xl transition-all ease-in-out duration-300">
      <div>
        <h1 className="text-3xl font-bold cursor-pointer hover:text-gray-400 transition-all duration-300">
          <Link to="home" smooth={true} duration={500}>
            Workspace
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex space-x-8">
        {navLinks.map(({ id, name, to }) => (
          <li
            key={id}
            className="cursor-pointer font-medium text-white hover:text-black hover:bg-white hover:rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 py-2 px-4"
          >
            <Link to={to} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={handleClick} className="md:hidden z-10 text-3xl cursor-pointer text-white">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={`${
          !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'
        }`}
      >
        {navLinks.map(({ id, name, to }) => (
          <li
            key={id}
            className="py-6 text-4xl cursor-pointer text-white hover:text-black hover:bg-white hover:rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Link onClick={handleClick} to={to} smooth={true} duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
