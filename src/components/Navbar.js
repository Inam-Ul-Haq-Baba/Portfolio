import React, { useState } from "react";

export default function Navbar({setActiveSection, activeSection}){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar flex justify-between items-center text-white font-mono font-semibold text-sm md:text-md px-10 py-6 border-b-2 border-gray-500">
            <div className="flex justify-between items-center gap-4">
                <span className="flex justify-center items-center h-10 w-10 rounded-lg border-2 border-yellow-400 text-yellow-400 ">IH</span>
                <span className="text-yellow-400 text-lg sm:text-xl md:text-2xl">Inam Ul Haq Baba</span>
            </div>
            
            <div className="hidden md:flex justify-between items-center gap-2 lg:gap-8">
                <button className="rounded-2xl hover:bg-white active:bg-gray-500 hover:text-black px-3 py-1" onClick={()=>setActiveSection("home")}>Home</button>
                <button className="rounded-2xl hover:bg-white active:bg-gray-500 hover:text-black px-3 py-1" onClick={()=>setActiveSection("about")}>About</button>
                <button className="rounded-2xl hover:bg-white active:bg-gray-500 hover:text-black px-3 py-1" onClick={()=>setActiveSection("skills")}>Skills</button>
                <button className="rounded-2xl hover:bg-white active:bg-gray-500 hover:text-black px-3 py-1" onClick={()=>setActiveSection("projects")}>Projects</button>
                <button className="rounded-2xl hover:bg-white active:bg-gray-500 hover:text-black px-3 py-1" onClick={()=>setActiveSection("contact")}>Contact</button>
            </div>
            
            <div className="group block md:hidden">
                <div className="hamburger flex flex-col gap-1 md:hidden" onClick={()=>setIsOpen(!isOpen)}>
                    <div className="h-1 w-7 bg-white rounded-md"></div>
                    <div className="h-1 w-7 bg-white rounded-md"></div>
                    <div className="h-1 w-7 bg-white rounded-md"></div>
                </div>

                <div className={`absolute top-20 right-2  ${isOpen ? "flex" : "hidden"} flex-col justify-start items-start gap-3 bg-white rounded-lg text-black py-2 w-1/3`}>
                    <a className="rounded-2xl hover:bg-black hover:text-white active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => setIsOpen(false)} href="#home">Home</a>
                    <a className="rounded-2xl hover:bg-black hover:text-white active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => setIsOpen(false)} href="#about">About</a>
                    <a className="rounded-2xl hover:bg-black hover:text-white active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => setIsOpen(false)} href="#skills">Skills</a>
                    <a className="rounded-2xl hover:bg-black hover:text-white active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => setIsOpen(false)} href="#projects">Projects</a>
                    <a className="rounded-2xl hover:bg-black hover:text-white active:bg-gray-600 active:text-slate-200 mx-2 px-3 py-1" onClick={() => setIsOpen(false)} href="#contact">Contact</a>
                </div>

            </div>
            
        </div>
    );
}