/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

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

const logoVariants1 = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                delay:14,
                duration: 6,
                ease: "easeInOut",
            },
            opacity: {
                delay: 14,
            },
        },
    },
}

const logoVariants2 = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                delay: 11,
                duration: 3,
                ease: "easeInOut",
            },
            opacity: {
                delay: 11,
            },
        },
    },
}

const logoVariants3 = {
    initial: {
        pathLength: 0,
        opacity: 0,
    },
    animate: {
        pathLength: 1,
        opacity: 1,
        transition: {
            pathLength: {
                delay: 8,
                duration: 3,
                ease: "easeInOut",
            },
            opacity: {
                delay: 8,
            },
        },
    },
}

const Socials = ({ color }) => {
    return (

        <div className="w-[50px] flex flex-col fixed bottom-5 left-5 space-y-3">
            <svg 
                className="w-[50px] h-[50px] hover:scale-110 transition duration-300 ease-in-out"
                fill="none"  
                viewBox="0 0 256 256" 
                id="Flat" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"> 
                    <motion.path 
                        d="M128,84a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,164ZM172,32H84A52.059,52.059,0,0,0,32,84v88a52.059,52.059,0,0,0,52,52h88a52.059,52.059,0,0,0,52-52V84A52.059,52.059,0,0,0,172,32Zm44,140a44.04978,44.04978,0,0,1-44,44H84a44.04978,44.04978,0,0,1-44-44V84A44.04978,44.04978,0,0,1,84,40h88a44.04978,44.04978,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8.00917,8.00917,0,0,1,188,76Z"
                        stroke={color}
                        strokeWidth={8}
                        variants={logoVariants1}
                        initial="initial"
                        animate="animate"
                    />
                </g>
            </svg>
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                <motion.rect 
                    width="132" 
                    height="132" 
                    x="30" 
                    y="30" 
                    stroke={color} 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="10" 
                    variants={logoVariants2}
                    initial="initial"
                    animate="animate"
                    rx="16"
                />
                <motion.path 
                    stroke={color} 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="10" 
                    variants={logoVariants2}
                    initial="initial"
                    animate="animate"
                    d="M66 86v44"
                />

                <motion.circle 
                    cx="66" 
                    cy="64" 
                    r="8" 
                    fill={color}
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    variants={logoVariants2}
                    initial="initial"
                    animate="animate"
                />
                <motion.path
                    stroke={color} 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="10" 
                    variants={logoVariants2}
                    initial="initial"
                    animate="animate"
                    d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"
                />
            </svg>
            <svg viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg">
                <motion.path
                    fill="none"
                    stroke={color} 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    variants={logoVariants3}
                    initial="initial"
                    animate="animate"
                    d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"
                />
            </svg>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 192 500" xmlSpace="preserve">
                <g>
                    <motion.path 
                        stroke={color} 
                        stroke-linecap="round" 
                        stroke-linejoin="round" 
                        stroke-width="7" 
                        variants={lineVariants}
                        initial="initial"
                        animate="animate"
                        d="M96 86v450"
                    />      
                </g>
            </svg>

        </div>

    
    )
}

export default Socials


