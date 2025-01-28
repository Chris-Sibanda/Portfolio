import React from 'react';

const ProjectDetails3 = ({ onClose }) => {
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
        The Obstacle Avoidance Cart is a self-driving toy car
        </h1>

        {/* Video Section */}
        <div className="flex justify-center mb-8">
          <div className="w-full lg:w-3/4 h-auto">
            <iframe
              src="https://www.youtube.com/embed/nUas-A0THDo"
              title="Obstacle Avoidance Cart is a self-driving toy car"
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
                The Obstacle Avoidance Cart is a self-driving toy car that can detect and avoid obstacles in its path,
                providing a hands-on solution for robotic navigation. The car is equipped with an ultrasonic sensor to
                measure the distance to nearby objects, allowing it to navigate autonomously while continuously avoiding
                obstacles.
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base lg:text-lg space-y-2 mb-4">
              <li>
                  Developed an obstacle avoidance system using an ultrasonic sensor to detect objects and avoid collisions.
                </li>
                <li>
                  Designed the cart to run continuously and change direction based on real-time obstacle detection.
                </li>
                <li>
                  Implemented a pivoting behavior when the cart is trapped with no clear path, allowing it to turn and
                  resume motion once an obstacle is avoided.
                </li>
              </ul>
              <p className="text-gray-700 text-base lg:text-lg">
                 This project demonstrates my ability to design autonomous robotic systems, applying real-world sensors
                (ultrasonic) and control algorithms. It integrates robotics, sensor technology, and programming to create
                a fully functional and intelligent cart capable of navigating its environment efficiently. This autonomous
                system serves as a foundation for more complex robotics applications.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetails3;
