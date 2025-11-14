import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const resumeUrl = '/resume.pdf';

  return (
    <div name="resume" className="w-full min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold inline-block text-black border-b-4 border-gray-400">
            Resume
          </h2>
          <p className="py-6 text-lg text-black">
            View or download my resume to learn more about my professional experience.
          </p>
        </div>

        {/* Download Button */}
        <a
          href={resumeUrl}
          download="YourName_Resume.pdf"
          className="relative inline-flex items-center justify-center px-8 py-3 my-2 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-lg shadow-lg group hover:scale-105"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black group-hover:w-full group-hover:h-full opacity-10 rounded-lg"></span>
          <span className="relative flex items-center gap-2">
            Download Resume <FaFileDownload className="ml-2" />
          </span>
        </a>

        {/* Embedded Resume */}
        <div className="mt-12 w-full h-[600px] rounded-xl overflow-hidden shadow-2xl bg-white/20 backdrop-blur-md border border-white/30 hover:shadow-3xl transition-all duration-500">
          <iframe
            src={resumeUrl}
            title="My Resume"
            className="w-full h-full border-0"
          >
            Your browser does not support embedded PDFs.
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
