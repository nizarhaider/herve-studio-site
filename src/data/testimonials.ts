import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Daniel Kim',
        role: 'Creative Director at Nova Apparel',
        message: `${siteDetails.siteName} has completely changed how we do lookbooks. The AI models are stunning, diverse, and super easy to customize. We've cut down production time by over 70%.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Jane Doe',
        role: 'CTO at ThreadsTech',
        message: `As a CTO, I'm impressed by ${siteDetails.siteName}'s fast rendering pipeline and API flexibility. We were able to integrate AI model generation right into our product design workflow.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Emily Johnson',
        role: 'Head of Marketing at Verve Streetwear',
        message: `${siteDetails.siteName} gives us the freedom to test visual campaigns with diverse models at a fraction of traditional costs. It’s like having a virtual modeling agency on call.`,
        avatar: '/images/testimonial-3.webp',
    },
];
