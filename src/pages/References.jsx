import { InfiniteMovingCards } from "../components/infinite-moving-cards";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from "../components/lampSmall";
// CHANGED THIS SLIGHTLY SO THE REFERENCES ARE IN A JSON INSTEAD OF DECLARED IN THE FUNCTION - WILL MAKE BUILDING A BACKEND EASIER IF WE NEED IT (I THINK!)
import references from "../assets/references.json";

export default function References() {

  const [dark, setDark] = useState(true);

  useEffect(() => {
      const updateTheme = () => {
          const isDark = document.documentElement.classList.contains('dark');
          setDark(isDark);
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
    <div className="pb-12 md:mt-20 w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-2">
        {
          dark ? (
            <div className="w-full md:mb-20">
              <LampContainer className={"hidden lg:flex w-full justify-center"}>
                <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                  References
                </h1>
                <p className="text-zinc-400 animate-bounce-5px">
                  Hover over the carousel to stop
                </p>
              </LampContainer>
              <LampContainerSmall className={"flex lg:hidden w-full justify-center"}>
                <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                  References
                </h1>
                <p className="text-zinc-400 animate-bounce-5px">
                  Click on the carousel to play/pause
                </p>
              </LampContainerSmall>
            </div>
          ) : (
            <div className="flex flex-col items-center w-full mt-72 md:mt-64 lg:mt-36 pt-10 mb-20 md:mb-40 lg:mb-20">
              <h1 className="font-bold bg-gradient-to-br from-orange-900 to-orange-500 pt-6 pb-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                References
              </h1>
              <p className="hidden lg:flex text-zinc-500 animate-bounce-5px">
                Hover over the carousel to stop
              </p>
              <p className="flex lg:hidden text-zinc-500 animate-bounce-5px">
                Click on the carousel to play/pause
              </p>
            </div>
          )
        }
        
        <div className="relative max-w-full md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl mx-auto dark:-translate-y-20 pb-20 dark:pb-0">
          {/* Left fade effect */}
          <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-[#eff6ff] dark:from-[#18181b] to-transparent z-10" />
          {/* Right fade effect */}
          <div className="absolute top-0 right-0 w-[10%] h-full bg-gradient-to-l from-[#eff6ff] dark:from-[#18181b] to-transparent z-10" />
          <motion.div
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <InfiniteMovingCards
              items={references}
              speed="slow"
              direction="left"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
