import React from 'react';
import { FaGraduationCap, FaCode, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJsSquare,
  FaLinux, FaComments, FaBrain, FaRegLightbulb, FaClock, FaTrophy, FaStar, FaUsers, FaLaptopCode } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiCplusplus, SiPostman, SiLeetcode, SiCodeforces, SiCodechef } from 'react-icons/si';

import ProfileCard from './ProfileCard';

const SkillIcon = ({ icon, name, bgColor, hoverColor }) => (
  <div
    className={`flex flex-col items-center p-4 shadow-md rounded-lg transition-all duration-300 ${bgColor} ${hoverColor} relative`}
  >
    <span className="text-4xl mb-2 text-black">{icon}</span>
    <p className="text-black font-bold">{name}</p>
  </div>
);

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen py-20 px-4 bg-light-gray">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-600 text-black">About Me</h2>
        </div>

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

        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 flex items-center justify-center text-black">
            <FaCode className="mr-3 text-blue-500" /> Professional Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <SkillIcon icon={<SiCplusplus className="text-blue-500" />} name="C++" bgColor="bg-white/30" hoverColor="hover:bg-blue-500" />
            <SkillIcon icon={<FaHtml5 className="text-orange-500" />} name="HTML5" bgColor="bg-white/30" hoverColor="hover:bg-orange-500" />
            <SkillIcon icon={<FaCss3Alt className="text-blue-600" />} name="CSS3" bgColor="bg-white/30" hoverColor="hover:bg-blue-600" />
            <SkillIcon icon={<FaJsSquare className="text-yellow-500" />} name="JavaScript" bgColor="bg-white/30" hoverColor="hover:bg-yellow-500" />
            <SkillIcon icon={<FaReact className="text-cyan-400" />} name="React" bgColor="bg-white/30" hoverColor="hover:bg-cyan-400" />
            <SkillIcon icon={<FaNodeJs className="text-green-500" />} name="Node.js" bgColor="bg-white/30" hoverColor="hover:bg-green-500" />
            <SkillIcon icon={<SiExpress className="text-gray-400" />} name="Express" bgColor="bg-white/30" hoverColor="hover:bg-gray-400" />
            <SkillIcon icon={<SiMongodb className="text-green-600" />} name="MongoDB" bgColor="bg-white/30" hoverColor="hover:bg-green-600" />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-black flex items-center justify-center">
            <FaLaptopCode className="mr-3 text-blue-500" /> Coding Profiles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfileCard
              icon={<SiLeetcode className="text-yellow-500" />}
              name="LeetCode"
              rating="Knight | 900+ Problems"
              link="https://leetcode.com/sourabh_1112/"
              bgColor="bg-yellow-100"
              shadowColor="shadow-yellow-1000"
            />
            <ProfileCard
              icon={<SiCodeforces className="text-red-500" />}
              name="Codeforces"
              rating="Specialist | 1404"
              link="https://codeforces.com/profile/sourabh1112"
              bgColor="bg-red-200"
              shadowColor="shadow-red-500"
            />
            <ProfileCard
              icon={<SiCodechef className="text-yellow-600" />}
              name="CodeChef"
              rating="3-Star | 1685"
              link="https://www.codechef.com/users/sourabh_1112"
              bgColor="bg-yellow-300"
              shadowColor="shadow-yellow-600"
            />
            <ProfileCard
              icon={<FaCode className="text-gray-600" />}
              name="AtCoder"
              rating="8 Kyu"
              link="https://atcoder.jp/users/sourabh_1112"
              bgColor="bg-gray-300"
              shadowColor="shadow-gray-500"
            />
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-black">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <SkillIcon icon={<FaComments />} name="Communication" bgColor="bg-blue-500" hoverColor="hover:bg-blue-600" />
            <SkillIcon icon={<FaBrain />} name="Critical Thinking" bgColor="bg-green-500" hoverColor="hover:bg-green-600" />
            <SkillIcon icon={<FaRegLightbulb />} name="Problem Solving" bgColor="bg-yellow-500" hoverColor="hover:bg-yellow-600" />
            <SkillIcon icon={<FaClock />} name="Time Management" bgColor="bg-purple-500" hoverColor="hover:bg-purple-600" />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-beige-100 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-center mb-8 text-black flex items-center justify-center">
              <FaTrophy className="mr-3 text-yellow-400" /> Achievements
            </h3>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Top Performer in Graph contest (Algo University)</li>
              <li>Top 10 in Innodev development event (MNNIT Tech fest)</li>
              <li>Adobe Hackathon Top Performer</li>
            </ul>
          </div>

          <div className="p-6 bg-beige-100 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-3xl font-bold text-center mb-8 text-black flex items-center justify-center">
              <FaUsers className="mr-3 text-blue-500" /> Responsibilities
            </h3>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>Design Team Member (Culrav & Avishkar, MNNIT)</li>
              <li>PR Team Member (Culrav & Avishkar, MNNIT)</li>
              <li>Media Team Member (Culrav & Avishkar)</li>
              <li>Coordinator, Western Dance Committee</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
