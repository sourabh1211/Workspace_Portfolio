import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';

const projects = [
  {
    id: 1,
    name: 'SplitShare',
    description: 'SplitShare is an intuitive app designed to simplify group expense management and bill splitting among friends and colleagues.',
    techStack: [
      <FaReact className="text-cyan-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-600" />,
      <SiExpress className="text-gray-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/SplitShare',
    live: 'https://sourabhsplitshare.vercel.app',
    bgColor: 'bg-blue-100',
  },
  {
    id: 2,
    name: 'Codly',
    description: 'Codly is The Ultimate MERN-Powered Online IDE for Developers.',
    techStack: [
      <FaReact className="text-cyan-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-600" />,
      <SiExpress className="text-gray-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/Codly',
    live: 'https://sourabhcodly.vercel.app',
    bgColor: 'bg-green-100',
  },
  {
    id: 3,
    name: 'NoteVault',
    description: 'A full-stack MERN Notes App with rich text editing, authentication, and organization features. This app allows users to create, edit, categorize, and manage notes seamlessly.',
    techStack: [
      <FaReact className="text-cyan-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-600" />,
      <SiExpress className="text-gray-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/NoteVault',
    live: 'https://sourabhnotevault.vercel.app',
    bgColor: 'bg-red-100',
  },
  {
    id: 4,
    name: 'FinTrack',
    description: 'A full-featured Expense Tracker application built with the MERN stack, designed to help users efficiently manage their income and expenses.',
    techStack: [
      <FaReact className="text-cyan-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-600" />,
      <SiExpress className="text-gray-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/FinTrack',
    live: 'https://sourabhfintrack.vercel.app/login',
    bgColor: 'bg-yellow-100',
  },
  {
    id: 5,
    name: 'CodeJourney',
    description: 'CodeJourney is a React web app that fetches and displays coding stats from LeetCode, Codeforces, and CodeChef. It provides a clean and interactive UI to track your progress across different competitive programming platforms in one place.',
    techStack: [
      <FaReact className="text-cyan-500" />,
      <FaNodeJs className="text-green-500" />,
      <SiMongodb className="text-green-600" />,
      <SiExpress className="text-gray-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/CodeJourney',
    live: 'https://sourabhcodejourney.vercel.app/',
    bgColor: 'bg-indigo-100',
  },
  {
    id: 6,
    name: 'GitHub Readme',
    description: 'Github readme design',
    techStack: [
      <SiHtml5 className="text-red-600" />,
      <SiCss3 className="text-cyan-500" />,
      <SiJavascript className="text-yellow-500" />,
    ],
    github: 'https://github.com/sourabh1211/sourabh1211',
    live: 'https://github.com/sourabh1211/sourabh1211',
    bgColor: 'bg-gray-300',
  },
];

const ProjectCard = ({ name, description, techStack, github, live, bgColor }) => (
  <div
    className={`${bgColor} backdrop-blur-sm shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl`}
  >
    <div className="p-6">
      <h4 className="text-2xl font-bold mb-2 text-black">{name}</h4>
      <p className="text-black mb-4">{description}</p>
      <div className="flex space-x-3 mb-4">
        {techStack.map((icon, index) => (
          <span key={index} className="text-2xl">{icon}</span>
        ))}
      </div>
      <div className="flex space-x-4">
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center py-2 px-4 bg-lightblue-500 border border-black hover:bg-lightblue-600 text-black font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <CgWebsite className="mr-2" /> Live Demo
        </a>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center py-2 px-4 bg-gray-700 hover:bg-gray-800 text-white font-semibold rounded-lg transition-colors duration-300 flex items-center justify-center"
        >
          <FaGithub className="mr-2" /> GitHub
        </a>
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div name="projects" className="w-full min-h-screen py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold inline-flex items-center justify-center text-black relative z-10">
            <FaLaptopCode className="mr-3 text-5xl text-blue-500" />
            Projects
          </h2>
          <p className="py-6 text-lg text-black hover:text-gray-600 transition-colors duration-300">
            Check out some of my recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
