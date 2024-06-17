import React from "react";
import { CardBody, CardContainer, CardItem } from "../components/3d-card";
import projects from "../assets/projects.json";
import { NavLink } from 'react-router-dom';

export default function Experiences() {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-slate-200 mt-20">Projects</h1>
            
            <div className="flex grid grid-cols-2 space-x-5">
                {projects.map((project) => (
                    
                    <CardContainer className="inter-var w-[400px]">
                        <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.25] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
                            <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    target="__blank"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <NavLink href={`/project/${project.slug}`}>
                                        Read More →
                                    </NavLink>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    as="button"
                                    href={project.link}
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
        </div>
    )
}


{/* <CardContainer className="inter-var">
                <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-orange-500/[0.25] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                    <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                    BrewDog Carbon Calculator
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                    This is the area for a brief description of the card.
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
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            Try now →
                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            Sign up
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer> */}