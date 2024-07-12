import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import work from '../assets/work.json';

export default function Worked() {
    const [selectedJob, setSelectedJob] = useState(1);
    const selectedJobDetails = work.find(job => job.id === selectedJob);

    // Animation variants for Framer Motion
    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <div className="flex flex-col md:w-2/3 max-w-[860px] items-center pt-60 md:pt-60 md:p-20 space-y-4 h-screen overflow-x-hidden">
            <h1 className="text-orange-500 text-4xl font-display font-bold text-center w-2/3 md:w-full pb-20">Where I've Worked</h1>
            <div className="flex flex-col md:flex-row w-5/6 md:w-full">
                <div className='relative md:w-1/3'>
                    <div className='flex md:flex-col overflow-x-auto text-orange-500 whitespace-nowrap pb-6 md:pb-0'>
                        {work.map((job) => (
                            <div key={job.id} className={`px-4 md:px-5 py-2 border-b-2 md:border-l-2 md:border-b-0 ${job.id === selectedJob ? 'border-orange-500' : 'border-orange-900'}`}>
                                <button className='cursor-pointer' onClick={() => setSelectedJob(job.id)}>{job.company}</button>
                            </div>
                        ))}
                        
                    </div>
                    <div className="absolute md:hidden inset-y-0 -left-1 w-5 bg-gradient-to-l from-transparent to-orange-50 dark:to-zinc-900"></div>
                    <div className="absolute md:hidden inset-y-0 -right-1 w-5 bg-gradient-to-r from-transparent to-orange-50 dark:to-zinc-900"></div> 
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
    );
}