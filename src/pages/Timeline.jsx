import React, {useState} from 'react';
import work from '../../public/work.json';

export default function TimeLine() {

    const [selectedJob, setSelectedJob] = useState(1);
    const selectedJobDetails = work.find(job => job.id === selectedJob);

    return (
        <div className="flex flex-col w-2/3 items-center pt-60 p-20 space-y-4 h-screen">
            <h1 className="text-orange-500 text-3xl font-display font-bold text-left w-full pl-20 pb-10">Where I've Worked</h1>
            <div className="flex w-full">
                <div className='flex flex-col w-1/3 text-orange-500'>
                    {work.map((job) => (
                        
                        <div key={job.id} className={`'border-l px-5 py-2 border-l-2 ${job.id === selectedJob ? 'border-orange-500' : 'border-orange-900'}`}>
                            <button onClick={() => setSelectedJob(job.id)}>{job.company}</button>
                        </div>
                    ))
                    }
                </div>     
                <div className='w-2/3'>
                {selectedJobDetails && (
                    <div className='flex flex-col text-slate-200'>
                        <div className='flex text-xl mb-2'>
                            <h2>{selectedJobDetails.role}</h2>
                            <h1 className='ml-2 text-orange-500'><a href={selectedJobDetails.link}>@{selectedJobDetails.company}</a></h1>
                        </div>
                        <div className='flex flex-col space-y-1 mb-5'>
                            <p>{selectedJobDetails.dates}</p>
                            <p>{selectedJobDetails.location}</p>
                        </div>
                        <div className='flex flex-col space-y-4'>
                            {selectedJobDetails.description.bullets.map((bullet, index) => (
                            <p key={index}>{"> " + bullet}</p>
                            ))}
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    );
}

{/* {work.map((job) => (
                    <div key={job.id}>
                        <h3>{job.company}</h3>
                        <h4>{job.role}</h4>
                        <p>{job.location}</p>
                        <p>{job.dates}</p>
                        {job.description.bullets.map((bullet, index) => (
                        <p key={index}>{bullet}</p>
                        ))}
                    </div>
                ))} */}