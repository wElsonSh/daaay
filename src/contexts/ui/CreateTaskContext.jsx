import { createContext, useEffect, useState } from "react"

export const CreateTaskContext = createContext()

export function CreateTaskContextProvider({ children }) {
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
            console.log('Новое состояние!', newState);
            return newState
        })
    }

    const value = {
        countMonthDays,
        handleDuoClick,
    }

    return (
        <CreateTaskContext.Provider value={value}>
            {children}
        </CreateTaskContext.Provider>
    );
}