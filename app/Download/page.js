'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Download() {
    return (
        <div className="bg-[#DFE5F2] min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar /> 
        <h1 className='text-xl items-center text-black'>KONTOL</h1>
        {/* Footer */}
        <Footer />
      </div>
    );
}