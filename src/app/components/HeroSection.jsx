'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
const cvFilePath = '/ChristopherCV.pdf';
return (
  <section className="py-1 pb-1 lg:py-4 lg:pb-4 m-0 bg-gray-100 p-6 rounded-2xl shadow-lg my-8">
    <div className="flex flex-col lg:flex-row items-center lg:items-start">
      {/* Profile Picture Div */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="lg:mr-6 mb-6 lg:mb-0 flex-shrink-0"
      >
        <div className="rounded-full bg-[#181818] w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] relative overflow-hidden">
          <Image
            src="/images/projects/chrisProfiler.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={500}
            height={500}
            priority
          />
        </div>
      </motion.div>

      {/* Text Content Div */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left"
      >
        <h1 className="text-black mb-2 text-2xl md:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 font-bold">
            Hello, I am
          </span>
          <br />
          <TypeAnimation
            sequence={[
              'Christopher',
              1000,
              'A passionate Robotics and Intelligent Systems student',
              1000,
              'Skilled in AI, robotics, and software engineering',
              1000,
              'Looking for a 6-month internship to make an impact',
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <div className="text-gray-800 text-base sm:text-lg mb-6 lg:text-l">
          A passionate Robotics and Intelligent Systems student at Maynooth University, Ireland, dedicated to turning cutting-edge technology into real-world solutions. With hands-on experience in robotics, AI, and programming, I thrive on solving complex problems and designing innovative systems like AI-powered robotic arms and obstacle-avoiding vehicles.
        </div>
        <div className="text-gray-800 text-base sm:text-lg mb-6 lg:text-l">
          My background includes not only technical expertise but also real-world problem-solving experience gained during my role as a <strong>Technical Support Specialist at Area 51 Computers</strong>, where I resolved complex hardware and software issues, custom-built PCs tailored to client needs, and ensured data security for customers. Additionally, my position as a Shop Assistant at Glancy’s SuperValu demonstrates my ability to work in a fast-paced, collaborative environment, achieve goals under tight deadlines, and deliver exceptional customer service.
        </div>
        <div className="text-gray-800 text-base sm:text-lg mb-2 lg:text-l">
          If you’re seeking a creative, driven, and technically skilled intern who’s ready to contribute to exciting projects, let’s connect!
        </div>
        <section id="open-roles" className="bg-gray-100 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Open to Roles Like</h2>
          <ul className="list-disc list-inside text-lg text-gray-700">
            <li>Software Engineering Intern</li>
            <li>Robotics Engineering Intern</li>
            <li>Embedded Systems Developer Intern</li>
            <li>Artificial Intelligence/Machine Learning Intern</li>
            <li>Automation and Control Systems Intern</li>
          </ul>
        </section>
        <div>
          <a
            href={cvFilePath}
            download
            className="px-1 text-white inline-block py-1 sm:border-5 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-green-500 p-[2px] transition-all duration-300 my-4"
          >
            <div className="flex justify-center items-center">
              <button className="bg-[#121212]  hover:bg-gradient-to-br hover:from-blue-500 hover:via-cyan-500 hover:to-green-500 hover:border-black hover:text-white rounded-full px-5 py-2 transition-all duration-300">
                Download CV
              </button>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

};

export default HeroSection;
