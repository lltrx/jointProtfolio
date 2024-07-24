import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import work from "../assets/work.json";
import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from "../components/lampSmall";

export default function Worked() {
  const [selectedJob, setSelectedJob] = useState(1);
  const selectedJobDetails = work.find((job) => job.id === selectedJob);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const [dark, setDark] = useState(true);

  useEffect(() => {
    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setDark(isDark);
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
    <div className="flex flex-col w-full items-center lg:pt-20 lg:p-20 lg:mb-20  space-y-4 h-fit overflow-x-hidden">
      {dark ? (
        <div className="pt-60 lg:pt-0 w-full">
          <div className="flex flex-col items-center w-full">
            <LampContainer className={"hidden lg:flex w-full justify-center"}>
              <h1 className="mt-8 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0]  py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                Work Experience
              </h1>
            </LampContainer>
            <div className="hidden lg:flex flex-col lg:flex-row w-5/6 lg:w-2/3 max-w-[860px]">
              <div className="relative lg:w-1/3">
                <div className="flex lg:flex-col overflow-x-auto text-[#3b88ed] dark:text-[#2779e3] text-opacity-75 dark:text-opacity-100 whitespace-nowrap pb-6 lg:pb-0">
                  {" "}
                  {work.map((job) => (
                    <div
                      key={job.id}
                      className={`px-4 lg:px-5 py-2 border-b-2 lg:border-l-2 lg:border-b-0 ${job.id === selectedJob ? "border-[#2779e3]" : "border-[#052145]"}`}
                    >
                      <button
                        className="cursor-pointer"
                        onClick={() => setSelectedJob(job.id)}
                      >
                        {job.company}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="absolute lg:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-blue-50 dark:to-zinc-900"></div>
                <div className="absolute lg:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-blue-50 dark:to-zinc-900"></div>
              </div>
              <div className="lg:w-2/3">
                <AnimatePresence mode="wait">
                  {selectedJobDetails && (
                    <motion.div
                      key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={variants}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col text-slate-900 dark:text-slate-200"
                    >
                      <div className="flex text-lg lg:text-xl mb-2">
                        <h2>{selectedJobDetails.role}</h2>
                        <h1 className="ml-2 text-[#2779e3]">
                          <a href={selectedJobDetails.link}>
                            @ {selectedJobDetails.company}
                          </a>
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-1 mb-5">
                        <p>{selectedJobDetails.dates}</p>
                        <p>{selectedJobDetails.location}</p>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {selectedJobDetails.description.bullets.map(
                          (bullet, index) => (
                            <div key={index} className="flex space-x-3">
                              <p className="text-[#2779e3] text-sm">⬡ </p>
                              <p key={index} className="text-sm lg:text-base">
                                {bullet}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <LampContainerSmall
              className={"flex lg:hidden w-full justify-center"}
            >
              <h1 className="mt-8 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                Work Experience
              </h1>
            </LampContainerSmall>
            <div className="flex lg:hidden flex-col lg:w-2/3 max-w-[860px] lg:flex-row w-5/6 md:w-2/3  -translate-y-28">
              <div className="relative lg:w-1/3">
                <div className="flex lg:flex-col overflow-x-auto text-[#3b88ed] dark:text-[#2779e3] text-opacity-75 dark:text-opacity-100 whitespace-nowrap pb-6 lg:pb-0">
                  {" "}
                  {work.map((job) => (
                    <div
                      key={job.id}
                      className={`px-4 lg:px-5 py-2 border-b-2 lg:border-l-2 lg:border-b-0 ${job.id === selectedJob ? "border-[#2779e3]" : "border-[#052145]"}`}
                    >
                      <button
                        className="cursor-pointer"
                        onClick={() => setSelectedJob(job.id)}
                      >
                        {job.company}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="absolute lg:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-white dark:to-zinc-900"></div>
                <div className="absolute lg:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-white dark:to-zinc-900"></div>
              </div>
              <div className="lg:w-2/3">
                <AnimatePresence mode="wait">
                  {selectedJobDetails && (
                    <motion.div
                      key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={variants}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col text-slate-900 dark:text-slate-200"
                    >
                      <div className="flex text-lg lg:text-xl mb-2">
                        <h2>{selectedJobDetails.role}</h2>
                        <h1 className="ml-2 text-[#2779e3]">
                          <a href={selectedJobDetails.link}>
                            @ {selectedJobDetails.company}
                          </a>
                        </h1>
                      </div>
                      <div className="flex flex-col space-y-1 mb-5">
                        <p>{selectedJobDetails.dates}</p>
                        <p>{selectedJobDetails.location}</p>
                      </div>
                      <div className="flex flex-col space-y-4">
                        {selectedJobDetails.description.bullets.map(
                          (bullet, index) => (
                            <div key={index} className="flex space-x-3">
                              <p className="text-[#2779e3] text-sm">⬡ </p>
                              <p key={index} className="text-sm lg:text-base">
                                {bullet}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-full items-center mt-96 lg:mt-48 space-y-4 h-fit overflow-x-hidden">
          <h1 className="mt-28 md:mt-20 lg:mt-8 pt-2 mb-8 lg:mb-16 font-bold bg-gradient-to-br from-[#2779e3] to-[#1a5cb0] py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
            Work Experience
          </h1>
          <div className="flex lg:hidden flex-col lg:w-2/3 max-w-[860px] lg:flex-row w-5/6 md:w-2/3">
            <div className="relative lg:w-1/3">
              <div className="flex lg:flex-col overflow-x-auto text-[#3b88ed] dark:text-[#2779e3] text-opacity-75 dark:text-opacity-100 whitespace-nowrap pb-6 lg:pb-0">
                {" "}
                {work.map((job) => (
                  <div
                    key={job.id}
                    className={`px-4 lg:px-5 py-2 border-b-2 lg:border-l-2 lg:border-b-0 ${job.id === selectedJob ? "border-[#2779e3]" : "border-[#052145]"}`}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => setSelectedJob(job.id)}
                    >
                      {job.company}
                    </button>
                  </div>
                ))}
              </div>
              <div className="absolute lg:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-white dark:to-zinc-900 shadow-sm"></div>
              <div className="absolute lg:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-white dark:to-zinc-900 shadow-sm"></div>
            </div>
            <div className="w-full lg:w-2/3">
              <AnimatePresence mode="wait">
                {selectedJobDetails && (
                  <motion.div
                    key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col text-slate-900 dark:text-slate-200"
                  >
                    <div className="flex text-lg lg:text-xl mb-2">
                      <h2>{selectedJobDetails.role}</h2>
                      <h1 className="ml-2 text-[#2779e3]">
                        <a href={selectedJobDetails.link}>
                          @ {selectedJobDetails.company}
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col space-y-1 mb-5">
                      <p>{selectedJobDetails.dates}</p>
                      <p>{selectedJobDetails.location}</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      {selectedJobDetails.description.bullets.map(
                        (bullet, index) => (
                          <div key={index} className="flex space-x-3">
                            <p className="text-[#2779e3] text-sm">⬡ </p>
                            <p key={index} className="text-sm lg:text-base">
                              {bullet}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="hidden lg:flex flex-col lg:flex-row w-5/6 lg:w-2/3 max-w-[860px]">
            <div className="relative lg:w-1/3">
              <div className="flex lg:flex-col overflow-x-auto text-[#3b88ed] dark:text-[#2779e3] text-opacity-75 dark:text-opacity-100 whitespace-nowrap pb-6 lg:pb-0">
                {" "}
                {work.map((job) => (
                  <div
                    key={job.id}
                    className={`px-4 lg:px-5 py-2 border-b-2 lg:border-l-2 lg:border-b-0 ${job.id === selectedJob ? "dark:border-[#2779e3] border-[#052145]" : "dark:border-[#052145] border-[#7ca8e2]"}`}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => setSelectedJob(job.id)}
                    >
                      {job.company}
                    </button>
                  </div>
                ))}
              </div>
              <div className="absolute lg:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-blue-50 dark:to-zinc-900"></div>
              <div className="absolute lg:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-blue-50 dark:to-zinc-900"></div>
            </div>
            <div className="lg:w-2/3">
              <AnimatePresence mode="wait">
                {selectedJobDetails && (
                  <motion.div
                    key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col text-slate-900 dark:text-slate-200"
                  >
                    <div className="flex text-lg lg:text-xl mb-2">
                      <h2>{selectedJobDetails.role}</h2>
                      <h1 className="ml-2 text-[#2779e3]">
                        <a href={selectedJobDetails.link}>
                          @ {selectedJobDetails.company}
                        </a>
                      </h1>
                    </div>
                    <div className="flex flex-col space-y-1 mb-5">
                      <p>{selectedJobDetails.dates}</p>
                      <p>{selectedJobDetails.location}</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                      {selectedJobDetails.description.bullets.map(
                        (bullet, index) => (
                          <div key={index} className="flex space-x-3">
                            <p className="text-[#2779e3] text-sm">⬡ </p>
                            <p key={index} className="text-sm lg:text-base">
                              {bullet}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
