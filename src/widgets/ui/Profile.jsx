import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router";

export function Profile() {

    useEffect(function () {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <div data-aos="fade-left" className="w-full h-full profile_win transition-all">
            <header className="w-full cursor-pointer flex flex-col gap-5">
                <div className="w-full h-fit flex items-center justify-between">
                    <Link to="/" className="text-neutral-600 w-14 h-14 flex items-center justify-center rounded-full transition-all  hover:bg-neutral-800 hover:text-neutral-100 active:bg-neutral-800/50"><HiArrowSmLeft className="w-10 h-10" smooth={true} duration={500} /></Link>
                    <div className="w-12 h-12 bg-neutral-500 rounded-full outline-2 outline-offset-2 outline-neutral-400 cursor-pointer hover:outline-neutral-300 transition-all"></div>
                </div>
                <div className="w-full h-fit">
                    <div className="w-full h-fit flex items-center justify-between text-4xl">
                        Profile settings
                    </div>
                </div>
            </header>
        </div>
    );
}