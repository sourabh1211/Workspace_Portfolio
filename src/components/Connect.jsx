import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  { id: 1, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sourabh1211', username: 'sourabh1211', bgColor: 'bg-gray-800', hoverColor: 'hover:bg-gray-700' },
  { id: 2, name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sourabh1112', username: 'sourabh1112', bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-500' },
  { id: 3, name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/sourabh_vr', username: '@sourabh_vr', bgColor: 'bg-pink-500', hoverColor: 'hover:bg-pink-400' },
  { id: 4, name: 'Snapchat', icon: <FaSnapchatGhost />, link: 'https://snapchat.com/add/sourabh_8482', username: 'sourabh_8482', bgColor: 'bg-yellow-400', hoverColor: 'hover:bg-yellow-300' },
  { id: 5, name: 'Email', icon: <HiOutlineMail />, link: 'mailto:sourabhvr8482@gmail.com', username: 'sourabhvr8482@gmail.com', bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-400' },
];

const Connect = () => {
  return (
    <div
      name="connect"
      className="w-full min-h-screen flex items-center justify-center py-20 px-4 bg-beige-100"
    >
      <div className="max-w-[1000px] w-full text-center flex flex-col gap-12">
        {/* Section Title */}
        <div>
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400 text-black">
            Connect
          </h2>
          <p className="py-6 text-lg text-black">
            Let's get in touch! Feel free to reach out on any of these platforms.
          </p>
        </div>

        {/* Social Cards */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6">
          {socialLinks.map(({ id, name, icon, link, username, bgColor, hoverColor }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`${bgColor} ${hoverColor} transition-all duration-300 transform hover:scale-105 flex items-center gap-4 p-6 rounded-xl shadow-lg w-64`}
            >
              <span className="text-4xl text-white">{icon}</span>
              <div className="text-left">
                <p className="font-semibold text-white">{name}</p>
                <p className="text-white/80 text-sm">{username}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
