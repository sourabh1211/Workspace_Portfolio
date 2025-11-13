import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-[60px] bg-black text-white backdrop-blur-sm flex justify-center items-center">
      <p>&copy; {new Date().getFullYear()} [Sourabh Verma]. All rights reserved.</p>
    </div>
  );
};

export default Footer;
