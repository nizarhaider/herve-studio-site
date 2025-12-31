import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo_transparent.png';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-100 text-foreground py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20">
                {/* Logo & Description */}
                <div className="md:col-span-1">
                    <Link href="/" className="flex items-center gap-3 mb-6">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <h3 className="manrope text-2xl font-extrabold tracking-tight">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="text-lg text-secondary leading-relaxed mb-8">
                        {footerDetails.subheading}
                    </p>
                    <div className="flex items-center gap-4">
                        {footerDetails.socials && Object.keys(footerDetails.socials).map(platformName => {
                            if (platformName && footerDetails.socials[platformName]) {
                                return (
                                    <Link
                                        href={footerDetails.socials[platformName]}
                                        key={platformName}
                                        aria-label={platformName}
                                        className="p-3 bg-gray-50 rounded-xl text-secondary hover:text-primary-accent hover:bg-primary-accent/10 transition-all duration-300"
                                    >
                                        {getPlatformIconByName(platformName)}
                                    </Link>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-secondary">Product</h4>
                    <ul className="space-y-4">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-secondary">Legal</h4>
                    <ul className="space-y-4">
                        <li>
                            <Link href="/refund-policy" className="text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200">
                                Refund Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy-policy" className="text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-lg font-bold mb-6 uppercase tracking-wider text-secondary">Contact Us</h4>
                    <div className="space-y-4">
                        {footerDetails.email && (
                            <a
                                href={`mailto:${footerDetails.email}`}
                                className="block text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200"
                            >
                                {footerDetails.email}
                            </a>
                        )}
                        {footerDetails.telephone && (
                            <a
                                href={`tel:${footerDetails.telephone}`}
                                className="block text-lg text-foreground/80 hover:text-primary-accent transition-colors duration-200"
                            >
                                {footerDetails.telephone}
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24 pt-8 border-t border-gray-50 text-center">
                <p className="text-secondary">
                    &copy; {new Date().getFullYear()} {siteDetails.siteName}. Designed for fashion brands.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

