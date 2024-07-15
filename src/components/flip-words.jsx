/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import{ useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {cn} from "../utils/cn";

export const FlipWords = ({ words, duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  let interval;

  useEffect(() => {
    startAnimation();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const startAnimation = () => {
    let i = 0;
    interval = setInterval(() => {
      i++;
      if (i === words.length) {
        i = 0;
      }
      const word = words[i];
      setCurrentWord(word);
    }, duration);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 ml-4",
          className
        )}
        key={currentWord}
      >
        {currentWord.split("").map((letter, index) => (
          <motion.span
            key={currentWord + index}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              delay: index * 0.15,
              duration: 0.4,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
