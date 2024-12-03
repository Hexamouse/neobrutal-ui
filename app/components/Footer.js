'use client'

import Image from "next/image";

const Footer = ({ isDarkMode }) => {
  return (
    <footer
      className={`py-4 ${isDarkMode ? 'bg-[#212121] text-white' : 'bg-white text-black'} border-t-2 ${isDarkMode ? 'border-black' : 'border-[black]'} mt-auto overflow-x-hidden`}
    >
      <div className="w-full md:w-[70%] mx-auto flex flex-col items-center md:flex-row justify-between px-4 md:px-0">
        {/* Text Footer */}
        <span className={`text-sm ${isDarkMode ? 'text-white' : 'text-black'} text-center md:text-left mb-4 md:mb-0`}>
          © 2024 Neobrutalism | Created by{' '}
          <a
            href="https://discord.com/users/939930682275283005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#88AAEE]"
          >
            Mysticalx
          </a>
          . All rights reserved.
        </span>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center md:justify-start text-sm space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.youtube.com/@lsfdyt"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Discord
          </a>
          <a
            href="https://github.com/LSFDC"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${isDarkMode ? 'text-gray-300' : 'text-gray-400'} ${isDarkMode ? 'text-white' : 'text-black'}`}
          >
            Facebook
          </a>
        </div>

        <div className="flex items-center">
          {/* FAQ Link with SVG */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-black"
          >
            FAQ
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 ml-1" // Adjust the size of the SVG and add margin
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>
          </a>
          <span className="mx-2">|</span>
          {/* DMCA Link with Image */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-black"
          >
            DMCA
            <Image
              src="/images/copyright.svg"
              className="mr-2 h-4 w-4 ml-1" // Adjust the size of the image and add margin
              alt="Copyright"
              width={16}
              height={16}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;