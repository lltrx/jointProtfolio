import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import projects from "../assets/projects.json";
import { NavLink, Link } from 'react-router-dom';

export default function Experiences() {

    const featuredProjects = projects.filter(project => project.featured === true).slice(0, 3);

    return (
        <div>
            <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 pt-40 pb-4 md:pb-10 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                Projects
            </h1>   
            <NavLink to={`/projects`} className={`w-full flex justify-center space-x-1 text-slate-200`}><h1 className="hover:underline underline-offset-2">View the archive here</h1><h1>{` >`}</h1></NavLink>
            <div className="hidden xl:grid grid-cols-3">
                {featuredProjects.map((project) => (
                    
                    <CardContainer className="inter-var w-[300px] 2xl:w-[400px] mx-10">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.25] dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            {project.title}
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            {project.shortDescription}
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
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mt-10"
                            >
                                {project.builtWith.map((tech, index) => {
                                    if (index === project.builtWith.length - 1) {
                                        return(
                                            <span key={index}>{tech}</span>
                                        )
                                    }
                                    else {
                                        return(
                                            <span key={index}>{tech + " · "}</span>
                                        )
                                    }
                                }
                                )}
                            </CardItem>
                            <div className="flex justify-between items-center mt-5 2xl:mt-10">
                                <CardItem
                                    translateZ={20}
                                    as={NavLink}
                                    to={`/projects/${project.slug}`}    
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
                ))
                }
            </div>
            <div className="hidden lg:grid xl:hidden grid-cols-2 mt-10">
                {featuredProjects.map((project, index) => (
                    index < 2 && (
                        <CardContainer className="inter-var w-[350px] mx-5">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.25] dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            {project.title}
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            {project.shortDescription}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-5 2xl:mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={NavLink}
                                    to={`/projects/${project.slug}`}    
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
                    )           
            ))
            }
            </div>
            <div className="lg:hidden grid grid-cols-1">
                {featuredProjects.map((project, index) => (
                    index < 2 && (
                        <div className="inter-var flex w-[350px] my-10">
                                <div className="bg-gray-50 relative group/card dark:bg-zinc-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                    <div
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                    >
                                    {project.title}
                                    </div>
                                    <div
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                    >
                                    {project.shortDescription}
                                    </div>
                                    <div translateZ="100" className="w-full mt-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                    </div>
                                    <div className="flex justify-between items-center mt-6">
                                        <div
                                            translateZ={20}
                                            as={NavLink}
                                            to={`/projects/${project.slug}`}    
                                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                        >
                                            Read More →
                                        </div>
                                        <div
                                            translateZ={20}
                                            as={Link}
                                            to={project.link}
                                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                        >
                                            {project.live ? "Try Now" : "Watch the Demo"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    )           
            ))
            }
            </div>
        </div>
    )
}