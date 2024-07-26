import { FlipWords } from "../components/flip-words";
import ReactCurvedText from "react-curved-text";

export default function Home() {
    const words = ["design", "develop", "deploy"];
    return (
        <div className="flex flex-col w-5/6 lg:w-4/5 xl:w-2/3 items-left pt-8 md:pt-32 lg:pt-40 2xl:pt-60 md:p-20 space-y-4 mb-20 md:mb-0 md:h-screen">
            <h1 className="dark:text-orange-600 text-orange-800 text-xl font-display animate-bounce-5px">Hi, my name is</h1>
            <h1 className="dark:text-slate-300 text-5xl md:text-7xl font-bold font-display">
                Nathan Hutchison.
            </h1>
            <h2 className="dark:text-slate-200 text-3xl font-display flex gap-2">
                I 
                <div>
                    <FlipWords words={words} duration={2000} className="ml-4" /> 
                </div>
            </h2>
            <p className="dark:text-slate-200 text-lg lg:w-3/4 font-display">
                I’m a software engineer with a passion for designing, developing and deploying web (and occasionally mobile) applications. I have just graduated from the University of Glasgow with a BSc (Hons) Software Engineering degree and I'm excited to put it to use!
            </p>
            <div className="flex w-full justify-center pt-10 md:pt-48 lg:pt-28 2xl:pt-48">
                <div className="flex relative justify-center items-center w-[50px] h-[50px] border rounded-full  animate-bounce-5px">
                    <p className="dark:text-slate-200 text-xl text-center">↓</p>
                    <div className="absolute animate-spin-slow">
                        <ReactCurvedText
                            width={120}
                            height={120}
                            cx={60}
                            cy={60}
                            rx={30}
                            ry={30}
                            startOffset={0}
                            reversed={true}
                            text="scroll for more info · scroll for more info ·"
                            textProps={{ style: { fontSize: 10.25, color: "white" } }}
                            textPathProps={{ className: "dark:fill-slate-200" }}
                            tspanProps={null}
                            ellipseProps={null}
                            svgProps={null}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
