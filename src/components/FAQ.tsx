"use client"
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-20 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                <div className="lg:w-1/3">
                    <p className="text-primary-accent font-bold tracking-widest uppercase text-sm mb-4 text-center lg:text-left">FAQ</p>
                    <SectionTitle>
                        <h2 className="mb-6 !leading-tight text-center lg:text-left">Frequently Asked Questions</h2>
                    </SectionTitle>
                    <p className="text-lg text-secondary mb-8 text-center lg:text-left">
                        Have more questions? We&apos;re here to help you get the most out of our AI technology.
                    </p>
                    <div className="text-center lg:text-left">
                        <a 
                            href="mailto:nizarhaider@gmail.com" 
                            className="inline-block text-xl font-bold text-primary-accent hover:underline decoration-2 underline-offset-4"
                        >
                            nizarhaider@gmail.com
                        </a>
                    </div>
                </div>

                <div className="lg:w-2/3 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-100 last:border-0">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full py-6 text-left focus:outline-none group">
                                            <span className={clsx("text-xl font-bold transition-colors duration-200", open ? "text-primary-accent" : "text-foreground group-hover:text-primary-accent")}>
                                                {faq.question}
                                            </span>
                                            <div className={clsx("flex-shrink-0 ml-4 p-1 rounded-full transition-colors duration-200", open ? "bg-primary-accent/10" : "bg-gray-50")}>
                                                {open ? <BiMinus className="w-6 h-6 text-primary-accent" /> : <BiPlus className="w-6 h-6 text-gray-400 group-hover:text-primary-accent" />}
                                            </div>
                                        </DisclosureButton>
                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-out"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <DisclosurePanel className="pb-6 text-lg text-secondary leading-relaxed">
                                                {faq.answer}
                                            </DisclosurePanel>
                                        </Transition>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

import clsx from "clsx";
export default FAQ;