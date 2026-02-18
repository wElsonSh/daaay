import { BrowserRouter, Route, Routes } from 'react-router';
import { CreateTaskContextProvider } from "./contexts/ui/CreateTaskContext";
import { Main } from './widgets/ui/Main';
import { Profile } from './widgets/ui/Profile';
export function App() {

  return (
    <CreateTaskContextProvider>
      <BrowserRouter>

        <div className="w-full h-screen py-7 px-5 container mx-auto max-w-[768px]">
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </CreateTaskContextProvider>
  );
}