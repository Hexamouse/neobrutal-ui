'use client'

import { useState } from "react";
import Input from "@/app/components/Input"; // Pastikan path sudah benar
import Button from "@/app/components/Button";
import Checkbox from "@/app/components/Checkbox"; // Menggunakan Checkbox yang sudah diimpor

export default function AuthLogin() {
    const [username, setUsername] = useState(""); // Ganti email menjadi username
    const [password, setPassword] = useState(""); // Tetap password
    const [rememberMe, setRememberMe] = useState(false); // Menyimpan status "Ingat Password"

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement login logic here
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative">
            {/* Background image with grayscale effect */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ 
                    backgroundImage: 'url(/images/banner.png)', // Ganti dengan path gambar Anda
                    filter: 'grayscale(100%)' // Menambahkan efek hitam putih pada gambar latar belakang
                }}
            />
            {/* Form container */}
            <div className="relative bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-gray-100 p-8 rounded-lg shadow-2xl w-full max-w-md text-center z-10">
                <h1 className="text-4xl font-bold text-white mb-8">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 text-left">
                        <label htmlFor="username" className="block text-sm font-semibold text-white uppercase mb-2">Username</label>
                        <Input
                            type="text" // Ganti email ke username, input tetap bertipe text
                            id="username"
                            value={username} // Mengirimkan username sebagai nilai
                            setValue={setUsername} // Mengirimkan fungsi setUsername sebagai setter untuk nilai username
                            placeholder="Enter your username"
                            className="w-full p-4 bg-white text-black border-1 rounded-lg"
                        />
                    </div>

                    <div className="mb-4 text-left">
                        <label htmlFor="password" className="block text-sm font-semibold text-white uppercase mb-2">Password</label>
                        <Input
                            type="password"
                            id="password"
                            value={password} // Tetap menggunakan password untuk field ini
                            setValue={setPassword} // Mengirimkan fungsi setPassword sebagai setter untuk nilai password
                            placeholder="Enter your password"
                            className="w-full p-4 bg-white text-black border-1 rounded-lg"
                        />
                    </div>

                    {/* Checkbox for "Ingat Password" */}
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <Checkbox
                                item="Ingat Password" 
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)} 
                            />
                        </div>
                        <a href="#" className="text-sm hover:underline">Lupa Password?</a>
                    </div>

                    <Button
                        type="submit"
                        className="w-full p-4 bg-white text-black border-2 border-black font-bold text-lg"
                    >
                        Log In
                    </Button>
                </form>
            </div>
        </div>
    );
}
