import { createContext, useEffect, useState } from "react"

export const CreateTaskContext = createContext()

export function CreateTaskContextProvider({ children }) {

    const tasksArr = [['Task 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non voluptatem molestiae.'], ['Task 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non voluptatem molestiae.'], ['Task 3', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non voluptatem molestiae.'], ['Task 4', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem non voluptatem molestiae.'],]

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

    useEffect(() => {
        const newArray = [];
        for (let i = 0; i < countMonthDays; i++) {
            newArray.push(false);
        }
        setStateDuoArr(newArray);

        console.log(newArray);

    }, [countMonthDays, newMonth])

    const handleDuoClick = (index) => {
        setStateDuoArr(prev => {
            const newState = [...prev]
            newState[index] = !newState[index]
            return newState
        })
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
    }

    return (
        <CreateTaskContext.Provider value={value}>
            {children}
        </CreateTaskContext.Provider>
    );
}