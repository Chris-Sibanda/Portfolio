import React from 'react';

const ProjectDetails2 = ({ onClose }) => {
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
        Ball and Beam System project
        </h1>

        {/* Video Section */}
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-3/4 h-auto">
            <iframe
              src="https://www.youtube.com/embed/v4F-cGDGiEw"
              title="Ball and Beam System project"
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
                The Ball and Beam System project demonstrates a simulation of a dynamic system used to study and
                improve system stability. Using MATLAB and Simulink, the system is simulated with an emphasis on control
                theory and feedback mechanisms, enabling the precise control of the ball’s position on the beam.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg space-y-2 mb-4">
                <li>
                Developed a simulation of the Ball and Beam System using MATLAB and Simulink, focusing on system
                stability.
                </li>
                <li>
                  Implemented control algorithms to enhance system performance, achieving a 20% improvement in stability.
                </li>
                <li>
                  Created an interactive GUI via an m-file that allows users to visualize and simulate the ball's
                  movement on the beam.
                </li>
              </ul>
              <p className="text-gray-700 text-base lg:text-lg">
              This project demonstrates a strong understanding of control systems, dynamics, and simulation techniques,
                applying them to optimize the performance of the Ball and Beam System while improving practical skills in
                MATLAB and Simulink. The system is designed to be interactive and flexible, providing a rich environment
                for future experimentation and analysis.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails2;
