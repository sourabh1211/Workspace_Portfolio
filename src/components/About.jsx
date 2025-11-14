// import React from 'react';
// import {
//   FaGraduationCap,
//   FaCode,
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaGithub,
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaLinux, // Linux icon added
//   FaComments,
//   FaBrain,
//   FaRegLightbulb,
//   FaClock,
//   FaTrophy,
//   FaStar,
//   FaUsers,
//   FaLaptopCode,
//   FaRobot // For ChatGPT representation
// } from 'react-icons/fa';

// import {
//   SiMongodb,
//   SiExpress,
//   SiCplusplus,
//   SiPostman,
//   SiLeetcode,
//   SiCodeforces,
//   SiCodechef,
//   SiMysql,  // MySQL icon
//   SiFirebase // Firebase icon
// } from 'react-icons/si';

// import ProfileCard from './ProfileCard';

// // SkillIcon component
// const SkillIcon = ({ icon, name, bgColor = 'bg-white/30', hoverColor = 'hover:bg-gray-200' }) => (
//   <div
//     className={`flex flex-col items-center p-4 shadow-md rounded-lg transition-all duration-300 ${bgColor} ${hoverColor} relative`}
//   >
//     <span className="text-4xl mb-2 text-black">{icon}</span>
//     <p className="text-black font-bold">{name}</p>
//   </div>
// );

// const About = () => {
//   return (
//     <div name="about" className="w-full min-h-screen py-20 px-4 bg-light-gray">
//       <div className="max-w-[1200px] mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold inline border-b-4 border-gray-600 text-black">About Me</h2>
//         </div>

//         <section className="mb-12">
//           <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">
//             <FaGraduationCap className="mr-3 text-blue-500" /> Education
//           </h3>
//           <div className="flex justify-center">
//             <div className="w-full md:w-2/3 p-6 bg-[#D5B097]/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
//               <div className="flex items-center">
//                 <img src="/mnnitimage.jpg" alt="MNNIT Allahabad" className="w-1/3 rounded-xl mr-6" />
//                 <div>
//                   <h4 className="text-2xl font-bold text-black">Bachelor of Technology (B.Tech)</h4>
//                   <p className="text-lg text-gray-800 mb-2">Electronics and Communication Engineering</p>
//                   <p className="font-semibold text-black">Motilal Nehru National Institute of Technology (MNNIT), Allahabad</p>
//                   <p className="text-sm text-gray-600">2022 - 2026</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//        <section className="mb-12">
//   <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">
//     <FaCode className="mr-3 text-blue-500" /> Professional Skills
//   </h3>

//   <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
//     <SkillIcon icon={<SiCplusplus className="text-blue-500" />} name="C++" bgColor="bg-white/30" hoverColor="hover:bg-blue-200" />
//     <SkillIcon icon={<FaHtml5 className="text-orange-500" />} name="HTML5" bgColor="bg-white/30" hoverColor="hover:bg-orange-200" />
//     <SkillIcon icon={<FaCss3Alt className="text-blue-600" />} name="CSS3" bgColor="bg-white/30" hoverColor="hover:bg-blue-200" />
//     <SkillIcon icon={<FaJsSquare className="text-yellow-500" />} name="JavaScript" bgColor="bg-white/30" hoverColor="hover:bg-yellow-200" />
//     <SkillIcon icon={<FaReact className="text-cyan-400" />} name="React" bgColor="bg-white/30" hoverColor="hover:bg-cyan-200" />
//     <SkillIcon icon={<FaNodeJs className="text-green-500" />} name="Node.js" bgColor="bg-white/30" hoverColor="hover:bg-green-200" />
//     <SkillIcon icon={<SiExpress className="text-gray-400" />} name="Express" bgColor="bg-white/30" hoverColor="hover:bg-gray-200" />
//     <SkillIcon icon={<SiMongodb className="text-green-600" />} name="MongoDB" bgColor="bg-white/30" hoverColor="hover:bg-green-200" />
//     <SkillIcon icon={<FaGitAlt className="text-orange-500" />} name="Git" bgColor="bg-white/30" hoverColor="hover:bg-orange-200" />
//     <SkillIcon icon={<FaGithub className="text-gray-800" />} name="GitHub" bgColor="bg-white/30" hoverColor="hover:bg-gray-300" />
//     <SkillIcon icon={<SiPostman className="text-orange-500" />} name="Postman" bgColor="bg-white/30" hoverColor="hover:bg-orange-200" />
//     <SkillIcon
//       icon={
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 128 128"
//           className="h-8 w-8"
//           aria-hidden="true"
//         >
//           <defs />
//           <path fill="currentColor" d="M5 24 L60 64 5 104z" opacity="0.12" />
//           <path fill="currentColor" d="M10 20 L80 64 10 108 L10 20z" />
//         </svg>
//       }
//       name="VS Code"
//       bgColor="bg-white/30"
//       hoverColor="hover:bg-blue-200"
//     />
//     <SkillIcon icon={<SiMysql className="text-blue-500" />} name="SQL (MySQL)" bgColor="bg-white/30" hoverColor="hover:bg-blue-200" />
//     <SkillIcon icon={<FaRobot className="text-purple-500" />} name="ChatGPT" bgColor="bg-white/30" hoverColor="hover:bg-purple-200" />
//     <SkillIcon icon={<SiFirebase className="text-yellow-500" />} name="Firebase" bgColor="bg-white/30" hoverColor="hover:bg-yellow-200" />
//     <SkillIcon icon={<FaLinux className="text-black" />} name="Linux" bgColor="bg-white/30" hoverColor="hover:bg-gray-200" />
//   </div>
// </section>


