import { useState } from "react";
import { FaPencilAlt, FaPlus } from "react-icons/fa";
import { FaCalendar, FaClock } from "react-icons/fa6";
export function Task() {

    const [isActive, setIsActive] = useState(false)

    const heightStyle = isActive ? 'h-90 text-neutral-100' : 'h-70 bg-[var(--task_green)] text-neutral-800'
        , hiddenStyle = isActive ? 'opacity-100 visible h-20 pt-5' : 'opacity-0 invisible h-0'
        , penStyle = isActive ? 'bg-neutral-500 text-neutral-900 pointer-events-none' : 'bg-neutral-900 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'
        , iconStyle = isActive ? 'bg-neutral-500' : 'bg-[var(--task_green-dark)]'
        , duoStyle = isActive ? 'text-neutral-50' : 'text-neutral-900'
        , dopStyles = isActive ? 'bg-neutral-400' : 'bg-neutral-50'
        , dopBtnStyles = isActive ? 'bg-neutral-800 text-neutral-100 pointer-events-none' : 'bg-[var(--task_green-dark)] hover:bg-[var(--task_green)]  text-neutral-700'
        , hardStyles = isActive ? 'bg-neutral-800 text-neutral-100' : 'bg-orange-400 text-neutral-900'

    return (
        <li onClick={() => { setIsActive(!isActive) }} className={`w-full transition-all ${heightStyle} bg-l- rounded-4xl p-5`}>
            <div className="w-full h-20 flex items-center justify-between">
                <span className="text-4xl max-w-1/2 flex font-medium">Lorem ipsum dolor sit.</span>
                <button className={`w-15 h-15 flex items-center justify-center rounded-full outline-2 outline-offset-2 outline-transparent transition-all cursor-pointer ${penStyle}`}><FaPencilAlt className="w-5 h-5" /></button>
            </div>
            <div className={`w-full text-base text-neutral-500 flex items-center  transition-all ${hiddenStyle}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non voluptatem molestiae.
            </div>
            <div className="w-11/12 h-20 flex items-center mx-auto">
                <div className="w-40 h-full flex items-center gap-2 text-neutral-900 text-lg">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full ${iconStyle} transition-all`}><FaCalendar /></span>
                    <span className={`${duoStyle} transition-all`}>16 Feb</span>
                </div>
                <div className="w-40 h-full flex items-center gap-2 text-neutral-900 text-lg">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full ${iconStyle} transition-all`}><FaClock /></span>
                    <span className={`${duoStyle} transition-all`}>14:16pm</span>
                </div>
            </div>
            <div className={`w-full h-20 rounded-4xl p-5 flex  items-center justify-between ${dopStyles} transition-all`}>
                <div className="max-w-1/2 w-1/2 h-full relative">
                    <span className="w-10 h-10 left-0  absolute bg-neutral-300 block rounded-full"></span>
                    <span className="w-10 h-10 left-7 absolute bg-neutral-500 block rounded-full"></span>
                    <span className="w-10 h-10 left-14 absolute bg-neutral-600 block rounded-full"></span>
                    <span className="w-10 h-10 left-21 absolute bg-neutral-700 block rounded-full"></span>
                    <span className={`w-10 h-10 left-28 absolute rounded-full flex items-center justify-center  cursor-pointer transition-all ${dopBtnStyles}`}>
                        <FaPlus className="text-sm" />
                    </span>
                </div>
                <div className={` w-fit h-fit px-5 py-2 flex items-center justify-center rounded-3xl transition-all ${hardStyles}`}>Medium</div>
            </div>
        </li>
    );
}