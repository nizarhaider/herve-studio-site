import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Empowering fashion brands with cutting-edge AI solutions for design and consumer engagement.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "Testimonials",
            url: "#testimonials"
        }
    ],
    email: 'nizarhaider@gmail.com',
    telephone: '+94 074 253-0704',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // youtube: 'https://youtube.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/hervestudio.lk/',
    }
}