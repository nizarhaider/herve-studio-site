import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '../../public/images/logo_transparent.png';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-hero-background text-foreground py-10">
            <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo & Description */}
                <div>
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                        <h3 className="manrope text-xl font-semibold cursor-pointer">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-3.5 text-foreground-accent">
                        {footerDetails.subheading}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="text-foreground-accent">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text} className="mb-2">
                                <Link href={link.url} className="hover:text-foreground">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Legal Links */}
                    <h4 className="text-lg font-semibold mt-6 mb-4">Legal</h4>
                    <ul className="text-foreground-accent">
                        <li className="mb-2">
                            <Link href="/refund-policy" className="hover:text-foreground">
                                Refund Policy
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/privacy-policy" className="hover:text-foreground">
                                Privacy Policy
                            </Link>
                        </li>
                        <li className="mb-2">
                            <Link href="/terms-and-conditions" className="hover:text-foreground">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact & Socials */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

                    {footerDetails.email && (
                        <a
                            href={`mailto:${footerDetails.email}`}
                            className="block text-foreground-accent hover:text-foreground"
                        >
                            Email: {footerDetails.email}
                        </a>
                    )}

                    {footerDetails.telephone && (
                        <a
                            href={`tel:${footerDetails.telephone}`}
                            className="block text-foreground-accent hover:text-foreground"
                        >
                            Phone: {footerDetails.telephone}
                        </a>
                    )}

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-5 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    )}
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 md:text-center text-foreground-accent px-6">
                <p>
                    Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
