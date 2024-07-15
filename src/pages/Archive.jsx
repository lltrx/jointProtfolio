import projects from "../assets/projects.json";
import NavBar from "../components/NavBar";
import Socials from "../components/Socials";
import Email from "../components/Email";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Archive() {

    return(
        <div className="relative dark:bg-zinc-900 font-display w-full h-screen flex flex-col items-center bg-zinc-900 text-slate-200">
            <NavBar />
            <Socials color={"#b54400"} />
            <Email color={"#b54400"} />
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col items-center"
            >
                <div className="w-full flex pl-10 pt-10 space-x-4 text-zinc-500 font-bold">
                    <NavLink to={`/`} ><h1 className="hover:underline underline-offset-2">Home</h1></NavLink>
                    <h1>{`>`}</h1>
                    <h1 className="text-orange-500">Projects</h1>
                </div>
                <div className="w-full flex flex-col items-center">
                    <h1 className="mt-8 bg-gradient-to-br from-orange-900 to-orange-500 pt-4 pb-20 bg-clip-text text-center text-4xl font-display text-transparent md:text-7xl">
                        Project Archive
                    </h1>
                    <table className="w-2/3 table-auto">
                        <tr className="text-zinc-600">
                            <th className="pb-6">Year</th>
                            <th className="pb-6">Title</th>
                            <th className="pb-6">Made at</th>
                            <th className="pb-6">Built with</th>
                            <th className="pb-6">Link</th>
                        </tr>
                        {projects.map((project) => (
                            <tr key={project.id} className="text-center">
                                <td className="text-orange-500 text-lg">{project.year}</td>
                                <td className="text-lg font-bold">{project.title}</td>
                                <td className="text-zinc-500">{project.madeAt}</td>
                                <td className="text-sm text-zinc-500">
                                    {project.builtWith?.map((tech, index) => {
                                        if (index === project.builtWith.length - 1) {
                                            return(
                                                <span key={index}>{tech}</span>
                                            )
                                        }
                                        else {
                                            return(
                                                <span key={index}>{tech + " · "}</span>
                                            )
                                        }
                                    }
                                    )}
                                </td>
                                <td>{project.link}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </motion.div>
        </div>
    )
}