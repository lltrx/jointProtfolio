import React from "react";
import { motion } from "framer-motion";

const lineVariants = {
    initial: {
        pathLength: 0,
        pathOffset: 1,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        pathOffset: 0,
        opacity: 1,
        transition: {
            pathLength: {
                delay:6,
                duration: 2,
                ease: "easeInOut",
            },
            pathOffset: {
                delay: 6,
                duration: 2,
                ease: "easeInOut",
            },
            opacity: {
                delay: 6,
            },
        },
    },
}

const Email = ({ color }) => {
    return (
        <div className="w-[50px] flex flex-col justify-center fixed bottom-5 right-5">
            <motion.p className="text-center rotate-90 mb-48 text-[#b54400]" initial={{opacity:0}} animate={{opacity: 1, transition: {delay:8, duration: 2, ease: "easeInOut"}}}><a href="mailto:nathanhutchison02@gmail.com">nathanhutchison02@gmail.com</a></motion.p>


            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192 1000" xmlSpace="preserve" >
                <g>
                    <motion.path 
                        stroke={color} 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="7" 
                        variants={lineVariants}
                        initial="initial"
                        animate="animate"
                        d="M86 86v950"
                    />      
                </g>
            </svg>
        </div>
    )
}

export default Email