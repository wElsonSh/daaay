import { useContext } from "react";
import { FaCalendar, FaClock, FaPencil } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../../contexts/ui/TaskContext";
import { TaskFuncBtn } from "../../shared/ui/TaskFuncBtn";
export function Task({ title, about, isOpen, time, day, month }) {

    const mothsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const ctDate = mothsArr[month]

    const fullCtDate = `${day}${ctDate}`

    const { handleClickTask, handleDeleteTask } = useContext(TaskContext)

    const handleTaskClick = () => {
        handleClickTask(title)
    }

    const handleDeleteBtnClick = () => {
        handleDeleteTask(title)
    }

    const heightStyle = isOpen ? 'min-h-90 text-neutral-100' : 'min-h-60 bg-[var(--task_green)] text-neutral-800'
        , hiddenStyle = isOpen ? 'opacity-100 visible h-20' : 'opacity-0 invisible h-0'
        , penStyle = isOpen ? 'bg-neutral-500 text-neutral-900 pointer-events-none' : 'bg-neutral-900 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'
        , stateStyle = isOpen ? 'bg-neutral-900 pointer-events-none' : 'bg-rose-600 text-neutral-50'
        , iconStyle = isOpen ? 'bg-neutral-500' : 'bg-[var(--task_green-dark)]'
        , duoStyle = isOpen ? 'text-neutral-50' : 'text-neutral-900'
        , dopStyles = isOpen ? 'bg-neutral-400' : 'bg-neutral-50'
        // , dopBtnStyles = isOpen ? 'bg-neutral-800 text-neutral-100 pointer-events-none' : 'bg-[var(--task_green-dark)] hover:bg-[var(--task_green)]  text-neutral-700'
        , hardStyles = isOpen ? 'bg-neutral-800 text-neutral-100' : 'bg-orange-400 text-neutral-900'

    return (
        <li className={`w-full transition-all ${heightStyle} bg-l- rounded-4xl p-5`}>
            <div className="w-full h-fit flex items-center justify-between">
                <span onClick={() => { handleTaskClick() }} className="text-3xl max-w-1/2 flex font-medium">{title}</span>



                <button onClick={() => { handleDeleteBtnClick() }} className={`w-13 h-13 flex items-center justify-center rounded-full outline-2 outline-offset-2 outline-transparent transition-all cursor-pointer ${penStyle}`}><MdDelete className="w-5 h-5" /></button>



            </div>
            <div className={`mt-2 w-full text-base text-neutral-500 flex items-center  transition-all ${hiddenStyle}`}>
                {about}
            </div>
            <div className="w-11/12 h-20 flex items-center mx-auto">
                <div className="w-40 h-full flex items-center gap-2 text-neutral-900 text-lg">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full ${iconStyle} transition-all`}><FaCalendar /></span>
                    <span className={`${duoStyle} transition-all`}>{time}</span>
                </div>
                <div className="w-40 h-full flex items-center gap-2 text-neutral-900 text-lg">
                    <span className={`w-12 h-12 flex items-center justify-center rounded-full ${iconStyle} transition-all`}><FaClock /></span>
                    <span className={`${duoStyle} transition-all`}>14:16pm</span>
                </div>
            </div>
            <div className={`w-full h-15 rounded-4xl p-3 flex  items-center justify-between ${dopStyles} transition-all mt-3`}>
                <div className="max-w-1/2 w-1/2 h-full flex items-center pl-[10px] gap-2">
                    <button className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-neutral-50 outline-2 outline-dashed outline-transparent outline-offset-1 hover:outline-neutral-800 transition-all ${stateStyle}`}>
                        <IoClose className="w-5 h-5" />
                    </button>
                    <TaskFuncBtn isOpen={isOpen} icon={<FaPencil />} />
                </div>
                <div className={` w-fit h-fit px-5 py-2 flex items-center justify-center rounded-3xl transition-all text-sm ${hardStyles}`}>Ct: {fullCtDate}</div>
            </div>
        </li>
    );
}