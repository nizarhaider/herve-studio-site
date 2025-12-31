"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section py-16 lg:py-24">
            <motion.div
                className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("w-full lg:w-1/2 max-w-2xl", { "lg:order-2": imageAtRight })}
                >
                    <div className="text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="mb-6">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="text-lg text-secondary leading-relaxed mb-8">
                                {description}
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>

                        <motion.div variants={childVariants} className="mt-10">
                            <a 
                                href="#" 
                                className="inline-flex items-center text-primary-accent font-bold text-lg hover:underline transition-all duration-300"
                            >
                                Learn more 
                                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className={clsx("w-full lg:w-1/2 flex justify-center", { "lg:order-1": imageAtRight })}>
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary-accent/5 rounded-3xl transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={500}
                                height={600}
                                quality={100}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection;
