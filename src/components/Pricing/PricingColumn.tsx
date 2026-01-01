import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-3xl border border-gray-100 lg:max-w-full transition-all duration-300", { "shadow-2xl scale-105 z-10 border-primary-accent/20": highlight, "hover:shadow-xl": !highlight })}>
            <div className="p-8 border-b border-gray-50">
                <h3 className="text-2xl font-bold mb-4">{name}</h3>
                <div className="mb-8">
                    <span className={clsx("text-4xl md:text-5xl font-extrabold tracking-tight", { "text-primary-accent": highlight })}>
                        {typeof price === 'number' ? `${price.toLocaleString()} LKR` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-lg font-medium text-secondary ml-2">/month</span>}
                </div>
                <button className={clsx("w-full py-4 px-6 rounded-full font-bold transition-all duration-300 shadow-lg", { 
                    "bg-primary-accent text-black hover:bg-primary-accent/90 hover:shadow-primary-accent/20": highlight, 
                    "bg-gray-100 text-foreground hover:bg-gray-200": !highlight 
                })}>
                    Get Started
                </button>
            </div>
            <div className="p-8">
                <p className="font-bold text-sm uppercase tracking-wider text-secondary mb-6">What&apos;s included:</p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <BsFillCheckCircleFill className={clsx("h-5 w-5 mr-3 mt-1 flex-shrink-0", { "text-primary-accent": highlight, "text-gray-400": !highlight })} />
                            <span className="text-foreground/80 leading-snug">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PricingColumn