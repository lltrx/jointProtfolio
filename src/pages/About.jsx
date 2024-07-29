import { LampContainer } from "../components/lamp";
import { LampContainerSmall } from "../components/lampSmall";
import { useState, useEffect } from "react"


export default function About() {

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
        <div className="flex flex-col w-full items-center mb-44 lg:mb-96 2xl:mb-44 md:p-20 lg:pt-0 2xl:pt-20 lg:-mt-[80px] 2xl:-mt-[100px] space-y-4 h-screen">
            <div className="z-10 w-full flex flex-col justify-center items-center">
                {
                    dark ? (
                        <div className="w-full">
                            <div className="hidden lg:flex flex-col items-center">
                                <LampContainer className={"flex w-full justify-center"}>
                                    <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent lg:text-7xl">
                                        About Me
                                    </h1>      
                                </LampContainer>
                                <div className="flex w-5/6 2xl:w-2/3 items-center mt-4">
                                    <p className="text-base text-center text-zinc-800 dark:text-slate-200 font-display mx-10 w-2/3 2xl:w-1/2">
                                        <a className="text-2xl">Hello I’m Nathan! </a>
                                        <br /><br />
                                        I’m a passionate and aspiring software developer with a keen interest in developing creative and intuitive digital landscapes. I’ve dedicated myself to building a strong foundation in modern web technologies such as JavaScript, TypeScript, React, Django and Next.JS. 
                                        <br /><br />
                                        I get a thrill from being challenged and working hard to solve problems using a logical and methodical approach. I am a great listener, with a friendly, approachable and down-to-earth style whilst maintaining professionalism. I’m project-driven and enjoy achieving success working towards goals
                                        <br />
                                        <br />
                                        Currently, I’m focused on building my portfolio with meaningful projects that showcase my abilities, as well as constantly learning new ways to create my ideas. I’m excited about the opportunity to collaborate with others and bring innovative ideas to life in a forward-thinking and determined environment.
                                    </p> 
                                    <img src="/profile.jpg" className="w-[300px] hover:scale-150 transition ease-in-out rounded-full mx-auto" />
                                </div>  
                            </div>
                            <div className="flex flex-col items-center lg:hidden">
                                <LampContainerSmall>
                                    <div className="flex flex-col">
                                        <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl translate-y-12">
                                            About Me
                                        </h1>       
                                    </div>           
                                </LampContainerSmall> 
                                <div className="flex flex-col w-5/6 space-y-16 -translate-y-28">
                                    <p className="mt-8 text-sm text-center text-zinc-800 dark:text-slate-200 font-display">
                                    <a className="text-2xl">Hello I’m Nathan! </a>
                                    <br /><br />
                                        I’m a passionate and aspiring software developer with a keen interest in developing creative and intuitive digital landscapes. I’ve dedicated myself to building a strong foundation in modern web technologies such as JavaScript, TypeScript, React, Django and Next.JS. 
                                        <br /><br />
                                        I get a thrill from being challenged and working hard to solve problems using a logical and methodical approach. I am a great listener, with a friendly, approachable and down-to-earth style whilst maintaining professionalism. I’m project-driven and enjoy achieving success working towards goals
                                        <br />
                                        <br />
                                        Currently, I’m focused on building my portfolio with meaningful projects that showcase my abilities, as well as constantly learning new ways to create my ideas. I’m excited about the opportunity to collaborate with others and bring innovative ideas to life in a forward-thinking and determined environment.                                    </p> 
                                    <img src="/profile.jpg" className="w-[300px] transition ease-in-out rounded-full mx-auto" />
                                </div>           
                            </div>
                        </div>
                    ) : (
                        <div className="relative z-50 flex flex-col items-center pt-48 md:pt-40 lg:pt-48">
                            <div className="hidden lg:flex flex-col w-5/6 2xl:w-2/3">
                                <h1 className="mt-6 font-bold mb-16 bg-gradient-to-br from-orange-900 to-orange-500 pt-4 pb-8 bg-clip-text text-center text-4xl font-display text-transparent lg:text-7xl">
                                    About Me
                                </h1>   
                                <div className="flex items-center mt-4">
                                    <p className=" text-center text-zinc-800 dark:text-slate-200 font-display mx-10 w-2/3 2xl:w-1/2">
                                    <a className="text-2xl">Hello I’m Nathan! </a>
                                    <br /><br />
                                        I’m a passionate and aspiring software developer with a keen interest in developing creative and intuitive digital landscapes. I’ve dedicated myself to building a strong foundation in modern web technologies such as JavaScript, TypeScript, React, Django and Next.JS. 
                                        <br /><br />
                                        I get a thrill from being challenged and working hard to solve problems using a logical and methodical approach. I am a great listener, with a friendly, approachable and down-to-earth style whilst maintaining professionalism. I’m project-driven and enjoy achieving success working towards goals
                                        <br />
                                        <br />
                                        Currently, I’m focused on building my portfolio with meaningful projects that showcase my abilities, as well as constantly learning new ways to create my ideas. I’m excited about the opportunity to collaborate with others and bring innovative ideas to life in a forward-thinking and determined environment.                                    </p> 
                                    <img src="/profile.jpg" className="w-[300px] hover:scale-150 transition ease-in-out rounded-full mx-auto" />
                                </div>     
                            </div> 
                            <div className="flex lg:hidden justify-center mt-16">
                                <div className="flex flex-col w-5/6 mt-2">
                                    <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                        About Me
                                    </h1>   
                                    <div className="flex flex-col space-y-16">
                                        <p className="mt-8 text-sm text-center text-zinc-800 dark:text-slate-200 font-display">
                                        <a className="text-2xl">Hello I’m Nathan! </a>
                                        <br /><br />
                                        I’m a passionate and aspiring software developer with a keen interest in developing creative and intuitive digital landscapes. I’ve dedicated myself to building a strong foundation in modern web technologies such as JavaScript, TypeScript, React, Django and Next.JS. 
                                        <br /><br />
                                        I get a thrill from being challenged and working hard to solve problems using a logical and methodical approach. I am a great listener, with a friendly, approachable and down-to-earth style whilst maintaining professionalism. I’m project-driven and enjoy achieving success working towards goals
                                        <br />
                                        <br />
                                        Currently, I’m focused on building my portfolio with meaningful projects that showcase my abilities, as well as constantly learning new ways to create my ideas. I’m excited about the opportunity to collaborate with others and bring innovative ideas to life in a forward-thinking and determined environment.                                        </p> 
                                        <img src="/profile.jpg" className="w-[300px] transition ease-in-out rounded-full mx-auto" />
                                    </div>     
                                </div>           
                            </div>
                        </div>
                    )

                }
                
                
            </div>
        </div>
    );
}

