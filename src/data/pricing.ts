import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 4999,
        features: [
            'Access to 2 AI humans',
            'Up to 30 rendered images/month',
            'Basic outfit customization',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: 9999,
        features: [
            'Access to 8 AI humans',
            'Up to 100 rendered images/month',
            'Advanced outfit and pose customization',
            'Priority email & chat support',
            'High-res exports (4K)',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'Unlimited AI humans access',
            'Unlimited image renders',
            'Custom AI human creation (on request)',
            'Dedicated account manager',
            'API access & workflow integration',
            '24/7 support & consulting',
        ],
    },
];
