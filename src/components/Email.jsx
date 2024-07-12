import React, { useState, useEffect } from "react";
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

const Email = () => {

    const [color, setColor] = useState('#b54400');

    useEffect(() => {
        const updateTheme = () => {
            const isDark = document.documentElement.classList.contains('dark');
            setColor(isDark ? '#b54400' : '#9A3412');
        };
    
        // Initial check
        updateTheme();
    
        // Use MutationObserver to watch for class changes on the <html> element
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.type === "attributes" && mutation.attributeName === "class") {
                    updateTheme();
                }
            });
        });
    
        observer.observe(document.documentElement, {
            attributes: true //configure it to listen to attribute changes
        });
    
        // Cleanup function to disconnect the observer
        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-[50px] flex flex-col justify-center fixed bottom-5 right-5">
            <motion.p style={{ color: color }} className={`text-center rotate-90 mb-48`} initial={{opacity:0}} animate={{opacity: 1, transition: {delay:8, duration: 2, ease: "easeInOut"}}}><a href="mailto:nathanhutchison02@gmail.com">nathanhutchison02@gmail.com</a></motion.p>


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