import { useContext, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { TaskContext } from "../../contexts/ui/TaskContext";

export function CreateTaskWindow({ isOpen, setIsOpen }) {
    const newDate = new Date()
        , newMonth = newDate.getMonth()

    const { countMonthDays, handleDuoClick, stateDuoArr, handleCreateTask, timeDuo } = useContext(TaskContext)

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

    const inputTitleRef = useRef(null)
        , inputAboutRef = useRef(null)

    const handleClickCreateTask = () => {
        const inputTitleValue = inputTitleRef.current.value
            , inputAboutValue = inputAboutRef.current.value
        if (inputTitleValue && inputAboutValue && timeDuo) {
            handleCreateTask(inputTitleValue, inputAboutValue, timeDuo)
            setIsOpen(false)
            inputTitleRef.current.value = ''
            inputAboutRef.current.value = ''
        } else {
            alert('Enter text on all textarea!')
        }
    }

    return (
        <div className={`w-full h-screen absolute left-0 top-0 bg-neutral-800/70 ${vsibleStyle} transition-all`}>
            <div className="w-full h-auto bg-[var(--task_red)] absolute bottom-0 rounded-t-4xl px-10 py-12 flex flex-col gap-5">
                <button className="absolute top-3 right-3 cursor-pointer w-10 h-10 flex items-center justify-center bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all active:bg-neutral-950" onClick={() => { setIsOpen(false) }}><IoClose className="w-6 h-6 text-neutral-50" /></button>
                <div className="text-4xl text-neutral-800 font-semibold">Hey, Create new task</div>
                <div className="w-full h-fit flex flex-col gap-2">
                    <label htmlFor="taskTitle" className="text-lg text-neutral-800 font-medium">Task Title:</label>
                    <input ref={inputTitleRef} id="taskTitle" type="text" className="w-full h-15 rounded-4xl border-2 border-[var(--task_red-dark)] focus:outline-0 px-7 text-neutral-800 text-base" placeholder="Medium" maxLength={20} />

                    <label htmlFor="taskDetails" className="text-lg mt-3 text-neutral-800 font-medium">Task Details:</label>
                    <textarea ref={inputAboutRef} id="taskDetails" type="text" className="w-full h-30 rounded-3xl border-2 border-[var(--task_red-dark)] focus:outline-0 px-7 py-3 text-neutral-800 text-base" placeholder="Medium" maxLength={150} />

                    <label htmlFor="taskDate" className="text-lg mt-3 text-neutral-800 font-medium">Duo Date</label>
                    <div id="taskDate" className="w-full h-20">
                        <div onWheel={handleDateInpputScroll} ref={dateInputRef} className="w-full h-15 bg-neutral-900 rounded-4xl  relative overflow-y-hidden overflow-x-auto px-4">
                            <ul className="w-fit h-full flex gap-2 items-center absolute">
                                {monthArr.length > 0 ? (
                                    monthArr.map((item, index) => (
                                        <button
                                            onClick={() => handleDuoClick(index, item)}
                                            key={index}
                                            className={`w-20 h-10 flex items-center justify-center text-sm transition-all rounded-4xl outline-2 outline-offset-2 cursor-pointer ${stateDuoArr[index] ? 'bg-[var(--task_red-dark)] text-neutral-100 outline-neutral-100 hover:bg-[var(--task_red)]' : 'bg-neutral-500 text-neutral-900 outline-transparent hover:text-neutral-100 hover:bg-neutral-400 active:bg-neutral-700 '} ${indexDuoActive !== index && indexDuoActive !== null ? 'pointer-events-none' : 'pointer-events-auto'}`}
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

                    <button className="w-full h-13 bg-neutral-900 rounded-3xl text-base font-medium hover:bg-neutral-800 transition-all cursor-pointer active:bg-neutral-950" onClick={() => { handleClickCreateTask() }}>Create Task</button>
                </div>
            </div>
        </div >
    );
}