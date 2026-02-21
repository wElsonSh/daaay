import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HiArrowSmLeft } from "react-icons/hi";
import { Link } from "react-router";
import { SettingsBtn } from "../../shared/ui/SettingsBtn";

export function Profile() {

    useEffect(function () {
        Aos.init({ duration: 500 });
    }, []);
    return (
        <div data-aos="fade-left" className="py-7 px-5 w-full h-200 profile_win transition-all">
            <header className="w-full cursor-pointer flex flex-col gap-5">
                <div className="w-full h-fit flex justify-between items-start">
                    <Link to="/" className="text-neutral-600 w-11 h-11 flex items-center justify-center bg-neutral-900 rounded-full transition-all  hover:bg-neutral-800 hover:text-neutral-100 active:bg-neutral-800/50"><HiArrowSmLeft className="w-9 h-9" smooth={true} duration={500} /></Link>
                    <div className="w-12 h-12 bg-neutral-500 rounded-full outline-2 outline-offset-2 outline-neutral-400 cursor-pointer hover:outline-neutral-300 transition-all"></div>
                </div>
                <div className="w-full h-fit">
                    <div className="w-full h-fit flex items-center justify-between text-4xl">
                        Profile
                    </div>
                </div>
            </header>
            <section className="w-full h-fit">
                <div className="w-full mt-10">
                    <span className="text-base text-neutral-500 mt-10">Settings</span>
                    <ul className="w-full h-fit flex flex-col gap-4">
                        <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                            Light mode:
                            <SettingsBtn />
                        </li>
                        <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                            Some setting:
                            <SettingsBtn />
                        </li>
                        <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                            More setting:
                            <SettingsBtn />
                        </li>
                        <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                            Vafli:
                            <SettingsBtn />
                        </li>

                        <span className="text-base text-neutral-500 mt-10">Settings</span>
                        <ul className="w-full h-fit flex flex-col gap-4">
                            <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                                Light mode:
                                <SettingsBtn />
                            </li>
                            <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                                Some setting:
                                <SettingsBtn />
                            </li>
                            <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                                More setting:
                                <SettingsBtn />
                            </li>
                            <li className="w-full h-fit flex items-center justify-between text-2xl text-neutral-100">
                                Vafli:
                                <SettingsBtn />
                            </li>
                        </ul>
                    </ul>
                </div>
            </section>
        </div>
    );
}