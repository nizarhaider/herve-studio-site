'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import logo from '../../public/images/logo_resized.png';
import Image from 'next/image';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';
import clsx from 'clsx';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header 
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <Container>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                        <span className="manrope text-2xl font-extrabold text-foreground tracking-tight">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-10">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-lg font-medium text-foreground hover:text-primary-accent transition-colors duration-200"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href="https://app.hervestudio.lk" 
                                className="px-8 py-3 text-lg font-bold text-black bg-primary-accent rounded-full hover:bg-primary-accent/90 transition-all duration-300 hover:shadow-primary-accent/20"
                            >
                                Try Now
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-foreground focus:outline-none p-2 rounded-xl bg-gray-50"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-8 w-8" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-8 w-8" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-10"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-10"
            >
                <div id="mobile-menu" className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-50 overflow-hidden">
                    <ul className="flex flex-col space-y-2 p-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-xl font-semibold text-foreground hover:text-primary-accent block py-3 px-4 rounded-xl hover:bg-gray-50 transition-all"
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <Link 
                                href="https://app.hervestudio.lk" 
                                className="w-full text-center px-8 py-4 text-xl font-bold text-black bg-primary-accent rounded-xl block shadow-lg"
                                onClick={toggleMenu}
                            >
                                Try Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;

