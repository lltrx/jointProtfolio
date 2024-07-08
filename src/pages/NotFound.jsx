import { NavLink } from "react-router-dom";


export default function NotFound() {
    return (
        <div className="bg-zinc-900 text-slate-200 w-full h-screen flex flex-col items-center justify-center space-y-8 relative">
            <h1 className="text-9xl font-bold text-orange-500">404</h1>
            <p className="text-4xl">The page you requested could not be found</p>
            <p className="text-xl">If you think this is in error<a className="text-orange-500">*</a> please let me know at <a className="text-orange-500 hover:underline underline-offset-2" href="mailto:nathanhutchison02@gmail.com">nathanhutchison02@gmail.com</a></p>
            <p className="text-2xl">Otherwise, here's a hand back <NavLink to={"/"} className={"text-orange-500 hover:underline underline-offset-2"}>home</NavLink>!</p>
            
            <div className="absolute bottom-10 flex space-x-1">
                <p><a className="text-orange-500">*</a> I said I </p>
                <p className="italic">could</p> 
                <p>make websites not that I was good at it</p>
            </div>
        </div>
    )
}