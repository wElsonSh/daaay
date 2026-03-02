import Aos from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect, useState } from "react";
import { TaskContext } from "../../contexts/ui/TaskContext";
import { CreateTaskWindow } from "./CreateTaskWindow";
import { Header } from "./Header";
import { Task } from "./Task";


export function Main() {

    const { tasksArr, activeTaskIndex } = useContext(TaskContext)

    useEffect(function () {
        Aos.init({ duration: 500 });
    }, []);

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div data-aos="fade-right" className="py-7 px-5 w-full h-full flex flex-col gap-5 main_win transition-all">

            <Header setIsOpen={setIsOpen} />


            <section className="w-full h-200 relative overflow-x-hidden overflow-y-auto">
                <ul className="absolute w-full h-fit flex flex-col items-center gap-3 py-2">
                    {tasksArr.map((item, index) => (
                        <Task key={item} isOpen={activeTaskIndex === index ? true : false} title={tasksArr[index][0]} about={tasksArr[index][1]} time={tasksArr[index][2]} day={tasksArr[index][3]} month={tasksArr[index][4]} />
                    ))}
                </ul>
            </section>
            <CreateTaskWindow isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    );
}