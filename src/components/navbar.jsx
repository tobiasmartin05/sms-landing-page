import { useState } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-[#002651] text-white z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="./logo-sps-1.svg" alt="Logo" className="h-14 md:h-16 w-auto" />
                    <span className="font-oswald font-bold tracking-wider text-sm md:text-base">
                        SUKSES PACKAGING SOLUTION
                    </span>
                </div>

                {/* Desktop Menu */}
                <nav className="font-roboto font-semibold hidden md:flex items-center space-x-6 text-sm md:text-base">
                    <a href="#hero" className="text-white hover:text-orange-400 transition">Home</a>
                    <a href="#product" className="text-white hover:text-orange-400 transition">Product</a>
                    <a href="#aboutus" className="text-white hover:text-orange-400 transition">About Us</a>
                    <a href="#contact" className="text-white hover:text-orange-400 transition">Contact</a>
                </nav>

                {/* Mobile Toggle */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="font-roboto font-semibold md:hidden px-4 pb-4 flex flex-col space-y-2 bg-[#002651]">
                    <a href="#hero" className="text-white hover:text-orange-400">Home</a>
                    <a href="#product" className="text-white hover:text-orange-400">Product</a>
                    <a href="#aboutus" className="text-white hover:text-orange-400">About Us</a>
                    <a href="#testimonials" className="text-white hover:text-orange-400">Testimonials</a>
                    <a href="#contact" className="text-white hover:text-orange-400">Contact</a>
                </div>
            )}
        </header>
    );
}
