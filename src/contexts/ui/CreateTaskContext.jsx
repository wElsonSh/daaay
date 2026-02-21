import { createContext, useEffect, useState } from "react";

export const CreateTaskContext = createContext()

export function CreateTaskContextProvider({ children }) {

    const [tasksArr, setTasksArr] = useState(() => {
        const getData = localStorage.getItem("tasks")
        return getData ? JSON.parse(getData) : []
    })

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasksArr))
    }, [tasksArr])


    const [tasksStatesArr, setTasksStatesArr] = useState([])
        , [taskName, setTaskName] = useState(null)
        , [activeTaskIndex, setActiveTaskIndex] = useState(null)

    const handleClickTask = (title) => {

        setTaskName(title)

        const taskArrLength = tasksArr.length
            , newTaskStateArr = Array(taskArrLength).fill(false)
        tasksArr.forEach((element, index) => {
            if (element[0] == title) {
                if (tasksStatesArr[index] !== true) {
                    newTaskStateArr[index] = true
                    setTasksStatesArr(newTaskStateArr)
                    setActiveTaskIndex(index)
                } else {
                    newTaskStateArr[index] = false
                    setActiveTaskIndex(null)
                    setTasksStatesArr(newTaskStateArr)
                }
            }
        })
    }

    const newDate = new Date()
        , newYear = newDate.getFullYear()
        , newMonth = newDate.getMonth()

    const getCountInMonthDay = (year, month) => {
        return new Date(year, month + 1, 0).getDate()
    }
    const countMonthDays = getCountInMonthDay(newYear, newMonth)

    const [stateDuoArr, setStateDuoArr] = useState([])
        , [timeDuo, setTimeDuo] = useState(null)

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i < countMonthDays; i++) {
            newArray.push(false);
        }
        setStateDuoArr(newArray);

        console.log(newArray);

    }, [countMonthDays, newMonth])

    const handleDuoClick = (index, item) => {
        setStateDuoArr(prev => {
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState
        })
        setTimeDuo(item)
    }

    const handleCreateTask = (title, about, time) => {

        const examination = tasksArr.some(el => JSON.stringify(el[0]) === JSON.stringify(title))
        if (!examination) {
            const newElem = [title, about, time]
            setTasksArr(prev => [...prev, newElem])
        } else {
            alert('arr have this task')
        }
    }

    const value = {
        countMonthDays,
        handleDuoClick,
        stateDuoArr,
        tasksArr,
        handleClickTask,
        tasksStatesArr,
        taskName,
        activeTaskIndex,
        handleCreateTask,
        timeDuo,
    }

    return (
        <CreateTaskContext.Provider value={value}>
            {children}
        </CreateTaskContext.Provider>
    );
}