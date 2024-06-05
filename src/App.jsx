import "./App.css";
import Loading from "./components/Loading.jsx";
import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import Socials from "./components/Socials.jsx";
import { useEffect, useState } from "react";
import About from "./pages/About.jsx";
import TimeLine from "./pages/Timeline.jsx";
import Experiences from "./pages/Experiences.jsx";
import Email from "./components/Email.jsx";

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
    <div className="relative dark:bg-zinc-900">
        <div className="absolute flex flex-col dark:bg-zinc-900 w-full h-fit items-center">
        <NavBar />
        <Socials color={"#b54400"} />
        <Email color={"#b54400"} />
          <section id="home" className="snap-center flex justify-center" >
        <Home />
        </section>
        <section id="about" className="snap-center w-full flex justify-center" >
          <About />
        </section>
        <section id="timeline" className="snap-center" >
          <TimeLine />
        </section>
        <section id="experience" className="snap-center" >
          <Experiences />
        </section>
        </div>
        {isLoading && <Loading className='dark:bg-zinc-900 absolute' color={"#b54400"} />}
    </div>
);
}

export default App;