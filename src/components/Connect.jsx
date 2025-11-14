// import React from 'react';
// import { FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';
// import { HiOutlineMail } from 'react-icons/hi';

// const socialLinks = [
//   { id: 1, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sourabh1211', bgColor: 'bg-gray-400', iconColor: 'text-white' },
//   { id: 2, name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sourabh1112', bgColor: 'bg-blue-500', iconColor: 'text-white' },
//   { id: 3, name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/sourabh_vr', bgColor: 'bg-pink-500', iconColor: 'text-white' },
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
{ id: 1, name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/sourabh1211', bgColor: 'bg-gray-400', iconColor: 'text-white' },
{ id: 2, name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://linkedin.com/in/sourabh1112', bgColor: 'bg-blue-500', iconColor: 'text-white' },
{ id: 3, name: 'Instagram', icon: <FaInstagram />, link: 'https://instagram.com/sourabh_vr', bgColor: 'bg-indigo-500', iconColor: 'text-white' },
{ id: 4, name: 'Snapchat', icon: <FaSnapchatGhost />, link: 'https://snapchat.com/add/sourabh_8482', bgColor: 'bg-yellow-500', iconColor: 'text-white' },
{ id: 5, name: 'Email', icon: <HiOutlineMail />, link: 'mailto:sourabhvr8482@gmail.com', bgColor: 'bg-red-500', iconColor: 'text-white' },
];


const Connect = () => {
return (
<div name="connect" className="w-full min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-blue-400 via-indigo-400 to-white">
<div className="max-w-[1000px] mx-auto text-center">
<div className="mb-12">
<h2 className="text-4xl font-bold inline border-b-4 border-gray-400 text-black">
Connect
</h2>
<p className="py-6 text-lg text-black">
Let's get in touch! Feel free to reach out on any of these platforms.
</p>
</div>
<div className="flex flex-wrap justify-center gap-6">
{socialLinks.map(({ id, name, icon, link, bgColor, iconColor }) => (
<a
key={id}
href={link}
target="_blank"
rel="noreferrer"
className={`flex flex-col items-center p-6 rounded-lg w-32 h-32 justify-center ${bgColor} ${iconColor} transition-all duration-300 hover:scale-105 shadow-lg`}
>
<span className="text-5xl mb-2">{icon}</span>
<p className="font-semibold text-black">{name}</p>
</a>
))}
</div>
</div>
</div>
);
};


export default Connect;
