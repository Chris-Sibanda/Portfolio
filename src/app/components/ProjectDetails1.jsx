import React from 'react';
import ContactMe from './ContactMe';
import Footer from './Footer';

const ProjectDetails1 = ({ onClose }) => {
  const titleFontClass = 'project-details1-contact-title';
  const textFontClass = 'project-details1-contact-text';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      {/* Close Button */}
      <div
        className="absolute top-4 right-4 cursor-pointer bg-gray-300 rounded-full p-2 hover:bg-white"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          className="h-6 w-6 text-gray-600 hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      {/* Modal Content */}
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl p-6 md:p-10 shadow-lg overflow-y-auto h-[90vh]">
        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Rubbish Detection and Sorting Robot Arm
        </h1>

        {/* Video Section */}
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-3/4 h-auto">
            <iframe
              src="https://www.youtube.com/embed/KeyEe2Tt25Q"
              title="Rubbish Detection and Sorting Robot Arm"
              className="w-full h-72 md:h-96 lg:h-[500px] rounded-xl shadow-lg"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Card Section */}
        <section className="py-6 lg:py-8 bg-gray-100 p-6 rounded-2xl shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
            <div className="col-span-12 text-center sm:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                About the Project
              </h2>
              <p className="text-gray-700 text-base lg:text-lg mb-4">
                This project showcases an AI-powered robotic arm capable of
                detecting, identifying, and sorting rubbish with remarkable
                precision. It combines cutting-edge robotics, real-time AI
                processing, and intelligent hardware-software integration.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg space-y-2 mb-4">
                <li>
                  Trained a custom object detection model using YOLO V5,
                  achieving 80–95% accuracy in identifying cans, plastic, and
                  glass.
                </li>
                <li>
                  Integrated an Intel RealSense AI camera for real-time object
                  detection and coordinate generation.
                </li>
                <li>
                  Programmed the RX-200 robot arm to sort items into designated
                  bins based on classification.
                </li>
              </ul>
              <p className="text-gray-700 text-base lg:text-lg">
                This innovative solution addresses real-world waste management
                challenges, demonstrating expertise in AI model training,
                robotics programming, and advanced system integration.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails1;
