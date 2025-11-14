// import React from 'react';
// import { TypeAnimation } from 'react-type-animation';
// import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-scroll';

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="w-full h-screen flex items-center justify-center bg-beige-100 px-4"
//     >
//       <div className="max-w-[1200px] w-full flex items-center justify-between">
//         <div className="w-1/2 text-black text-center sm:text-left sm:px-8">
//           <p className="text-xl text-gray-700">Hello</p>
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate__animated animate__fadeIn animate__delay-1s text-black">
//             I'm Sourabh Verma
//           </h1>
//           <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
//             I'm a
//             <TypeAnimation
//               sequence={[
//                 'Software Developer',
//                 2000,
//                 'Full Stack Developer',
//                 2000,
//                 'Open Source Contributor',
//                 2000,
//               ]}
//               wrapper="span"
//               speed={50}
//               className="pl-2 text-gray-500"
//               repeat={Infinity}
//             />
//           </h2>
//           <p className="text-gray-800 py-4 max-w-[700px] mx-auto text-lg sm:text-xl">
//             I am passionate about Data Structures and Algorithms, MERN Stack Web Development, and OOPs.
//             I love solving complex problems and creating efficient solutions. I enjoy contributing to open-source
//             projects and continuously learning.
//           </p>
//           <div>
//             <Link to="projects" smooth={true} duration={500}>
//               <button className="text-black group border-2 border-black px-6 py-3 my-2 flex items-center justify-center hover:bg-sky-500 hover:text-black transition-all duration-300 rounded-md shadow-lg transform hover:scale-105">
//                 <span className="mr-3">View My Work</span>
//                 <span className="group-hover:rotate-90 duration-300">
//                   <FaArrowRight />
//                 </span>
//               </button>
//             </Link>
//           </div>
//         </div>
//         <div className="w-1/2 flex justify-center items-center p-6">
//           <img
//             src="/personal.jpeg"
//             alt="Sourabh Verma"
//             className="rounded-full w-[350px] h-[350px] object-cover shadow-lg border-4 border-black"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

// Extraordinary Home component with animated background, accessible markup, and modern UI.
// Drop this file into your components folder (e.g. src/components/HomeExtraordinaire.jsx)
// Requirements: Tailwind CSS + framer-motion + react-type-animation + react-icons + react-scroll

export default function HomeExtraordinaire() {
  return (
    <section
      id="home"
      aria-label="Home - Intro"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[--bg]"
      style={{ ['--bg']: 'linear-gradient(180deg,#f8fafc 0%, #eaf2ff 60%)' }}
    >
      {/* Decorative animated background layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-20">
        {/* Soft gradient blur */}
        <div className="absolute -left-40 -top-40 w-[700px] h-[700px] rounded-full blur-3xl opacity-30 animate-blob" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.22), transparent 30%), radial-gradient(circle at 70% 70%, rgba(99,102,241,0.18), transparent 30%)' }} />
        {/* Floating diagonal streaks */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="stripeGrad" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(99,102,241,0.06)" />
              <stop offset="100%" stopColor="rgba(59,130,246,0.02)" />
            </linearGradient>
          </defs>
          <rect x="-20%" y="10%" width="140%" height="30%" fill="url(#stripeGrad)" transform="rotate(-12 0 0)" className="animate-slide" />
        </svg>
        {/* Subtle particle dots */}
        <div className="absolute inset-0"> 
          <svg className="w-full h-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="rgba(0,0,0,0.02)">
              <circle cx="10%" cy="20%" r="2" />
              <circle cx="25%" cy="70%" r="2.5" />
              <circle cx="65%" cy="30%" r="1.8" />
              <circle cx="85%" cy="75%" r="2" />
            </g>
          </svg>
        </div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-[1200px] w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left: Text card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="backdrop-blur-sm bg-white/60 dark:bg-black/40 border border-white/40 rounded-2xl p-8 shadow-2xl"
            role="region"
            aria-labelledby="intro-heading"
          >
            <p className="text-sm sm:text-base text-gray-600 mb-2">Hello, my name is</p>
            <h1 id="intro-heading" className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
              Sourabh Verma
            </h1>

            <h2 className="inline-flex items-center text-2xl sm:text-3xl font-semibold text-gray-700 mb-4">
              I'm a
              <TypeAnimation
                sequence={[
                  ' Software Developer',
                  2000,
                  ' Full Stack Developer',
                  2000,
                  ' Open Source Contributor',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                className="ml-3 text-indigo-600"
                repeat={Infinity}
              />
            </h2>

            <p className="text-gray-700 text-base sm:text-lg max-w-[60ch] mb-6">
              Passionate about Data Structures & Algorithms, MERN stack, and clean OOP design. I build fast,
              accessible interfaces and enjoy contributing to open-source projects. I love solving real-world problems with elegant code.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <Link to="projects" smooth={true} duration={600} className="group">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-indigo-600 text-white px-5 py-3 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  <span>View My Work</span>
                  <span className="transform transition-transform group-hover:rotate-90">
                    <FaArrowRight />
                  </span>
                </motion.button>
              </Link>

              <a href="#contact" className="inline-flex items-center px-4 py-3 border border-gray-300 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-200" role="button">
                Contact Me
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-600">
              <span className="px-3 py-1 bg-white/50 rounded-full">MERN</span>
              <span className="px-3 py-1 bg-white/50 rounded-full">DSA</span>
              <span className="px-3 py-1 bg-white/50 rounded-full">OOP</span>
              <span className="px-3 py-1 bg-white/50 rounded-full">Open Source</span>
            </div>
          </motion.div>

          {/* Right: Portrait + floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-[360px] h-[360px]">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-300/50 to-sky-200/40 blur-xl filter" />

              <motion.img
                src="/personal.jpeg"
                alt="Portrait of Sourabh Verma"
                className="relative rounded-full w-full h-full object-cover border-4 border-white shadow-xl"
                whileHover={{ scale: 1.03, rotate: 0.5 }}
                transition={{ type: 'spring', stiffness: 120 }}
              />

              {/* Floating mini-card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 rounded-xl px-4 py-2 shadow-lg border border-white/60 text-sm flex items-center gap-3"
                aria-hidden
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="1.5" />
                  <path d="M8 12.5L10.2 15L16 9" stroke="#6366F1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div>
                  <div className="font-medium text-gray-800">Open to work</div>
                  <div className="text-xs text-gray-600">MERN • DSA • Open Source</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* A11y skip link */}
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-white px-3 py-2 rounded-md shadow">Skip to content</a>

      {/* Component-scoped keyframes & small utility animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-12px) scale(1.05); }
          66% { transform: translateY(8px) scale(0.98); }
          100% { transform: translateY(0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite ease-in-out; }
        @keyframes slide { 0% { transform: translateX(-5%); } 50% { transform: translateX(5%);} 100% { transform: translateX(-5%);} }
        .animate-slide { animation: slide 18s linear infinite; }
      `}</style>
    </section>
  );
}
