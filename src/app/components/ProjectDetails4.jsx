import React from 'react';

const ProjectDetails4 = ({ onClose }) => {
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
        Blackjack on Arduino
        </h1>

        {/* Video Section */}
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-3/4 h-auto">
            <iframe
              src="https://www.youtube.com/embed/2KkHXL5FuWQ"
              title="Blackjack on Arduino project"
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
                The Blackjack on Arduino project showcases a fully functional, basic version of the popular casino game, Blackjack, programmed onto an Arduino board. This game simulates all key features such as "Stand," "Hit," and "Double Down." It provides an interactive experience with real-time feedback displayed on an LED screen, allowing players to track both their score and the dealer's score.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg space-y-2 mb-4">
              <li>
                  Developed a basic Blackjack game with essential gameplay features such as "Hit," "Stand," and "Double Down."
                </li>
                <li>
                  Incorporated an LED screen for real-time display of the player's and dealer's scores.
                </li>
                <li>
                  Utilized Arduino’s hardware capabilities, combining the microcontroller with user input via switches and outputs to control the game’s logic and visuals.
                </li>
                <li>
                  Created a simple interface with tactile switches for player interaction, allowing them to make game decisions (hit, stand, double down) in an intuitive manner.
                </li>
              </ul>
              <p className="text-gray-700 text-base lg:text-lg">
                This project combines fundamental electronics and programming skills with the implementation of an interactive game. It demonstrates my ability to design embedded systems, implement game logic, and integrate hardware elements like LED screens and switches to create an engaging and functional gaming experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails4;
