import About from "../pages/About.jsx";
import Worked from "../pages/Worked.jsx";
import Experiences from "../pages/Experiences.jsx";
import Footer from "../pages/Footer.jsx";
import Email from "../components/Email.jsx";
import Loading from "../components/Loading.jsx";
import Home from "../pages/Home.jsx";
import NavBar from "../components/NavBar.jsx";
import Socials from "../components/Socials.jsx";
import { useEffect, useState } from "react";

export default function Main() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!document.documentElement.classList.contains('noAnimation')) {
            // Prevent scrolling when the component mounts
            document.body.style.overflow = 'hidden';
        
            // Set a timeout to allow scrolling after 5 seconds
            const timer = setTimeout(() => {
                document.body.style.overflow = 'auto';
                setIsLoading(false);
        
                // After an additional 10 seconds, add a class to the <html> element
                const classTimer = setTimeout(() => {
                    document.documentElement.classList.add('noAnimation'); // Replace 'your-class-name' with the actual class name you want to add
                }, 15000); // 10000 milliseconds = 10 seconds
        
                // Return a function to clear the nested timeout
                return () => {
                    clearTimeout(classTimer);
                };
            }, 5000); // 5000 milliseconds = 5 seconds
        
            // Clear the initial timeout when the component unmounts
            return () => {
                clearTimeout(timer);
            };
        }
    }, []);

    return (
        <div className="relative dark:bg-zinc-900 font-display">
            <div className="absolute flex flex-col dark:bg-zinc-900 bg-blue-50 w-full h-fit items-center">
                <NavBar />
                <Socials/>
                <Email/>
                <section id="home" className="snap-center w-full flex justify-center" >
                    <Home />
                </section>
                <section id="about" className="snap-center w-full flex justify-center" >
                    <About />
                </section>
                <section id="timeline" className="snap-center w-full flex justify-center" >
                    <Worked />
                </section>
                <section id="experience" className="snap-center w-full flex justify-center" >
                    <Experiences />
                </section>
                <Footer />
            </div>
            {isLoading && <Loading className='dark:bg-zinc-900 absolute' color={"#b54400"} />}
        </div>
    )
}