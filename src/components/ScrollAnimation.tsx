import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const ScrollAnimation = ({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: ScrollAnimationProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = {
        up: { y: 50, x: 0 },
        down: { y: -50, x: 0 },
        left: { y: 0, x: 50 },
        right: { y: 0, x: -50 },
    };

    return (
        <motion.div
            ref={ref}
            initial={{
                opacity: 0,
                ...directions[direction],
            }}
            animate={
                isInView
                    ? {
                        opacity: 1,
                        y: 0,
                        x: 0,
                    }
                    : {}
            }
            transition={{
                duration: 0.7,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
