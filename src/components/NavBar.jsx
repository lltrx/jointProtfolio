// import { useTranslation } from "react-i18next";
// import LanguageSelector from "./language-selector";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import Logo from "./logo";
import { motion } from "framer-motion";

export default function NavBar() {
  const [isToggled, setToggle] = useState(true);

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
    }, 100);
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
      className="sticky top-0 w-full flex items-center justify-between z-20 px-4 h-20 shadow-md backdrop-filter backdrop-blur-sm bg-blue-50/50 dark:bg-zinc-900/50"
    >
      <Logo isToggled={isToggled} />
      <div className="flex space-x-4 items-center justify-center">
        <div className="hidden md:flex space-x-4 items-center justify-center">
          <a
            href="/#home"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            1.Home
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#about"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            2.About
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#timeline"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            3.Timeline
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
          <a
            href="/#experience"
            className="text-orange-700 font-display font-bold hover:text-orange-500 transition duration-300 ease-in-out relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            4.Experience
            <span className="absolute bottom-0 h-[1px] bg-orange-500 transition-all duration-300 ease-in-out pointer-events-none"></span>
          </a>
        </div>
        <ThemeToggle isToggled={isToggled} setToggle={setToggle} />

        <a
          href="/myCV.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-zinc-600 bg-[linear-gradient(110deg,#09090b,45%,#333,55%,#09090b)] bg-[length:200%_100%] px-6 font-medium text-zinc-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          My CV
        </a>
      </div>
    </motion.header>
  );
}
