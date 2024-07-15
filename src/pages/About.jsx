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
        <div className="flex flex-col w-full items-center md:p-20 space-y-4 h-screen">
            <div className="z-10 w-full flex flex-col justify-center items-center">
                {
                    dark ? (
                        <div className="w-full">
                            <div className="hidden md:flex flex-col items-center">
                                <LampContainer className={"flex w-full justify-center"}>
                                    <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                        About Me
                                    </h1>      
                                </LampContainer>
                                <div className="flex w-2/3 items-center mt-4">
                                    <p className="text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                    </p> 
                                    <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                </div>  
                            </div>
                            <div className="flex flex-col items-center md:hidden">
                                <LampContainerSmall>
                                    <div className="flex flex-col">
                                        <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl translate-y-12">
                                            About Me
                                        </h1>       
                                    </div>           
                                </LampContainerSmall> 
                                <div className="flex flex-col w-2/3 space-y-10 -translate-y-28">
                                    <p className="mt-8 text-lg text-center text-zinc-800 dark:text-slate-200 font-display">
                                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                    </p> 
                                    <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                </div>           
                            </div>
                        </div>
                    ) : (
                        <div className="relative z-50 flex flex-col items-center pt-48">
                            <div className="hidden md:flex flex-col w-2/3">
                                <h1 className="mt-6 font-bold mb-24 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                                    About Me
                                </h1>   
                                <div 
                                    className="flex items-center"
                                    initial={{ opacity: 0.5, y: 50 }}
                                    whileInView={{ opacity: 1, y: -250 }}
                                    transition={{
                                    delay: 0.3,
                                    duration: 0.8,
                                    ease: "easeInOut",
                                    }}
                                >
                                    <p className="text-lg text-center text-zinc-800 dark:text-slate-200 font-display w-1/2">
                                        I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                                    </p> 
                                    <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                                </div>     
                            </div> 
                            <div className="flex md:hidden justify-center mt-16">
                                <div className="flex flex-col w-2/3 mt-2">
                                    <h1 className="mt-8 font-bold bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
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

