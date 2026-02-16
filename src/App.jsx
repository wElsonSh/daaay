import { useState } from "react";
import { CreateTaskContextProvider } from "./contexts/ui/CreateTaskContext";
import { CreateTaskWindow, Header, Task } from "./widgets";
export function App() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <CreateTaskContextProvider>
      <div className="w-full h-screen py-7 px-5 container mx-auto max-w-[768px]">
        <div className="w-full h-full flex flex-col gap-5">

          <Header setIsOpen={setIsOpen} />


          <section className="w-full h-200 relative overflow-x-hidden overflow-y-auto">
            <ul className="absolute w-full h-fit flex flex-col items-center gap-3 py-2">
              <Task />
              <Task />
              <Task />
              <Task />
            </ul>
          </section>
          <CreateTaskWindow isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
    </CreateTaskContextProvider>
  );
}