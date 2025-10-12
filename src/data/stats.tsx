import { BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";
import { IoMdPerson } from "react-icons/io";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "50+",
        icon: <IoMdPerson size={34} className="text-pink-500" />,
        description: "Ai Humans curated for your fashion brand needs, ensuring a perfect fit for your vision."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Perfect ratings from leading fashion brands, showcasing our exceptional results."
    },
    {
        title: "TBD+ ",
        icon: <PiGlobeFill size={34} className="text-blue-600" />,
        description: "Global fashion brands using our AI models to revolutionize the industry."
    }
];
