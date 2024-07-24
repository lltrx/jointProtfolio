/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const pathVariants = {
    initial: {
        pathLength: 0,
    },
    animate: {
        pathLength: 1,
        transition: {
            duration: 1.5,
            ease: "easeInOut",
        },
    },
}

const letterVariants = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                delay: 0.5,
                duration: 2,
                ease: "easeInOut",
            },
            opacity: {
                delay: 0.5,
            },
        },
    },
}

const loadingVariants = {
    initial: {
        opacity: 1,
    },
    animate: {
        opacity: 0,
        transition: {
            delay: 3,
            duration: 1,
        },
    },
}

const Loading = ({ color }) => {  

    if (document.documentElement.classList.contains('noAnimation')) {
        return
    }

    else {
        document.documentElement.classList.add("dark")

        return (
            <motion.div 
                variants={loadingVariants} 
                initial = "initial"
                animate = "animate"
                className="flex flex-col justify-center items-center fixed w-full h-full bg-zinc-900 z-50"
            >
                <svg className='w-[200px]' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Loading Icon" clipPath="url(#clip0_8_2)">
                        <motion.path 
                            id="Hexagon" 
                            d="M8.69873 26.1547L50 2.3094L91.3013 26.1547L91.3013 73.8453L50 97.6906L8.69873 73.8453L8.69873 26.1547Z" 
                            stroke={color} 
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            variants={pathVariants}
                            initial="initial"
                            animate="animate"
                        />
                        <motion.path 
                            id="Letter" 

                            // PATH FOR THE LETTER "T"
                            // d="M 0 0 L 25.8 0 L 25.8 1.08 L 13.5 1.08 L 13.5 42.24 L 12.3 42.24 L 12.3 1.08 L 0 1.08 L 0 0 Z"

                            // PATH FOR THE LETTER "N"
                            // d="M 25.1 0 L 25.1 35.05 L 22.85 35.05 L 2.25 3.65 L 2.25 35.05 L 0 35.05 L 0 0 L 2.25 0 L 22.85 31.3 L 22.85 0 L 25.1 0 Z" 
                            
                            d="M 25.1 0 L 25.1 35.05 L 22.85 35.05 L 2.25 3.65 L 2.25 35.05 L 0 35.05 L 0 0 L 2.25 0 L 22.85 31.3 L 22.85 0 L 25.1 0 Z" 
                            stroke={color}
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="4"
                            variants={letterVariants}
                            initial="initial"
                            animate="animate"
                            transform="translate(38, 32)"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_8_2">
                            <rect width="100" height="100" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </motion.div>
    
        );
    }
}

export default Loading