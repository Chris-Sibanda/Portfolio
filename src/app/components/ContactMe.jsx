'use client';
import React, { useState } from 'react';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Image from 'next/image';
import styles from './ContactMe.module.css';

const ContactMe = ({ titleFontClass, textFontClass }) => {
  return (
    <section
      id="contact"
      className="grid justify-center items-center my-10 md:my-20 lg:my-30 gap-4 relative bg-black"
    >
      <div className="z-10 text-center bg-black">
        <h5
          className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-4 ${titleFontClass}`}
        >
          Connect with me
        </h5>
        <p
          className={`mb-4 text-white max-w-md text-base md:text-lg lg:text-xl ${textFontClass}`}
        >
          Collaborate together
        </p>
        <div className="socials flex justify-center gap-2 mb-6 bg-black">
          <a
            href="https://www.linkedin.com/in/christopher-sibanda/"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block ${styles.linkedinIcon}`}
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="w-12 h-12"
              priority={true}
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
