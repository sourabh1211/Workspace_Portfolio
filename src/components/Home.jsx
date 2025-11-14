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
        
        {/* LEFT SIDE */}
        <div className="w-1/2 text-black text-center sm:text-left sm:px-8">
          <p className="text-xl text-gray-700">Hello</p>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s text-black">
            I'm Sourabh Verma
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            I'm a
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Full Stack Developer', 2000,
                'Open Source Contributor', 2000,
              ]}
              wrapper="span"
              speed={50}
              className="pl-2 text-gray-500"
              repeat={Infinity}
            />
          </h2>

          <p className="text-gray-800 py-4 max-w-[700px] mx-auto text-lg sm:text-xl">
            I am passionate about Data Structures and Algorithms, MERN Stack Web Development, and OOPs.
            I love solving complex problems and creating efficient solutions. I enjoy contributing to
            open-source projects and continuously learning.
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

        {/* RIGHT SIDE */}
        <div className="w-1/2 flex justify-center items-center p-6">
          <div className="relative">
            <img
              src="/personal.jpeg"
              alt="Sourabh Verma"
              className="rounded-full w-[350px] h-[350px] object-cover shadow-2xl border-4 border-black hover:scale-105 transition-all duration-500"
            />

            {/* Floating mini label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-sm border shadow-md rounded-lg px-4 py-2 text-sm">
              ⭐ Open to Work
            </div>
          </div>
        </div>
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
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float { animation: float 6s infinite ease-in-out; }
        .animate-float2 { animation: float 7s infinite ease-in-out; }
        .animate-float3 { animation: float 5s infinite ease-in-out; }
      `}</style>
    </div>
  );
};

export default Home;
