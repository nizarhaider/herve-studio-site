import {FiCamera, FiEye, FiFeather, FiLayers, FiLayout, FiMove, FiRefreshCw, FiSliders, FiUsers } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Garment Swap",
        description: "Easily visualize how your designs look on different models. Our AI makes it simple to swap garments across model types, poses, and scenes in seconds.",
        bullets: [
            {
                title: "Dynamic Outfit Switching",
                description: "Swap clothing on any model instantly to test combinations or update seasonal collections.",
                icon: <FiRefreshCw size={26} />
            },
            {
                title: "Style & Fit Preview",
                description: "Preview how each piece fits and flows across various body types and sizes.",
                icon: <FiEye size={26} />
            },
            {
                title: "Realistic Fabric Rendering",
                description: "See textures, shadows, and movement in ultra-realistic detail for any material.",
                icon: <FiFeather size={26} />
            }
        ],
        imageSrc: "/images/garment_swap.png"
    },
    {
        title: "Diverse Models",
        description: "Showcase your clothing on AI-generated models representing a rich variety of ethnicities, body types, and styles — all customizable to align with your brand’s values.",
        bullets: [
            {
                title: "Inclusive Representation",
                description: "Choose from ethnically diverse models spanning different ages, sizes, and genders for authentic brand storytelling.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Style Versatility",
                description: "Display your garments in various fashion categories — from streetwear to formalwear — on any model.",
                icon: <FiLayers size={26} />
            },
            {
                title: "Instant Customization",
                description: "Easily adjust skin tones, facial features, hairstyles, and more to reflect real-world diversity.",
                icon: <FiSliders size={26} />
            }
        ],
        imageSrc: "/images/models_v3_optimized/rani.webp"
    },    
    {
        title: "Dynamic Posing",
        description: "Bring your product showcases to life with AI models that support a wide range of realistic, customizable poses for every look and angle.",
        bullets: [
            {
                title: "Pose Variety",
                description: "Display your garments in multiple poses — standing, walking, seated, and more.",
                icon: <FiMove size={26} />
            },
            {
                title: "Angle Control",
                description: "Easily adjust viewing angles to highlight fit, cut, and garment movement.",
                icon: <FiCamera size={26} />
            },
            {
                title: "Consistent Styling",
                description: "Maintain consistent lighting and styling across different poses for professional-grade visuals.",
                icon: <FiLayout size={26} />
            }
        ],
        imageSrc: "/images/model_poses.png"
    }
]    