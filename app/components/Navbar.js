'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
  const [isRankOpen, setIsRankOpen] = useState(false);
  const [isGuildOpen, setIsGuildOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  const toggleRank = () => {
    setIsRankOpen(!isRankOpen);
    if (isGuildOpen) setIsGuildOpen(false);
  };

  const toggleGuild = () => {
    setIsGuildOpen(!isGuildOpen);
    if (isRankOpen) setIsRankOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Update the time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';

      // Convert hours to 12-hour format
      hours = hours % 12;
      hours = hours ? String(hours).padStart(2, '0') : '12'; // 0 becomes 12 for 12 AM
      setCurrentTime(`${hours}:${minutes}:${seconds} ${ampm}`);

      const day = String(now.getDate()).padStart(2, '0');
      const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const year = now.getFullYear();
      const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' }); // Get full weekday name
      setCurrentDate(`${dayOfWeek}, ${day}-${month}-${year}`);
    };

    // Initial time and date update
    updateTime();

    // Update every second
    const intervalId = setInterval(updateTime, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <nav className="bg-white p-4 shadow-lg border-b-2 border-solid border-black h-[80px] w-full">
      <div className="container mx-auto flex justify-between items-center h-full max-w-full">
        {/* Logo and Navbar Links */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-gray-800">Sentinel Project</h1>

          {/* Navbar Links (hidden in mobile) */}
          <div className="flex space-x-10 hidden lg:flex">
            <a href="/" className="text-lg text-gray-800 hover:text-gray-600 transition-all">Home</a>
            <a href="../News" className="text-lg text-gray-800 hover:text-gray-600 transition-all">News</a>

            {/* Dropdown for Rank */}
            <div className="relative">
              <button
                onClick={toggleRank}
                className="text-lg text-gray-800 hover:text-gray-600 transition-all flex items-center space-x-2 border-b-2 border-transparent hover:border-gray-600"
              >
                <span>Rank</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 transform transition-all duration-200 ${isRankOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 bg-white border border-black rounded-md shadow-lg transform transition-all duration-200 ease-in-out
                  ${isRankOpen ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 translate-y-2 pointer-events-none'}`}
              >
                <a href="../Rank/WinLose/" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">
                  Win/Lose
                  {/* Fixed SVG Icon */}
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-4 w-5 h-5">
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg> */}
                </a>
                <a href="../Rank/FactionPoint" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">Faction Point</a>
                <a href="../Rank/EXP" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">EXP</a>
                <a href="../Rank/Playtime" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">Playtime</a>
              </div>
            </div>

            {/* Dropdown for Guild */}
            <div className="relative">
              <button
                onClick={toggleGuild}
                className="text-lg text-gray-800 hover:text-gray-600 transition-all flex items-center space-x-2 border-b-2 border-transparent hover:border-gray-600"
              >
                <span>Guild</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-5 h-5 transform transition-all duration-200 ${isGuildOpen ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <div
                className={`absolute left-0 mt-2 w-40 bg-white border border-black rounded-md shadow-lg transform transition-all duration-200 ease-in-out
                  ${isGuildOpen ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 translate-y-2 pointer-events-none'}`}
              >
                <a href="/" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">Faction Point</a>
                <a href="/" className="px-6 py-2 text-gray-800 hover:bg-[#88AAEE] border-b-2 border-black block">Guild Top 10</a>
              </div>
            </div>
          </div>
        </div>

        {/* Hamburger Button for Mobile */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden text-gray-800 focus:outline-none ml-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
          </svg>
        </button>

        {/* Desktop Login Button */}
        <div className="flex space-x-6 items-center hidden lg:flex">
          {/* Waktu dan Tanggal Tampil di Samping Button (vertikal) */}
          <div className="flex flex-col items-end text-xs text-gray-800 font-medium">
            <span>{currentTime}</span>
            <span>{currentDate}</span>
          </div>
          <a href="../Download">
            <Button>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download
            </Button>
          </a>


          <Button>
            <Image
              src="/images/discord-black.svg"
              className="mr-2"
              alt="Discord"
              width={20}
              height={20}
            />
            <span>Discord</span>
          </Button>

          <a href="../Auth/Login" className="text-lg text-white bg-black border-2 border-solid border-black transition-all h-full px-8 py-6">
            Login
          </a>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-all ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} max-w-full`}>
        <div className="p-6">
          <button
            onClick={toggleSidebar}
            className="text-xl text-gray-800 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="mt-10">
            <a href="../page.js" className="block text-lg text-gray-800 py-2">Home</a>
            <a href="../News" className="block text-lg text-gray-800 py-2">News</a>
            <a href="#" className="block text-lg text-gray-800 py-2">Rank</a>
            <a href="#" className="block text-lg text-gray-800 py-2">Guild</a>
            <a href="#" className="block text-lg text-gray-800 py-2">Download</a>
            <a href="#" className="block text-lg text-gray-800 py-2">Discord</a>
            <a href="#" className="block text-lg text-gray-800 py-2">Login</a>
          </div>
        </div>
      </div>
    </nav>
  );
}