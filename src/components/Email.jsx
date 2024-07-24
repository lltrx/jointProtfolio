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
        delay: 6,
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
};

const Email = () => {
  const [color, setColor] = useState("#3b88ed");

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setColor(isDark ? "#1a5cb0" : "#3b88ed");
    };

    // Initial check
    updateTheme();

    // Use MutationObserver to watch for class changes on the <html> element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          updateTheme();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true, //configure it to listen to attribute changes
    });

    // Cleanup function to disconnect the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-[50px] hidden md:flex font-bold flex-col justify-center fixed bottom-5 right-5 z-20">
      {document.documentElement.classList.contains("noAnimation") ? (
        <div>
          <p
            style={{ color: color }}
            className={`text-center rotate-90 mb-60 tracking-wider hover:scale-105 transition duration-300 ease-in-out`}
          >
            <a href="mailto:turkifaisal.dev@gmail.com">
              turkifaisal.dev@gmail.com
            </a>
          </p>

          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 192 1000"
            xmlSpace="preserve"
          >
            <g>
              <path
                stroke={color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="7"
                d="M96 96v950"
              />
            </g>
          </svg>
        </div>
      ) : (
        <div>
          <motion.p
            style={{ color: color }}
            className={`text-center rotate-90 mb-60 tracking-wider hover:scale-105 transition duration-300 ease-in-out`}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 8, duration: 2, ease: "easeInOut" },
            }}
          >
            <a href="mailto:turkifaisal.dev@gmail.com">
              turkifaisal.dev@gmail.com
            </a>
          </motion.p>

          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 192 1000"
            xmlSpace="preserve"
          >
            <g>
              <motion.path
                stroke={color}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="7"
                variants={lineVariants}
                initial="initial"
                animate="animate"
                d="M96 96v950"
              />
            </g>
          </svg>
        </div>
      )}
    </div>
  );
};

export default Email;