//         <section className="mb-12">
//           <h3 className="text-3xl font-bold text-center mb-8 text-black flex items-center justify-center">
//             <FaLaptopCode className="mr-3 text-blue-500" /> Coding Profiles
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <ProfileCard
//               icon={<SiLeetcode className="text-yellow-500" />}
//               name="LeetCode"
//               rating="Knight | 900+ Problems"
//               link="https://leetcode.com/sourabh_1112/"
//               bgColor="bg-yellow-100"
//               shadowColor="shadow-yellow-1000"
//             />
//             <ProfileCard
//               icon={<SiCodeforces className="text-red-500" />}
//               name="Codeforces"
//               rating="Specialist | 1404"
//               link="https://codeforces.com/profile/sourabh1112"
//               bgColor="bg-red-200"
//               shadowColor="shadow-red-500"
//             />
//             <ProfileCard
//               icon={<SiCodechef className="text-yellow-600" />}
//               name="CodeChef"
//               rating="3-Star | 1685"
//               link="https://www.codechef.com/users/sourabh_1112"
//               bgColor="bg-yellow-300"
//               shadowColor="shadow-yellow-600"
//             />
//             <ProfileCard
//               icon={<FaCode className="text-gray-600" />}
//               name="AtCoder"
//               rating="8 Kyu"
//               link="https://atcoder.jp/users/sourabh_1112"
//               bgColor="bg-gray-300"
//               shadowColor="shadow-gray-500"
//             />
//           </div>
//         </section>

//         <section className="mb-12">
//           <h3 className="text-3xl font-bold text-center mb-8 text-black">Soft Skills</h3>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//             <SkillIcon icon={<FaComments />} name="Communication" bgColor="bg-blue-500" hoverColor="hover:bg-blue-600" />
//             <SkillIcon icon={<FaBrain />} name="Critical Thinking" bgColor="bg-green-500" hoverColor="hover:bg-green-600" />
//             <SkillIcon icon={<FaRegLightbulb />} name="Problem Solving" bgColor="bg-yellow-500" hoverColor="hover:bg-yellow-600" />
//             <SkillIcon icon={<FaClock />} name="Time Management" bgColor="bg-purple-500" hoverColor="hover:bg-purple-600" />
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;










import React from 'react';
import {
  FaGraduationCap,
  FaCode,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaLinux,
  FaComments,
  FaBrain,
  FaRegLightbulb,
  FaClock,
  FaLaptopCode,
  FaRobot
} from 'react-icons/fa';

import {
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiPostman,
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiMysql,
  SiFirebase
} from 'react-icons/si';

import ProfileCard from './ProfileCard';

// Skill Icon Component
const SkillIcon = ({ icon, name, bgColor = 'bg-white/30', hoverColor = 'hover:bg-gray-200' }) => (
  <div
    className={`flex flex-col items-center p-4 shadow-md rounded-lg transition-all duration-300 ${bgColor} ${hoverColor}`}
  >
    <span className="text-4xl mb-2 text-black">{icon}</span>
    <p className="text-black font-bold">{name}</p>
  </div>
);

