import React from 'react';
import { FaFileDownload } from 'react-icons/fa';

const Resume = () => {
  const resumeUrl = '/resume.pdf';

  return (
    <div name="resume" className="w-full min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-400 text-black">
            Resume
          </h2>
          <p className="py-6 text-lg text-black">
            View or download my resume to learn more about my professional experience.
          </p>
        </div>
        <a
          href={resumeUrl}
          download="YourName_Resume.pdf"
          className="text-white group border-2 px-6 py-3 my-2 flex items-center justify-center mx-auto w-fit bg-black text-white transition-all duration-300"
        >
          Download Resume <FaFileDownload className="ml-3" />
        </a>
        <div className="mt-12 w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
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
