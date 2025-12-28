import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaListOl } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-kid-primary p-4 shadow-lg sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-3xl font-bold flex items-center gap-2">
                    🌟 শিশু শিক্ষা
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-white font-semibold text-lg">
                    <Link to="/" className="hover:text-kid-accent transition flex items-center gap-1"><FaHome /> হোম</Link>
                    <Link to="/index" className="hover:text-kid-accent transition flex items-center gap-1"><FaListOl /> উপদেশের তালিকা (Index)</Link>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white text-3xl">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-kid-primary pb-4 text-white font-semibold text-center text-xl">
                     <Link to="/" className="block py-2 hover:bg-white/20" onClick={() => setIsOpen(false)}>হোম</Link>
                     <Link to="/index" className="block py-2 hover:bg-white/20" onClick={() => setIsOpen(false)}>উপদেশের তালিকা</Link>
                </div>
            )}
        </nav>
    );
};

export default Header;