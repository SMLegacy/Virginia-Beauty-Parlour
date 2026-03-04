import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full pt-8 pb-4 px-6 md:px-12 z-50 relative"
        >
            <nav className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="hidden md:flex space-x-8">
                    {navLinks.slice(0, 2).map((link) => (
                        <Link key={link.name} to={link.path} className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">{link.name}</Link>
                    ))}
                </div>

                <Link to="/" className="flex items-center">
                    <img src="/logo.png" alt="Virginia Beauty" className="h-10 md:h-12 w-auto object-contain" />
                </Link>

                <div className="hidden md:flex space-x-8">
                    {navLinks.slice(2).map((link) => (
                        <Link key={link.name} to={link.path} className="text-xs font-medium tracking-[0.15em] uppercase hover:opacity-70 transition-opacity">{link.name}</Link>
                    ))}
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="p-2 -mr-2"
                        aria-label="Open Menu"
                    >
                        <Menu className="w-6 h-6 text-[#113E75]" />
                    </button>
                </div>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#DBEDF5] shadow-2xl z-[70] p-8 md:hidden flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 -mr-2 text-[#113E75]"
                                    aria-label="Close Menu"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-serif text-[#113E75] hover:opacity-70 transition-opacity"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-auto pt-10 border-t border-[#113E75]/10">
                                <p className="text-xs font-sans tracking-widest uppercase text-[#5C799A] mb-4">Visit Us</p>
                                <p className="text-sm text-[#113E75]/80">407 Anton Lembede St, Durban</p>
                                <p className="text-sm text-[#113E75]/80 mt-2">(+27) 64 554 7559</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
