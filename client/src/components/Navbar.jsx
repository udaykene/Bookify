import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets.js';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';

const BookIcon = ()=> (
    <svg className='w-4 h-4 text-gray-700' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1v13H7a2 2 0 0 0-2 2zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/' },
        { name: 'About', path: '/' },
    ];


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const {openSignIn} = useClerk();
    const {user} = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const isScrolled = location.pathname !== '/' || scrollY > 10;

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-16 lg:px-20 xl:px-28 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>


                {/* Logo */}
                <Link to='/'>
                    <img src={assets.logo} alt="Logo" className={`h-8 md:h-9 transition-all ${isScrolled ? "invert opacity-80" : ""}`} />
                    {/* <h2 className={`font-playfair text-white text-3xl font-bold ${isScrolled && "text-gray-800"}`}>Bookify</h2> */}
                </Link> 

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 text-sm md:text-base ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button className={`border px-4 py-1.5 text-sm md:text-base font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all ml-2`} onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>
                </div> 

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <img src={assets.searchIcon} alt="search" className={`${isScrolled ? 'invert' : ''} h-6 md:h-7 transition-all duration-500`} />
                    
                    {user ? (
                        <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=> navigate('/my-bookings')}/>
                            </UserButton.MenuItems>
                        </UserButton>)
                    : 
                    (<button onClick={openSignIn} className={`px-6 md:px-8 py-2 rounded-full ml-2 md:ml-4 text-sm md:text-base transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)
                    }
                </div> 

                {/* Mobile Menu Button */}
                
                <div className="flex items-center gap-3 md:hidden">
                     {user && <UserButton>
                            <UserButton.MenuItems>
                                <UserButton.Action label="My Bookings" labelIcon={<BookIcon/>} onClick={()=> navigate('/my-bookings')}/>
                            </UserButton.MenuItems>
                        </UserButton>}
                   <button aria-label="Open menu" onClick={()=> setIsMenuOpen(!isMenuOpen)} className="p-1 focus:outline-none">
                       <img src={assets.menuIcon} alt="menu" className={`${isScrolled ? 'invert' : ''} h-6 transition-all`} />
                   </button>
                </div> 

                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-lg sm:text-xl flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-500 transform p-6 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                    <button className="absolute top-4 right-4 p-2" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                        <img src={assets.closeIcon} alt="close-menu" className="h-6" />
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="py-2 text-center w-full">
                            {link.name}
                        </a>
                    ))}

                    { user && <button className="border px-4 py-2 text-sm md:text-base font-light rounded-full cursor-pointer transition-all" onClick={()=> navigate('/owner')}>
                        Dashboard
                    </button>}

                    {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>

    );
}

export default Navbar;
