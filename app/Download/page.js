'use client'

import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Button from '../components/Button';  // Pastikan Button sudah diimpor dengan benar

const files = [
  { name: 'File 1', size: '10 MB', link: '/files/file1.zip' },
  { name: 'File 2', size: '25 MB', link: '/files/file2.zip' },
  { name: 'File 3', size: '5 MB', link: '/files/file3.zip' },
  { name: 'File 4', size: '50 MB', link: '/files/file4.zip' },
];

const tools = [
  { name: 'VC++ Runtime', size: '20 MB', link: '/tools/vc_runtime.exe' },
  { name: 'DirectX', size: '100 MB', link: '/tools/directx_installer.exe' },
  { name: 'Microsoft .NET Framework', size: '50 MB', link: '/tools/dotnet_installer.exe' },
  { name: 'Java Runtime', size: '80 MB', link: '/tools/java_runtime.exe' },
];

export default function Download() {
  return (
    <div className="bg-[#DFE5F2] min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="container mx-auto p-6 mt-10">
        <h1 className="text-4xl font-semibold text-center text-black mb-8">Download Files</h1>

        {/* Tabel untuk Files Umum */}
        <h2 className="text-2xl font-semibold text-center text-black mb-6">General Files</h2>
        <table className="w-full table-auto bg-white border-2 border-black shadow-md mb-8">
          <thead>
            <tr className="bg-[#F8F9FA] text-gray-700 border-2 border-black">
              <th className="p-4 text-center text-lg font-semibold w-1/3">Nama File</th>
              <th className="p-4 text-center text-lg font-semibold w-1/3">Ukuran</th>
              <th className="p-4 text-center text-lg font-semibold w-1/3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index} className="border-t hover:bg-[#F1F3F5]">
                <td className="p-4 text-gray-700 w-1/3 text-center">{file.name}</td>
                <td className="p-4 text-gray-700 w-1/3 text-center">{file.size}</td>
                <td className="p-4 w-1/3 flex justify-center items-center">  {/* Menambahkan items-center untuk vertikal */}
                  <Button 
                    onClick={() => window.location.href = file.link}  // Ganti dengan aksi untuk mendownload
                    className="bg-[white] text-gray-700 py-2 px-4 rounded-md shadow-sm"
                  >
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tabel untuk Tools */}
        <h2 className="text-2xl font-semibold text-center text-black mb-6">Tools</h2>
        <table className="w-full table-auto bg-white border-2 border-black shadow-md mb-10">
          <thead>
            <tr className="bg-[#F8F9FA] text-gray-700 border-2 border-black">
              <th className="p-4 text-center text-lg font-semibold w-1/3">Nama Tool</th>
              <th className="p-4 text-center text-lg font-semibold w-1/3">Ukuran</th>
              <th className="p-4 text-center text-lg font-semibold w-1/3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, index) => (
              <tr key={index} className="border-t hover:bg-[#F1F3F5]">
                <td className="p-4 text-gray-700 w-1/3 text-center">{tool.name}</td>
                <td className="p-4 text-gray-700 w-1/3 text-center">{tool.size}</td>
                <td className="p-4 w-1/3 flex justify-center items-center">  {/* Menambahkan items-center untuk vertikal */}
                  <Button 
                    onClick={() => window.location.href = tool.link}  // Ganti dengan aksi untuk mendownload
                    className="bg-[white] text-gray-700 py-2 px-4 rounded-md shadow-sm"
                  >
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}