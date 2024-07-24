/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const sharedPathVariants = {
  initial: {
    pathLength: 0,
    fillOpacity: 0,
  },
  animate: {
    pathLength: 1,
    fillOpacity: 1,
    transition: {
      pathLength: {
        duration: 2,
        ease: "easeInOut",
      },
      fillOpacity: {
        delay: 2,
        duration: 1,
      },
    },
  },
};

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
};

const Loading = ({ color }) => {
  if (document.documentElement.classList.contains("noAnimation")) {
    return;
  } else {
    document.documentElement.classList.add("dark");

    return (
      <motion.div
        variants={loadingVariants}
        initial="initial"
        animate="animate"
        className="flex flex-col justify-center items-center fixed w-full h-full bg-zinc-900 z-50"
      >
        <svg
          className="w-[200px]"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Loading Icon" clipPath="url(#clip0_8_2)">
            <motion.path
              id="Hexagon"
              d="M8.69873 26.1547L50 2.3094L91.3013 26.1547L91.3013 73.8453L50 97.6906L8.69873 73.8453L8.69873 26.1547Z"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={sharedPathVariants}
              initial="initial"
              animate="animate"
            />
            <motion.path
              id="Letter"
              d="M0 0H29.4V9.6H20.7V37.5H8.7V9.6H0V0Z"
              stroke={color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={color}
              variants={sharedPathVariants}
              initial="initial"
              animate="animate"
              transform="translate(35 31) scale(1.02)"
            />
          </g>
          <defs>
            <clipPath id="clip0_8_2">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </motion.div>
    );
  }
};

export default Loading;
