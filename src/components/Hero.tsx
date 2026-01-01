import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-20 pt-32 md:pt-48 px-5 overflow-hidden"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full bg-hero-background" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-7xl w-full relative">
                <div className="text-center md:text-left md:max-w-2xl">
                    <h1 className="text-4xl md:text-6xl md:leading-tight font-extrabold text-foreground mb-6">
                        {heroDetails.heading}
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/80 mb-10 leading-relaxed">
                        {heroDetails.subheading}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                        <a
                            href="https://app.hervestudio.lk" 
                            className="px-10 py-4 text-lg font-bold text-white bg-black rounded-full hover:bg-primary-accent/90 transition-all duration-300 shadow-lg hover:shadow-primary-accent/20"
                        >
                            Try Now
                        </a>
                        <a
                            href="#features"
                            className="px-10 py-4 text-lg font-semibold text-foreground bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="relative mt-10 md:mt-0">
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                        <Image
                            src={heroDetails.centerImageSrc}
                            width={600}
                            height={750}
                            quality={100}
                            sizes="(max-width: 768px) 100vw, 500px"
                            priority={true}
                            unoptimized={true}
                            alt="AI model showcase"
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:block animate-bounce-slow">
                        <p className="text-foreground font-bold flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            AI Human: Ella
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

