'use client';

import Navbar from './components/Navbar';  // Impor Navbar komponen
import Footer from './components/Footer';  // Impor Footer komponen

export default function Home() {
  return (
    <div className="bg-[#DFE5F2] min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar /> 

      {/* Footer */}
      <Footer />  {/* Menggunakan Footer yang terpisah */}
    </div>
  );
}