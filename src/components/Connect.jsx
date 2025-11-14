// import React from 'react';
// import { FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';

// const socialLinks = [
//   { id: 1, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sourabh1211', bgColor: 'bg-gray-400', iconColor: 'text-white' },
//   { id: 2, name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sourabh1112', bgColor: 'bg-blue-500', iconColor: 'text-white' },
//   { id: 3, name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/sourabh_vr', bgColor: 'bg-indigo-500', iconColor: 'text-white' },
//   { id: 4, name: 'Snapchat', icon: <FaSnapchatGhost />, link: 'https://snapchat.com/add/sourabh_8482', bgColor: 'bg-yellow-500', iconColor: 'text-white' },
//   { id: 5, name: 'Email', icon: <HiOutlineMail />, link: 'mailto:sourabhvr8482@gmail.com', bgColor: 'bg-red-500', iconColor: 'text-white' },
// ];

// const Connect = () => {
//   return (
//     <div name="connect" className="w-full min-h-screen flex items-center justify-center py-20 px-4">
//       <div className="max-w-[1000px] mx-auto text-center">
//         <div className="mb-12">
//           <h2 className="text-4xl font-bold inline border-b-4 border-gray-400 text-black">
//             Connect
//           </h2>
//           <p className="py-6 text-lg text-black">
//             Let's get in touch! Feel free to reach out on any of these platforms.
//           </p>
//         </div>

//         <div className="flex flex-wrap justify-center gap-6">
//           {socialLinks.map(({ id, name, icon, link, bgColor, iconColor }) => (
//             <a
//               key={id}
//               href={link}
//               target="_blank"
//               rel="noreferrer"
//               className={`flex flex-col items-center p-6 rounded-lg w-32 h-32 justify-center ${bgColor} ${iconColor}`}
//             >
//               <span className="text-5xl mb-2">{icon}</span>
//               <p className="font-semibold">{name}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Connect;



import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socialLinks = [
  { id: 1, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sourabh1211', bgColor: 'bg-gray-800', hoverColor: 'hover:bg-gray-700' },
  { id: 2, name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sourabh1112', bgColor: 'bg-blue-600', hoverColor: 'hover:bg-blue-500' },
  { id: 3, name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/sourabh_vr', bgColor: 'bg-pink-500', hoverColor: 'hover:bg-pink-400' },
  { id: 4, name: 'Snapchat', icon: <FaSnapchatGhost />, link: 'https://snapchat.com/add/sourabh_8482', bgColor: 'bg-yellow-400', hoverColor: 'hover:bg-yellow-300' },
  { id: 5, name: 'Email', icon: <HiOutlineMail />, link: 'mailto:sourabhvr8482@gmail.com', bgColor: 'bg-red-500', hoverColor: 'hover:bg-red-400' },
];

const Connect = () => {
  return (
    <div
      name="connect"
      className="w-full min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-tr from-purple-500 to-indigo-400 text-white"
    >
      <div className="max-w-[1000px] w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Profile Card */}
        <div className="flex flex-col items-center text-center md:text-left md:items-start bg-white/20 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <img
            src="https://avatars.githubusercontent.com/u/your-avatar.png" // Replace with your profile image
            alt="Sourabh Verma"
            className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-xl"
          />
          <h2 className="text-3xl font-bold mb-2 text-white">Sourabh Verma</h2>
          <p className="text-lg mb-4 text-white/90">
            Full-Stack Developer & Tech Enthusiast. Connect with me through these platforms!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map(({ id, name, icon, link, bgColor, hoverColor }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noreferrer"
              className={`${bgColor} ${hoverColor} transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center w-32 h-32 rounded-xl shadow-xl`}
            >
              <span className="text-5xl mb-2">{icon}</span>
              <p className="font-semibold">{name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Connect;
