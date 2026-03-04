import { useContext, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaCalendar, FaClock } from "react-icons/fa6";
import { IoIosMore } from "react-icons/io";
import { IoClose, IoShareSocialSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { TaskContext } from "../../contexts/ui/TaskContext";
import { TaskFuncBtn } from "../../shared/ui/TaskFuncBtn";
export function Task({ title, about, isOpen, time, day, month, complete }) {

    const mothsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    const ctDate = mothsArr[month]

    const fullCtDate = `${day}${ctDate}`

    const { handleClickTask, handleDeleteTask, handleCompleteTask } = useContext(TaskContext)

    const handleTaskClick = () => {
        handleClickTask(title)
    }

    const handleDeleteBtnClick = () => {
        handleDeleteTask(title)
    }

    const heightStyle = isOpen ? 'min-h-90 text-neutral-100' : 'min-h-60 bg-[var(--task_green)] text-neutral-800'
        , hiddenStyle = isOpen ? 'opacity-100 visible h-20' : 'opacity-0 invisible h-0'
        , penStyle = isOpen ? 'bg-neutral-500 text-neutral-900 pointer-events-none' : 'bg-neutral-900 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'
        , iconStyle = isOpen ? 'bg-neutral-500' : 'bg-[var(--task_green-dark)]'
        , duoStyle = isOpen ? 'text-neutral-50' : 'text-neutral-900'
        , dopStyles = isOpen ? 'bg-neutral-400' : 'bg-neutral-50'
        // , dopBtnStyles = isOpen ? 'bg-neutral-800 text-neutral-100 pointer-events-none' : 'bg-[var(--task_green-dark)] hover:bg-[var(--task_green)]  text-neutral-700'
        , ctStyles = isOpen ? 'bg-neutral-800 text-neutral-100' : 'bg-orange-400 text-neutral-900'
        , more_closeBtnStyle = complete == false ? isOpen ? 'pointer-events-none text-neutral-600 bg-neutral-500' : 'text-neutral-500 bg-neutral-400' : isOpen ? 'pointer-events-none text-neutral-600 bg-neutral-500' : 'text-neutral-100 bg-green-600'

    const [isTaskMenuActive, setIsTaskMenuActive] = useState(false)

    const taskMenuStyle = isTaskMenuActive && complete == false ? 'w-40' : 'w-9'
        , taskMenuBtnCloseIconStyle = complete == false ? isTaskMenuActive ? 'opacity-100' : 'opacity-0' : isTaskMenuActive ? 'opacity-0' : 'opacity-0'
        , taskMenuBtnMoreIconStyle = complete == false ? isTaskMenuActive ? 'opacity-0' : 'opacity-100' : isTaskMenuActive ? 'opacity-0' : 'opacity-0'
        , isCompleteCheckIconStyle = complete ? 'opacity-100' : 'opacity-0'

    const handleClickCompleteTask = () => {
        handleCompleteTask(title)
    }

    return (
        <li className={`w-full transition-all ${heightStyle} rounded-4xl p-5`}>
            <div className="w-full h-fit flex items-center justify-between">
                <span onClick={() => { handleTaskClick() }} className="text-3xl max-w-1/2 flex font-medium">{title}</span>



                <button onClick={() => { handleDeleteBtnClick() }} className={`w-13 h-13 flex items-center justify-center rounded-full outline-2 outline-offset-2 outline-transparent transition-all cursor-pointer ${penStyle}`}><MdDelete className="w-5 h-5" /></button>



            </div>
            <div className={`mt-2 w-full text-base text-neutral-500 flex items-center  transition-all ${hiddenStyle} break-all`}>
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
            <div className={`w-full h-15 rounded-4xl p-3 pl-5 flex  items-center justify-between ${dopStyles} transition-all mt-3`}>
                <div className={`max-w-1/2 w-9 h-full overflow-hidden transition-all ${taskMenuStyle}`}>
                    <div className="w-100 h-full flex gap-1">
                        <button className={`w-9 h-9 rounded-full cursor-pointer transition-all hover:bg-neutral-800 hover:text-neutral-100 flex items-center justify-center ${more_closeBtnStyle}`} onClick={() => {
                            setIsTaskMenuActive(!isTaskMenuActive)
                        }}>
                            <IoIosMore className={`w-7 h-7 transition-all absolute ${taskMenuBtnMoreIconStyle}`} />
                            <IoClose className={`w-7 h-7 transition-all absolute ${taskMenuBtnCloseIconStyle}`} />
                            <FaCheck className={`w-4 h-4 transition-all absolute ${isCompleteCheckIconStyle}`} />
                        </button>
                        <TaskFuncBtn isEditBtn={false} isOpen={isOpen} icon={<IoShareSocialSharp />} />
                        <button onClick={() => { handleClickCompleteTask() }} className="w-9 h-9 rounded-full cursor-pointer transition-all opacity-70 flex items-center justify-center text-neutral-100 hover:opacity-100 bg-green-600">
                            <FaCheck className="w-4 h-4" />
                        </button>

                    </div>
                </div>
                <div className={` w-fit h-fit px-5 py-2 flex items-center justify-center rounded-3xl transition-all text-sm ${ctStyles}`}>Ct: {fullCtDate}</div>
            </div>
        </li>
    );
}