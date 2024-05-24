import "./App.css";
import Loading from "./components/Loading.jsx";
import Home from "./components/Home.jsx";
import Socials from "./components/Socials.jsx";
import { useEffect, useState } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling when the component mounts
        document.body.style.overflow = 'hidden';

        // Set a timeout to allow scrolling after 5 seconds
        const timer = setTimeout(() => {
            document.body.style.overflow = 'auto';
            setIsLoading(false);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Clear the timeout when the component unmounts
        return () => {
            clearTimeout(timer);
        };
    }, []); 


    return (
    <div className="relative bg-zinc-900">
        <div className="absolute flex flex-col bg-zinc-900 w-full h-fit items-center">
        <Home />
        <Socials color={"#b54400"} />
        </div>
        {isLoading && <Loading className='bg-zinc-900 absolute' color={"#b54400"} />}
    </div>
);
}

export default App;