'use client'

import { useState, useEffect } from "react";
import Input from "@/app/components/Input"; 
import Button from "@/app/components/Button";
import Checkbox from "@/app/components/Checkbox"; 
import BlobPreload from "@/app/components/BlobPreload"; // Import BlobPreload component

export default function AuthLogin() {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [rememberMe, setRememberMe] = useState(false); 
    const [isLoading, setIsLoading] = useState(true); // Set to true initially for preload

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); 

        // Simulate an API call or async operation
        setTimeout(() => {
            setIsLoading(false); // Set loading state to false after operation
        }, 2000); 
    };

    useEffect(() => {
        // Simulate a page load delay (e.g., fetching resources, etc.)
        setTimeout(() => {
            setIsLoading(false); // Hide the preload after the simulated load
        }, 3000); // Simulate a 3-second delay for demonstration
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Show Blob Preload if isLoading is true */}
            {isLoading ? (
                <BlobPreload />
            ) : (
                <>
                    {/* Background image with grayscale effect */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: 'url(/images/banner.png)', 
                            filter: 'grayscale(100%)' 
                        }}
                    />
                    {/* Form container */}
                    <div className="relative bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-2 border-gray-100 p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto z-10">
                        <h1 className="text-4xl text-center font-bold text-white mb-8">Login</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6 text-left">
                                <label htmlFor="username" className="block text-sm font-semibold text-white uppercase mb-2">Username</label>
                                <Input
                                    type="text" 
                                    id="username"
                                    value={username} 
                                    setValue={setUsername} 
                                    placeholder="Enter your username"
                                    className="w-full p-4 bg-white text-black border-1 rounded-lg"
                                />
                            </div>

                            <div className="mb-4 text-left">
                                <label htmlFor="password" className="block text-sm font-semibold text-white uppercase mb-2">Password</label>
                                <Input
                                    type="password"
                                    id="password"
                                    value={password} 
                                    setValue={setPassword} 
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

                            {/* Back to Home link with SVG on the left */}
                            <div className="mt-6 flex items-center justify-center">
                                <a href="/" className="text-sm text-white hover:underline flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                                    </svg>
                                    Back to Home
                                </a>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}