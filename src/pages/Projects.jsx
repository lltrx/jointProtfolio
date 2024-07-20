import React, { useState, useEffect, useId } from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import projects from "../assets/projects.json";
import { NavLink, Link } from "react-router-dom";
import LanguagesLogos from "../assets/languagesLogos";
import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from "../components/lampSmall";
import { ExpandableCard } from "../components/expandable-cards";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const featuredProjects = projects
    .filter((project) => project.featured === true)
    .slice(0, 3);

  const [dark, setDark] = useState(true);
  const [activeCard, setActiveCard] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const id = useId();

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="h-[1350px] lg:h-[1200px] md:pt-20 w-full mb-28 md:mb-72 lg:mb-0">

    {/* PROJECT HEADING INCLUDING LAMP COMPONENT LOGIC */}

      {dark ? (
        <div>
          <LampContainer className={"hidden lg:flex w-full justify-center"}>
            <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
              Projects
            </h1>
            <NavLink
              to={`/archive`}
              className={`w-full flex justify-center space-x-1 text-slate-200 animate-bounce-5px`}
            >
              <h1 className="hover:underline underline-offset-2">
                View the archive here
              </h1>
              <h1>{` >`}</h1>
            </NavLink>
          </LampContainer>
          <LampContainerSmall
            className={"flex lg:hidden w-full justify-center"}
          >
            <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
              Projects
            </h1>
            <NavLink
              to={`/archive`}
              className={`w-full flex justify-center space-x-1 text-slate-200 animate-bounce-5px`}
            >
              <h1 className="hover:underline underline-offset-2">
                View the archive here
              </h1>
              <h1>{` >`}</h1>
            </NavLink>
          </LampContainerSmall>
        </div>
      ) : (
        <div className="mt-64 md:mt-72 lg:mt-44 mb-40 lg:mb-20 xl:mb-20">
          <h1 className="pt-24 md:pt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
            Projects
          </h1>
          <NavLink
            to={`/archive`}
            className={`w-full flex justify-center space-x-1 text-zinc-800 dark:text-slate-200 animate-bounce-5px`}
          >
            <h1 className="hover:underline underline-offset-2">
              View the archive here
            </h1>
            <h1>{` >`}</h1>
          </NavLink>
        </div>
      )}



      <AnimatePresence>
        {activeCard && (
          console.log(activeCard),
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-[99] flex items-center justify-center"
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              layoutId={`card-${activeCard.id}-${id}`}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                layoutId={`image-${activeCard.id}-${id}`}
                src={activeCard.thumbnail}
                alt={activeCard.title}
                className="w-full h-60 object-cover object-top"
              />
              <div className="p-4">
                <motion.h3
                  layoutId={`title-${activeCard.id}-${id}`}
                  className="text-2xl font-bold text-neutral-700 dark:text-neutral-200"
                >
                  {activeCard.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${activeCard.id}-${id}`}
                  className="mt-2 text-neutral-600 dark:text-neutral-400"
                >
                  {activeCard.shortDescription}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 text-neutral-600 dark:text-neutral-400"
                >
                  {activeCard.longDescription}
                </motion.div>
                <div className="mt-4 flex justify-between items-center">
                  <motion.button
                    layoutId={`button-${activeCard.id}-${id}`}
                    onClick={() => setActiveCard(null)}
                    className="px-4 py-2 rounded-xl bg-orange-500 text-white text-xs font-bold"
                  >
                    Close
                  </motion.button>
                  <motion.a
                    href={activeCard.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    {activeCard.live ? "Try Now" : "Watch the Demo"}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {(
          <div className="grid grid-cols-1 -translate-y-32 md:-translate-y-0 lg:grid-cols-2 xl:grid-cols-3 lg:w-5/6 mx-auto">
            {featuredProjects.map((project,index) => {
              if (windowWidth < 1280 && index >= 2) {
                return null; // Do not render the project if index is 2 or more and window width is less than 1440px
              }
              return (
                <AnimatePresence key={project.id}>
                  {activeCardId !== project.id && (
                    <motion.div
                      layoutId={`card-${project.id}-${id}`}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <CardContainer
                        className="inter-var w-[350px] 2xl:w-[400px] mx-10"
                        layoutId={`card-${project.id}-${id}`}
                      >
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.25] dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                          <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                          >
                            {project.title}
                          </CardItem>
                          <CardItem translateZ="100" className="w-full mt-4">
                            <img
                              src={project.thumbnail}
                              height="1000"
                              width="1000"
                              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                              alt="thumbnail"
                            />
                          </CardItem>
                          <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mt-10 flex"
                          >
                            {project.builtWith?.map((tech, index) => {
                              const isLastItem =
                                index === project.builtWith.length - 1;
                              return (
                                <div
                                  key={index}
                                  className="relative flex w-[60px] items-center justify-center"
                                >
                                  <div className="group flex flex-col w-full items-center justify-center text-center mx-2">
                                    <LanguagesLogos
                                      language={tech}
                                      className="w-full mx-auto transition-transform duration-200 ease-in-out group-hover:scale-110 group-hover:-translate-y-1"
                                    />
                                    <span className="absolute bottom-0 inset-x-0 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-xs">
                                      {tech}
                                    </span>
                                  </div>
                                  {!isLastItem && <span>·</span>}
                                </div>
                              );
                            })}
                          </CardItem>
                          <div className="flex justify-between items-center mt-5 2xl:mt-10">
                            <CardItem
                              layoutId={`button-${project.id}-${id}`}
                              translateZ={20}
                              as="button"
                              onClick={() => setActiveCard(project)}
                              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                              Read More →
                            </CardItem>
                            <CardItem
                              translateZ={20}
                              as={Link}
                              to={project.link}
                              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                              {project.live ? "Try Now" : "Watch the Demo"}
                            </CardItem>
                          </div>
                        </CardBody>
                      </CardContainer>
                    </motion.div>
                  )}
                </AnimatePresence>
              );
            })}
          </div>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        <div className="lg:hidden grid grid-cols-1 -translate-y-32 md:-translate-y-0">
          {featuredProjects.map(
            (project, index) =>
              index < 2 && (
                <div className="inter-var flex w-[350px] mx-auto my-10">
                  <div className="bg-gray-50 relative group/card dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <div
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </div>
                    <div translateZ="100" className="w-full mt-4">
                      <img
                        src={project.thumbnail}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                      />
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <div
                        layoutId={`button-${1}-${id}`}
                        translateZ={20}
                        as="button"
                        onClick={() => setActiveCard(project)}
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                      >
                        Read More →
                      </div>
                      <Link to = {project.link}>
                        <div
                          translateZ={20}
                          as={Link}
                          to={project.link}
                          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                          {project.live ? "Try Now" : "Watch the Demo"}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </AnimatePresence> */}
    </div>
  );
}
