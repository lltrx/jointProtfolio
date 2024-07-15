import projects from "../assets/projects.json";
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";
import Email from "../components/Email";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguagesLogos from "../assets/languagesLogos"

export default function Archive() {

    return(
        <div className="relative dark:bg-zinc-900 font-display w-full h-screen flex flex-col items-center bg-blue-50 text-slate-200">
            <NavBar />
            <Socials />
            <Email />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center"
            >
                <div className="w-full flex pl-10 pt-10 space-x-4 text-zinc-500 font-bold">
                    <NavLink to={`/`} ><h1 className="hover:underline underline-offset-2">Home</h1></NavLink>
                    <h1>{`>`}</h1>
                    <h1 className="text-orange-700 dark:text-orange-700">Projects</h1>
                </div>
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 pt-4 pb-20 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                        Project Archive
                    </h1>

                    {/* ## TABLE ROW PADDING IS APPLIED IN APP.CSS FOR ABSTRACTION */}

                    <table className="w-4/6 table-auto table-row-spacing">
                        <tr className="text-zinc-600">
                            <th>Year</th>
                            <th>Title</th>
                            <th>Made at</th>
                            <th>Built with</th>
                            <th>Link</th>
                        </tr>
                        {projects.map((project) => (
                            <tr key={project.id} className="text-center">
                                <td className="text-orange-700 dark:text-orange-600 text-lg">{project.year}</td>
                                <td className="text-lg font-bold">{project.title}</td>
                                <td className="text-zinc-500">{project.madeAt}</td>
                                <td className="flex items-center justify-center text-sm text-zinc-500">
                                    {project.builtWith?.map((tech, index) => {
                                        const isLastItem = index === project.builtWith.length - 1;
                                        return (
                                            <div key={index} className="relative flex w-[60px] items-center justify-center">
                                                <div className="group flex flex-col w-full items-center justify-center text-center mx-2">
                                                    <LanguagesLogos language={tech} className="w-full mx-auto transition-transform duration-200 ease-in-out group-hover:scale-110 group-hover:-translate-y-1" />
                                                    <span className="absolute bottom-0 inset-x-0 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out text-xs">{tech}</span>
                                                </div>
                                                {!isLastItem && <span>·</span>}
                                            </div>
                                        );
                                    })}
                                </td>
                                <td><a href={project.link}><FontAwesomeIcon icon={faLink} color={document.documentElement.classList.contains("dark") ? "#B54400" : "#C2410C"} /></a></td>
                            </tr>
                        ))}
                    </table>
                </div>
            </motion.div>
        </div>
    )
}