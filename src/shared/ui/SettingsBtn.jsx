import { useState } from "react";

export function SettingsBtn() {

    const [isSetingActive, setIsSetingActive] = useState(false)

    const settingBtnStyle = isSetingActive ? 'left-10 bg-neutral-100' : 'left-1 bg-neutral-500'

    return (
        <>
            <div onClick={() => { setIsSetingActive(!isSetingActive) }} className="w-18 h-9 bg-neutral-800 rounded-4xl cursor-pointer relative flex items-center p-1 transition-all $"><span className={`block w-7 h-7 rounded-full  transition-all absolute ${settingBtnStyle}`}></span></div>
        </>
    );
}