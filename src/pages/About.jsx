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
        <div className="flex flex-col items-center md:p-20 space-y-4 h-screen">
            <div className="z-10 w-full flex flex-col justify-center">
                {
                    dark ? (
                        <div>
                            <div className="hidden md:flex">
                                <LampContainer>
                                    <div className="flex flex-col w-2/3">
                                        <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                            About Me
                                        </h1>   
                                        <div className="flex">
                                            <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                                                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                            </p> 
                                            <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                        </div>     
                                    </div>           
                                </LampContainer>
                            </div>
                            <div className="flex md:hidden">
                                <LampContainerSmall>
                                    <div className="flex flex-col w-2/3">
                                        <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-5xl font-display text-transparent md:text-7xl">
                                            About Me
                                        </h1>   
                                        <div className="flex flex-col space-y-10">
                                            <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display">
                                                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                            </p> 
                                            <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                        </div>     
                                    </div>           
                                </LampContainerSmall>           
                            </div>
                        </div>
                    ) : (
                        <div className="relative z-50 flex flex-col items-center px-5">
                            <div className="hidden md:flex flex-col w-2/3">
                                <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                    About Me
                                </h1>   
                                <div 
                                    className="flex"
                                    initial={{ opacity: 0.5, y: 50 }}
                                    whileInView={{ opacity: 1, y: -250 }}
                                    transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                    }}
                                >
                                    <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                    </p> 
                                    <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                </div>     
                            </div> 
                            <div className="flex md:hidden justify-center">
                                    <div className="flex flex-col w-2/3">
                                        <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-5xl font-display text-transparent md:text-7xl">
                                            About Me
                                        </h1>   
                                        <div className="flex flex-col space-y-10">
                                            <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display">
                                                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                            </p> 
                                            <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
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

