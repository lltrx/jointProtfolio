import { FlipWords } from "../components/flip-words";

export default function Home() {
    const words = ["design", "develop", "deploy"];
    return (
        <div className="flex flex-col w-5/6 md:w-2/3 items-left pt-20 md:pt-60 md:p-20 space-y-4 h-screen">
            <h1 className="dark:text-orange-600 text-orange-800 text-xl font-display">Hi, my name is</h1>
            <h1 className="dark:text-slate-300 text-5xl md:text-7xl font-bold font-display">
                Nathan Hutchison.
            </h1>
            <h2 className="dark:text-slate-200 text-3xl font-display flex gap-2">
                I 
                <div>
                    <FlipWords words={words} duration={2000} className="ml-4" /> 
                </div>
            </h2>
            <p className="dark:text-slate-200 text-lg md:w-3/4 font-display">
                I’m a software engineer specializing in building (and occasionally
                designing) exceptional digital experiences. Currently, I’m focused on
                building accessible, human-centered products at Upstatement.
            </p>
        </div>
    );
    }
