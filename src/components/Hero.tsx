import React from 'react';
import Image from 'next/image';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl w-full relative">
                <div className="text-center md:text-left md:max-w-xl">
                    <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground">
                        {heroDetails.heading}
                    </h1>
                    <p className="mt-4 text-foreground">
                        {heroDetails.subheading}
                    </p>
                </div>

                <div className="relative">
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={600}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="model showcase"
                        className="z-10"
                    />
                    <p className="absolute text-black -top-0.5 transform translate-x-20 translate-y-1/4 text-xl font-semibold animate-pulse">
                        Hey, I`m Kavindi 👋
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
