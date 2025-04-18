import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Yes. All your data, assets, and usage history are protected with enterprise-grade encryption. We also offer secure storage for your generated images and project files.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Absolutely! Your account syncs seamlessly across desktop and mobile so you can manage projects anywhere, anytime.',
    },
    {
        question: 'Can I generate models in different poses or outfits?',
        answer: `Yes! ${siteDetails.siteName} allows you to customize poses, outfits, body types, and even facial expressions across a wide range of model templates.`,
    },
    {
        question: 'Do I need design experience to use this platform?',
        answer: 'No design background needed. The platform is built to be intuitive, with guided tools for customizing models, uploading garments, and exporting assets.',
    },
    {
        question: 'What if I need support or creative help?',
        answer: 'Our team is available 24/7 via chat or email. We also provide tutorials, templates, and live onboarding sessions to help you get the most from the platform.',
    }
];
