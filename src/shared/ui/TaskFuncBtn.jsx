import { useContext } from "react";
import { TaskContext } from "../../contexts/ui/TaskContext";
export function TaskFuncBtn({ isEditBtn, isOpen, icon }) {

    const { handleChangeTaskEditorState } = useContext(TaskContext)

    const btnStyle = isOpen ? ' text-neutral-900 pointer-events-none' : 'bg-neutral-600 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'

    return (
        <button onClick={() => {
            isEditBtn ? handleChangeTaskEditorState() : null
        }} className={`w-9 h-9 bg-neutral-600 rounded-full cursor-pointer transition-all flex items-center justify-center text-neutral-50  ${btnStyle}`}>
            {icon}
        </button>
    );
}