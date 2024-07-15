import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import work from '../assets/work.json';
import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from '../components/lampSmall';

export default function Worked() {
    const [selectedJob, setSelectedJob] = useState(1);
    const selectedJobDetails = work.find(job => job.id === selectedJob);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

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
        <div className="flex flex-col w-full items-center md:pt-40 md:p-20 md:mb-20 mb-48 space-y-4 h-fit overflow-x-hidden">
            {dark ? (
                <div className='pt-60 md:pt-0 w-full'>
                    <div className='flex flex-col items-center w-full'>
                        <LampContainer className={"hidden md:flex w-full justify-center"}>
                            <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                Work Experience
                            </h1>  
                        </LampContainer>
                        <div className="hidden md:flex flex-col md:w-2/3 max-w-[860px] md:flex-row w-5/6 md:w-full">
                            <div className='relative md:w-1/3'>
                                <div className='flex md:flex-col overflow-x-auto text-orange-500 whitespace-nowrap pb-6 md:pb-0'>
                                    {work.map((job) => (
                                        <div key={job.id} className={`px-4 md:px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 ${job.id === selectedJob ? 'border-orange-500' : 'border-orange-900'}`}>
                                            <button className='cursor-pointer' onClick={() => setSelectedJob(job.id)}>{job.company}</button>
                                        </div>
                                    ))}
                                    
                                </div>
                                <div className="absolute md:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-blue-50 dark:to-zinc-900"></div>
                                <div className="absolute md:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-blue-50 dark:to-zinc-900"></div> 
                            </div>
                            <div className='md:w-2/3'>
                                <AnimatePresence mode='wait'>
                                    {selectedJobDetails && (
                                        <motion.div
                                            key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={variants}
                                            transition={{ duration: 0.2 }}
                                            className='flex flex-col text-slate-900 dark:text-slate-200'
                                        >
                                            <div className='flex text-lg md:text-xl mb-2'>
                                                <h2>{selectedJobDetails.role}</h2>
                                                <h1 className='ml-2 text-orange-500'><a href={selectedJobDetails.link}>@ {selectedJobDetails.company}</a></h1>
                                            </div>
                                            <div className='flex flex-col space-y-1 mb-5'>
                                                <p>{selectedJobDetails.dates}</p>
                                                <p>{selectedJobDetails.location}</p>
                                            </div>
                                            <div className='flex flex-col space-y-4'>
                                                {selectedJobDetails.description.bullets.map((bullet, index) => (
                                                    <div className='flex space-x-3'>
                                                        <p className='text-orange-500 text-sm'>⬡ </p>
                                                        <p key={index} className='text-sm md:text-base'>{bullet}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center w-full'>
                        <LampContainerSmall className={"flex md:hidden w-full justify-center"}>
                            <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                Work Experience
                            </h1>      
                        </LampContainerSmall>
                        <div className="flex md:hidden flex-col md:w-2/3 max-w-[860px] md:flex-row w-5/6 md:w-full -translate-y-28">
                            <div className='relative md:w-1/3'>
                                <div className='flex md:flex-col overflow-x-auto text-orange-500 whitespace-nowrap pb-6 md:pb-0'>
                                    {work.map((job) => (
                                        <div key={job.id} className={`px-4 md:px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 ${job.id === selectedJob ? 'border-orange-500' : 'border-orange-900'}`}>
                                            <button className='cursor-pointer' onClick={() => setSelectedJob(job.id)}>{job.company}</button>
                                        </div>
                                    ))}
                                    
                                </div>
                                <div className="absolute md:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-blue-50 dark:to-zinc-900"></div>
                                <div className="absolute md:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-blue-50 dark:to-zinc-900"></div> 
                            </div>
                            <div className='md:w-2/3'>
                                <AnimatePresence mode='wait'>
                                    {selectedJobDetails && (
                                        <motion.div
                                            key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={variants}
                                            transition={{ duration: 0.2 }}
                                            className='flex flex-col text-slate-900 dark:text-slate-200'
                                        >
                                            <div className='flex text-lg md:text-xl mb-2'>
                                                <h2>{selectedJobDetails.role}</h2>
                                                <h1 className='ml-2 text-orange-500'><a href={selectedJobDetails.link}>@ {selectedJobDetails.company}</a></h1>
                                            </div>
                                            <div className='flex flex-col space-y-1 mb-5'>
                                                <p>{selectedJobDetails.dates}</p>
                                                <p>{selectedJobDetails.location}</p>
                                            </div>
                                            <div className='flex flex-col space-y-4'>
                                                {selectedJobDetails.description.bullets.map((bullet, index) => (
                                                    <div className='flex space-x-3'>
                                                        <p className='text-orange-500 text-sm'>⬡ </p>
                                                        <p key={index} className='text-sm md:text-base'>{bullet}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col w-full items-center mt-96 md:mt-48 space-y-4 h-fit overflow-x-hidden">
                    <h1 className="mt-24 md:mt-6 font-bold md:mb-16 mb-6 bg-gradient-to-br from-orange-900 to-orange-500 py-6 md:py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                        Work Experience
                    </h1> 
                    <div className="flex flex-col md:flex-row w-5/6 md:w-2/3 max-w-[860px]">
                        <div className='relative md:w-1/3'>
                            <div className='flex md:flex-col overflow-x-auto text-orange-500 whitespace-nowrap pb-6 md:pb-0'>
                                {work.map((job) => (
                                    <div key={job.id} className={`px-4 md:px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 ${job.id === selectedJob ? 'border-orange-500' : 'border-orange-900'}`}>
                                        <button className='cursor-pointer' onClick={() => setSelectedJob(job.id)}>{job.company}</button>
                                    </div>
                                ))}
                                
                            </div>
                            <div className="absolute md:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-blue-50 dark:to-zinc-900"></div>
                            <div className="absolute md:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-blue-50 dark:to-zinc-900"></div> 
                        </div>
                        <div className='w-full md:w-2/3'>
                            <AnimatePresence mode='wait'>
                                {selectedJobDetails && (
                                    <motion.div
                                        key={selectedJobDetails.id} // Ensure this key changes to trigger animations
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={variants}
                                        transition={{ duration: 0.2 }}
                                        className='flex flex-col text-slate-900 dark:text-slate-200'
                                    >
                                        <div className='flex text-lg md:text-xl mb-2'>
                                            <h2>{selectedJobDetails.role}</h2>
                                            <h1 className='ml-2 text-orange-500'><a href={selectedJobDetails.link}>@ {selectedJobDetails.company}</a></h1>
                                        </div>
                                        <div className='flex flex-col space-y-1 mb-5'>
                                            <p>{selectedJobDetails.dates}</p>
                                            <p>{selectedJobDetails.location}</p>
                                        </div>
                                        <div className='flex flex-col space-y-4'>
                                            {selectedJobDetails.description.bullets.map((bullet, index) => (
                                                <div className='flex space-x-3'>
                                                    <p className='text-orange-500 text-sm'>⬡ </p>
                                                    <p key={index} className='text-sm md:text-base'>{bullet}</p>
                                                </div>
                                            ))}
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