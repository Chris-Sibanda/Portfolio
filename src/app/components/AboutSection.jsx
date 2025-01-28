'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, useAnimation } from 'framer-motion';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <>
        <ul className="pl-2 flex flex-wrap bg-black justify-center md:justify-start gap-6 border-2 border-gray-700 mt-4 p-4 rounded-lg">
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">C++</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Robotics</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800  animate-shine border-4 rounded-lg">
            <span className="relative z-10">Embedded Systems</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800  animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Software Engineering</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800  animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Artificial Intelligence</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Machine Learning</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Control Systems</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">Python</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">C++</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">Java</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">C</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">Usability Testing</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">ROS (Robot Operating System)</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">Object Detection</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            <span className="relative z-10">YOLO v5</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 nimate-shine border-4 rounded-lg">
            <span className="relative z-10">AI Camera Integration</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg">
            Deep Learning
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Real-Time Systems</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Signal Processing</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Algorithms</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Data Structures</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">MATLAB</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Simulink</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">System Modeling</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Problem Solving</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 nimate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Critical Thinking</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Automation</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Robotics Automation</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">System Stability Analysis</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Art Direction</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Hardware Integration</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Prototyping</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Robot Arm Control</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Intelligent Systems</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10"> Shopify & Wix Development</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Embedded Software Development</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Linux Command Line</span>
          </motion.li>

          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Windows OS</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Data Analysis</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">AI-powered Solutions</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Object Detection Algorithms</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Coordinate Generation</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Real-Time Object Detection</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">Software Development</span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Hands-on Robotics Projects
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Collaborative Work
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            CAD Software (SolidWorks)
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Embedded Programming
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Sensor Integration
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Autonomous Systems
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Test and Debugging
            </span>
          </motion.li>
          <motion.li
            whileHover={{
              y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
            }}
            transition={{
              duration: 2,
              ease: 'linear',
              loop: Infinity,
            }}
            className="relative group text-center text-white px-2 py-2 bg-gradient-to-r from-blue-500 via-cyan-800 animate-shine border-4 rounded-lg"
          >
            <span className="relative z-10">
            Customer-Centric Solutions
            </span>
          </motion.li>
        </ul>
      </>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <>
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
          <ul className="list-none text-base lg:text-lg px-4 py-2 bg-white rounded-lg shadow-lg text-gray-800">
            <li className="mb-6">
              <span style={{ color: 'green' }}>&#10036;</span>
              <strong className="text-gray-900"> BSc Robotics and Intelligent Devices </strong>
              - Maynooth University, Maynooth, Ireland
              <br />
              <span className="text-gray-800" style={{ fontSize: '0.9rem' }}>
                Expected Graduation: September 2026
              </span>
              <br />
              <span className="block text-gray-700">
                Key Modules: <span className="italic">
                  Robotics & Automation, Real-time and Embedded Systems, Artificial Intelligence, Control Systems, Object-Oriented Programming, Data Structures, System Dynamics
                </span>
              </span>
            </li>
            <li>
              <span style={{ color: 'green' }}>&#10036;</span>
              <span className="text-gray-900"> <strong className="text-gray-900">Leaving Certificate Awarded with Honors</strong></span>
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    title: 'Employment Experience',
    id: 'employment experience',
    content: (
      <>
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white">
    <h2 className="text-2xl font-bold mb-4 text-center">Employment History</h2>
    <ul className="list-none text-base lg:text-lg px-4 py-2 bg-white rounded-lg shadow-lg text-gray-800">
      <li className="mb-6">
        <span style={{ color: 'green' }}>&#10036;</span>
        <strong className="text-gray-900"> Area 51 Computers</strong>
        - Roscommon, Ireland
        <br />
        <span className="text-gray-500" style={{ fontSize: '0.9rem' }}>
          Technical Support Specialist | January 2019 – June 2019
        </span>
        <br />
        <span className="block text-gray-700">
          <ul className="list-disc pl-5">
            <li>Secured information lost or locked behind security keys.</li>
            <li>Installed operating systems and applications on PCs and laptops.</li>
            <li>Repaired and upgraded software and hardware on PCs and laptops.</li>
            <li>Troubleshot issues such as freezing, crashing, or rebooting.</li>
            <li>Advised and custom-built personal computers based on customer requirements.</li>
          </ul>
        </span>
      </li>
      <li>
        <span style={{ color: 'green' }}>&#10036;</span>
        <strong className="text-gray-900"> Glancy’s SuperValu</strong>
        - Carrick-on-Shannon, Co. Leitrim
        <br />
        <span className="text-gray-500" style={{ fontSize: '0.9rem' }}>
          Shop Assistant | August 2021 – Present
        </span>
        <br />
        <span className="block text-gray-700">
          <ul className="list-disc pl-5">
            <li>Collaborated with colleagues to achieve sales goals and highlight special promotions.</li>
            <li>Provided high-quality customer service by resolving product questions and concerns.</li>
            <li>Designed and maintained appealing displays to enhance customer experience.</li>
            <li>Tracked inventory and placed orders to prevent stock shortages.</li>
            <li>Worked with brand representatives to introduce new products and manage stock levels.</li>
            <li>Maintained a clean and organized store environment.</li>
          </ul>
        </span>
      </li>
    </ul>
        </div>
     </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="py-1 lg:py-4 pb-0 lg:pb-0 m-0 bg-gray-100 p-6 rounded-2xl shadow-lg my-8">
      <h2 className="text-start font-bold text-white mt-4 mb-4 text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 p-4 rounded-lg shadow-lg">
        About Me
      </h2>
      <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 text-white">
        <p className="text-base lg:text-lg opacity-90 leading-relaxed mb-4">
          Hi, I’m a third-year student at Maynooth University pursuing a BSc in Robotics and Intelligent Devices, expected to graduate in September 2026. With a strong foundation in software engineering, AI, and robotics, I’ve cultivated skills in programming (Python, Java, C++, and C), system modeling, and hands-on robotics projects using ROS and RX200 robot systems.
        </p>
        <p className="text-base lg:text-lg opacity-90 leading-relaxed mb-4">
          I’m particularly drawn to the intersection of technology and healthcare, with a keen interest in prosthetics and assistive devices. I aim to use my skills to develop intelligent solutions that enhance human mobility and quality of life.
        </p>
        <p className="text-base lg:text-lg opacity-90 leading-relaxed mb-4">
          At university, I’ve taken on leadership roles such as being a Student Representative for my second year, and I am an active participant in societies, including Powerlifting, Muay Thai, Films, and the Engineering & Robotics Societies. Additionally, I serve as the Treasurer for the Muay Thai Society.
        </p>
        <p className="text-base lg:text-lg opacity-90 leading-relaxed mb-4">
          During secondary school, I trained, coached, and refereed Volleyball while also playing Football, Gaelic Football, Handball, and Rugby. I earned recognition as the Junior Certificate Student of the Year and was a winner of the 2019 Anti-litter Cinema Advert Competition.
        </p>
        <p className="text-base lg:text-lg opacity-90 leading-relaxed">
          Outside of academics, I have a passion for powerlifting, Muay Thai, and watching Formula 1. I also enjoy exploring new technologies, films, and engaging in creative pursuits that inspire my work in robotics and design. I look forward to connecting and embarking on a journey of transformative design and engineering together.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-start mt-8 text-xl md:text-3xl lg:text-3xl font-bold">
        <TabButton
          selectTab={() => handleTabChange('skills')}
          active={tab === 'skills'}
        >
          {' '}
          Skills{' '}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('education')}
          active={tab === 'education'}
        >
          {' '}
          Education{' '}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('employment experience')}
          active={tab === 'employment experience'}
        >
          {' '}
          Employment Experience{' '}
        </TabButton>
      </div>

      <div className="m-8 pb-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );

};

export default AboutSection;
