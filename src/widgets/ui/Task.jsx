import { useContext } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaCalendar, FaClock } from "react-icons/fa6";
import { CreateTaskContext } from "../../contexts/ui/CreateTaskContext";
import { Teg } from "../../shared/ui/Teg";
export function Task({ title, about, isOpen }) {

    const { handleClickTask } = useContext(CreateTaskContext)

    const handleTaskClick = () => {
        handleClickTask(title)
    }

    const heightStyle = isOpen ? 'h-90 text-neutral-100' : 'min-h-60 bg-[var(--task_green)] text-neutral-800'
        , hiddenStyle = isOpen ? 'opacity-100 visible h-20' : 'opacity-0 invisible h-0'
        , penStyle = isOpen ? 'bg-neutral-500 text-neutral-900 pointer-events-none' : 'bg-neutral-900 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'
        , iconStyle = isOpen ? 'bg-neutral-500' : 'bg-[var(--task_green-dark)]'
        , duoStyle = isOpen ? 'text-neutral-50' : 'text-neutral-900'
        , dopStyles = isOpen ? 'bg-neutral-400' : 'bg-neutral-50'
        // , dopBtnStyles = isOpen ? 'bg-neutral-800 text-neutral-100 pointer-events-none' : 'bg-[var(--task_green-dark)] hover:bg-[var(--task_green)]  text-neutral-700'
        , hardStyles = isOpen ? 'bg-neutral-800 text-neutral-100' : 'bg-orange-400 text-neutral-900'

    return (
        <li onClick={() => { handleTaskClick() }} className={`w-full transition-all ${heightStyle} bg-l- rounded-4xl p-5`}>
            <div className="w-full h-fit flex items-center justify-between">
                <span className="text-3xl max-w-1/2 flex font-medium">{title}</span>
                <button className={`w-13 h-13 flex items-center justify-center rounded-full outline-2 outline-offset-2 outline-transparent transition-all cursor-pointer ${penStyle}`}><FaPencilAlt className="w-5 h-5" /></button>
            </div>
            <div className={`mt-2 w-full text-base text-neutral-500 flex items-center  transition-all ${hiddenStyle}`}>
                {about}
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
            <div className={`w-full h-15 rounded-4xl p-3 flex  items-center justify-between ${dopStyles} transition-all`}>
                <div className="max-w-1/2 w-1/2 h-full flex items-center pl-[10px]">
                    <Teg teg={'A'} />
                    <Teg teg={'B'} />
                    <Teg teg={'B'} />
                    {/* <span className={`w-10 h-10 left-28 absolute rounded-full flex items-center justify-center  cursor-pointer transition-all ${dopBtnStyles}`}>
                        <FaPlus className="text-sm" />
                    </span> */}
                </div>
                <div className={` w-fit h-fit px-5 py-2 flex items-center justify-center rounded-3xl transition-all text-sm ${hardStyles}`}>Ct: 15 Feb</div>
            </div>
        </li>
    );
}