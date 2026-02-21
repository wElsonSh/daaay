import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";

export function Header({ setIsOpen }) {

    return (
        <header className="w-full h-fit flex flex-col items-center gap-5">
            <div className="w-full h-fit flex items-center justify-between">
                <button className="flex items-center gap-3 bg-yellow-400 p-1 pr-4 rounded-4xl text-black text-sm font-medium hover:bg-yellow-300 transition-all active:bg-yellow-500 cursor-pointer" onClick={() => { setIsOpen(true) }}>
                    <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-base"><FaPlus className="w-3 h-3 text-neutral-500" /></span>
                    Create New Task
                </button>
                <Link to="/profile" className="w-12 h-12 bg-neutral-500 rounded-full outline-2 outline-offset-2 outline-neutral-400 cursor-pointer hover:outline-neutral-300 transition-all" smooth={true} duration={500}></Link>
            </div>
            <div className="w-full h-fit flex items-center justify-between text-3xl">
                Manage Your Task
                <button className="text-sm text-neutral-500 font-medium cursor-pointer hover:text-neutral-400 transition-all">See all</button>
            </div>
        </header>
    );
}