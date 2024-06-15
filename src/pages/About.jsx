import { LampContainer } from "../components/lamp";
import { motion } from "framer-motion";

export default function About() {
    return (
        <div className="flex flex-col items-center p-20 space-y-4 h-screen">
            <div className="z-10 w-full flex flex-col justify-center">
                <LampContainer>
                        <h1
                        initial={{ opacity: 0.5, y: 50 }}
                        whileInView={{ opacity: 1, y: -300 }}
                        transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                        }}
                        className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 py-4 bg-clip-text text-center text-4xl font-display tracking-tight text-transparent md:text-7xl"
                    >
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
                        <p className="mt-8 text-lg text-center text-slate-200 font-display w-1/2">
                            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
                        </p> 
                        <img src="/profile.png" className="w-[200px] rounded-full mx-auto" />
                    </div>                
                </LampContainer>
                
            </div>
        </div>
    );
}