const About = () => {
  return (
    <div name="about" className="relative w-full min-h-screen py-20 px-4 overflow-hidden">

      {/* ❇ Background Matching Home.jsx */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100" />

        <div className="absolute -top-32 -left-20 w-[500px] h-[500px] bg-sky-300/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-indigo-300/30 rounded-full blur-3xl animate-blob2" />

        <div className="absolute inset-0 opacity-30">
          <div className="w-2 h-2 bg-black/10 rounded-full absolute top-[20%] left-[15%] animate-float" />
          <div className="w-3 h-3 bg-black/10 rounded-full absolute top-[70%] left-[50%] animate-float2" />
          <div className="w-2 h-2 bg-black/10 rounded-full absolute top-[40%] left-[80%] animate-float3" />
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-600 text-black">About Me</h2>
        </div>

        {/* Education */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">
            <FaGraduationCap className="mr-3 text-blue-500" /> Education
          </h3>

          <div className="flex justify-center">
            <div className="w-full md:w-2/3 p-6 bg-[#D5B097]/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="flex items-center">
                <img src="/mnnitimage.jpg" alt="MNNIT Allahabad" className="w-1/3 rounded-xl mr-6" />
                <div>
                  <h4 className="text-2xl font-bold text-black">Bachelor of Technology (B.Tech)</h4>
                  <p className="text-lg text-gray-800 mb-2">Electronics and Communication Engineering</p>
                  <p className="font-semibold text-black">Motilal Nehru National Institute of Technology (MNNIT), Allahabad</p>
                  <p className="text-sm text-gray-600">2022 - 2026</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Skills */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">
            <FaCode className="mr-3 text-blue-500" /> Professional Skills
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <SkillIcon icon={<SiCplusplus className="text-blue-500" />} name="C++" />
            <SkillIcon icon={<FaHtml5 className="text-orange-500" />} name="HTML5" />
            <SkillIcon icon={<FaCss3Alt className="text-blue-600" />} name="CSS3" />
            <SkillIcon icon={<FaJsSquare className="text-yellow-500" />} name="JavaScript" />
            <SkillIcon icon={<FaReact className="text-cyan-400" />} name="React" />
            <SkillIcon icon={<FaNodeJs className="text-green-500" />} name="Node.js" />
            <SkillIcon icon={<SiExpress className="text-gray-400" />} name="Express" />
            <SkillIcon icon={<SiMongodb className="text-green-600" />} name="MongoDB" />
            <SkillIcon icon={<FaGitAlt className="text-orange-500" />} name="Git" />
            <SkillIcon icon={<FaGithub className="text-gray-800" />} name="GitHub" />
            <SkillIcon icon={<SiPostman className="text-orange-500" />} name="Postman" />
            <SkillIcon icon={<SiMysql className="text-blue-500" />} name="SQL (MySQL)" />
            <SkillIcon icon={<FaRobot className="text-purple-500" />} name="ChatGPT" />
            <SkillIcon icon={<SiFirebase className="text-yellow-500" />} name="Firebase" />
            <SkillIcon icon={<FaLinux className="text-black" />} name="Linux" />
          </div>
        </section>

        {/* Coding Profiles */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-black flex items-center justify-center">
            <FaLaptopCode className="mr-3 text-blue-500" /> Coding Profiles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfileCard icon={<SiLeetcode className="text-yellow-500" />} name="LeetCode" rating="Knight | 900+" link="https://leetcode.com/sourabh_1112/" />
            <ProfileCard icon={<SiCodeforces className="text-red-500" />} name="Codeforces" rating="Specialist | 1404" link="https://codeforces.com/profile/sourabh1112" />
            <ProfileCard icon={<SiCodechef className="text-yellow-600" />} name="CodeChef" rating="3-Star | 1685" link="https://www.codechef.com/users/sourabh_1112" />
            <ProfileCard icon={<FaCode className="text-gray-600" />} name="AtCoder" rating="8 Kyu" link="https://atcoder.jp/users/sourabh_1112" />
          </div>
        </section>

        {/* Soft Skills */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-black">Soft Skills</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <SkillIcon icon={<FaComments />} name="Communication" bgColor="bg-blue-500" hoverColor="hover:bg-blue-600" />
            <SkillIcon icon={<FaBrain />} name="Critical Thinking" bgColor="bg-green-500" hoverColor="hover:bg-green-600" />
            <SkillIcon icon={<FaRegLightbulb />} name="Problem Solving" bgColor="bg-yellow-500" hoverColor="hover:bg-yellow-600" />
            <SkillIcon icon={<FaClock />} name="Time Management" bgColor="bg-purple-500" hoverColor="hover:bg-purple-600" />
          </div>
        </section>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes blob {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }

        @keyframes blob2 {
          0% { transform: scale(1.1); }
          50% { transform: scale(0.9); }
          100% { transform: scale(1.1); }
        }
        .animate-blob2 { animation: blob2 9s infinite ease-in-out; }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float2 { animation: float 7s infinite ease-in-out; }
        .animate-float3 { animation: float 5s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default About;
