
export function TaskFuncBtn({ isOpen, icon }) {

    const btnStyle = isOpen ? ' text-neutral-900 pointer-events-none' : 'bg-neutral-600 text-neutral-50  hover:bg-neutral-800 hover:outline-neutral-900'

    return (
        <button className={`w-10 h-10 bg-neutral-600 rounded-full cursor-pointer transition-all flex items-center justify-center text-neutral-50 outline-2 outline-transparent outline-offset-1 hover:outline-neutral-600 ${btnStyle}`}>
            {icon}
        </button>
    );
}