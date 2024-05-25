// import { useTranslation } from "react-i18next";
// import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";

export default function NavBar() {
    const [isToggled, setToggle] = useState(false);
  
    const handleMouseEnter = (e) => {
      const link = e.target;
      const { left, width } = link.getBoundingClientRect();
      const mouseX = e.clientX;
      const underline = link.querySelector("span");
  
      if (mouseX < left + width / 2) {
        underline.style.left = "0";
        underline.style.right = "auto";
        underline.style.transform = "scaleX(0)";
        underline.style.transformOrigin = "left";
      } else {
        underline.style.left = "auto";
        underline.style.right = "0";
        underline.style.transform = "scaleX(0)";
        underline.style.transformOrigin = "right";
      }
  
      setTimeout(() => {
        underline.style.transform = "scaleX(1)";
        underline.style.width = "100%"; 
      }, 100);
    };
  
    const handleMouseLeave = (e) => {
      const link = e.target;
      const underline = link.querySelector("span");
      underline.style.transform = "scaleX(0)";
      setTimeout(() => {
        underline.style.width = "0";
      }
        , 100);
    };
  
    return (
      <motion.header
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 5,
            opacity: {
              delay: 5,
            },
          },
        }}
        className="sticky top-0 w-full flex items-center justify-between z-20 px-8 py-4 shadow-lg"
      >
        <Logo isToggled={isToggled} />
        <div className="flex space-x-4 items-center justify-center">
          <a
            href="#home"
            className="text-orange-900 font-display hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            1.Home
            <span className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="#about"
            className="text-orange-900 font-display hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            2.About
            <span className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="#timeline"
            className="text-orange-900 font-display hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            3.Timeline
            <span className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="#experience"
            className="text-orange-900 font-display hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            4.Experience
            <span className="absolute bottom-0 h-0.5 bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <ThemeToggle isToggled={isToggled} setToggle={setToggle} />
        </div>
      </motion.header>
    );
  }