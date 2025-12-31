import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="flex items-start gap-4"
            variants={childVariants}
        >
            <div className="flex-shrink-0 mt-1 text-primary-accent bg-primary-accent/10 p-2 rounded-lg">
                {icon}
            </div>
            <div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                    {title}
                </h4>
                <p className="text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet