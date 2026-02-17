import { useContext, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { CreateTaskContext } from "../../contexts/ui/CreateTaskContext";

export function CreateTaskWindow({ isOpen, setIsOpen }) {
    const newDate = new Date()
        , newMonth = newDate.getMonth()

    const { countMonthDays, handleDuoClick, stateDuoArr } = useContext(CreateTaskContext)

    const [indexDuoActive, setIndexDuoActive] = useState(null)

    useEffect(() => {
        stateDuoArr.forEach((item, index) => {
            if (item && indexDuoActive == null) {
                setIndexDuoActive(index)
            }
            if (!item && indexDuoActive == index) {
                setIndexDuoActive(null)
            }
        })
    }, [stateDuoArr])

    const mothsArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        , [monthArr, setMonthArr] = useState([])

    useEffect(() => {
        const arr = []
        for (let i = 1; i <= countMonthDays; i++) {
            const newDay = i + ` ${mothsArr[newMonth]}`
            arr.push(newDay)
        }
        setMonthArr(arr)
    }, [countMonthDays, newMonth])
    useEffect(() => {
        console.log(monthArr);

    }, [monthArr])

    const vsibleStyle = isOpen ? 'opacity-100 visible h-screen' : 'opacity-0 invisible h-0'

    const dateInputRef = useRef(null)

    const handleDateInpputScroll = (e) => {
        if (dateInputRef.current) {
            dateInputRef.current.scrollLeft += e.deltaY;
        }
    }

    const handleCloseCreateTaskWindow = () => {
        setIsOpen(false)
        console.log("hello world!");
    }

    return (
        <div className={`w-full h-screen absolute left-0 top-0 bg-neutral-800/70 ${vsibleStyle} transition-all`}>
            <div className="w-full h-10/12 bg-[var(--task_red)] absolute bottom-0 rounded-t-4xl px-10 py-15 flex flex-col gap-10">
                <button className="absolute top-7 right-7 cursor-pointer w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:bg-neutral-950" onClick={() => { setIsOpen(false) }}><IoClose className="w-6 h-6 text-neutral-50" /></button>
                <div className="text-4xl text-neutral-800 font-semibold">Hey, Create new task</div>
                <div className="w-full h-fit flex flex-col gap-2">
                    <label htmlFor="taskTitle" className="text-lg text-neutral-800 font-medium">Task Title:</label>
                    <input id="taskTitle" type="text" className="w-full h-20 rounded-4xl border-2 border-[var(--task_red-dark)] focus:outline-0 px-10 text-neutral-800 text-base" placeholder="Medium" maxLength={20} />

                    <label htmlFor="taskDetails" className="text-lg mt-3 text-neutral-800 font-medium">Task Details:</label>
                    <textarea id="taskDetails" type="text" className="w-full h-42 rounded-3xl border-2 border-[var(--task_red-dark)] focus:outline-0 px-10 py-5 text-neutral-800 text-base" placeholder="Medium" maxLength={150} />

                    <label htmlFor="taskDate" className="text-lg mt-3 text-neutral-800 font-medium">Duo Date</label>
                    <div id="taskDate" className="w-full h-20">
                        <div onWheel={handleDateInpputScroll} ref={dateInputRef} className="w-full h-17 bg-neutral-900 rounded-4xl  relative overflow-y-hidden overflow-x-auto px-4">
                            <ul className="w-fit h-full flex gap-2 items-center absolute">
                                {monthArr.length > 0 ? (
                                    monthArr.map((item, index) => (
                                        <button
                                            onClick={() => handleDuoClick(index)}
                                            key={index}
                                            className={`w-24 h-10 flex items-center justify-center text-sm transition-all rounded-4xl outline-2 outline-offset-2 cursor-pointer ${stateDuoArr[index] ? 'bg-[var(--task_red-dark)] text-neutral-100 outline-neutral-100 hover:bg-[var(--task_red)]' : 'bg-neutral-500 text-neutral-900 outline-transparent hover:text-neutral-100 hover:bg-neutral-400 active:bg-neutral-700 '} ${indexDuoActive !== index && indexDuoActive !== null ? 'pointer-events-none' : 'pointer-events-auto'}`}
                                        >
                                            {item}
                                        </button>
                                    ))
                                ) : (
                                    <li className="text-white">Нет данных</li>
                                )}

                            </ul>
                        </div>
                    </div>

                    <button className="w-full h-20 mt-10 bg-neutral-900 rounded-3xl text-2xl font-medium hover:bg-neutral-800 transition-all cursor-pointer active:bg-neutral-950" onClick={() => { handleCloseCreateTaskWindow() }}>Create Task</button>
                </div>
            </div>
        </div >
    );
}