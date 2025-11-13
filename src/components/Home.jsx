import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen flex items-center justify-center bg-beige-100 px-4"
    >
      <div className="max-w-[1200px] w-full flex items-center justify-between">
        <div className="w-1/2 text-black text-center sm:text-left sm:px-8">
          <p className="text-xl text-gray-700">Hello</p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s text-black">
            I'm Sourabh Verma
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            I'm a
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Open Source Contributor',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="pl-2 text-gray-500"
              repeat={Infinity}
            />
          </h2>
          <p className="text-gray-800 py-4 max-w-[700px] mx-auto text-lg sm:text-xl">
            I am passionate about Data Structures and Algorithms, MERN Stack Web Development, and OOPs.
            I love solving complex problems and creating efficient solutions. I enjoy contributing to open-source
            projects and continuously learning.
          </p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center justify-center hover:bg-sky-500 hover:text-black transition-all duration-300 rounded-md shadow-lg transform hover:scale-105">
                <span className="mr-3">View My Work</span>
                <span className="group-hover:rotate-90 duration-300">
                  <FaArrowRight />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center p-6">
          <img
            src="/personal.jpeg"
            alt="Sourabh Verma"
            className="rounded-full w-[350px] h-[350px] object-cover shadow-lg border-4 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
