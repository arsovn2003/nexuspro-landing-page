import React, { useEffect, useState } from 'react'

export const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center">
                    <a href="#" className="text-2xl font-bold text-blue-600">Nexus<span className="text-gray-800">Pro</span></a>
                </div>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">Features</a>
                    <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">Benefits</a>
                    <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">Testimonials</a>
                    <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">Pricing</a>
                </nav>
                <div className="hidden md:block">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md !rounded-button whitespace-nowrap cursor-pointer">Get Started</button>
                </div>
                <div className="md:hidden">
                    <button className="text-gray-700 focus:outline-none cursor-pointer">
                        <i className="fa-solid fa-bars text-xl"></i>
                    </button>
                </div>
            </div>
        </header>
    )
}
