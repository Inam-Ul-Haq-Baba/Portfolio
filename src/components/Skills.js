import React from "react";
import monitor from "../assets/icons/monitor.svg";
import server from "../assets/icons/server.svg";
import wrench from "../assets/icons/wrench.svg";
import code from "../assets/icons/code.svg";
import database from "../assets/icons/database.svg";

export default function Skills(){
    return(
        <div className=" text-white flex flex-col justify-center items-start font-sans px-8 my-4 gap-1">
            <p className="text-2xl font-mono text-yellow-400 font-bold">My Skills</p>
            <p className="text-lg font-semibold">Technologies I work with</p>
            <p className=" text-sm text-gray-500">A collection of technologies and tools I use to build web applications and solve problems.</p>

            <div className="skillDivs grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-5">
                <div className="bg-zinc-900 rounded-lg p-3">
                    <img className="w-8" src={monitor} alt="" />
                    <p className="font-semibold text-lg">Frontend Development</p>
                    <p className=" text-sm text-gray-500">HTML . CSS . Tailwind CSS . JavaScript . jQuery . React.js</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-3">
                    <img className="w-8" src={server} alt="" />
                    <p className="font-semibold text-lg">Backend Development</p>
                    <p className=" text-sm text-gray-500">Node.js · Express.js · REST APIs</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-3">
                    <img className="w-8" src={database} alt="" />
                    <p className="font-semibold text-lg">Databases</p>
                    <p className=" text-sm text-gray-500">MongoDB · MySQL · PostgreSQL</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-3">
                    <img className="w-8" src={code} alt="" />
                    <p className="font-semibold text-lg">Programming Languages</p>
                    <p className=" text-sm text-gray-500">Java · C++ · JavaScript</p>
                </div>
                <div className="bg-zinc-900 rounded-lg p-3">
                    <img className="w-8" src={wrench} alt="" />
                    <p className="font-semibold text-lg">Tools & Technologies</p>
                    <p className=" text-sm text-gray-500">Git · GitHub · Postman · Figma · Docker</p>
                </div>
            </div>
        </div>
        
    );
}