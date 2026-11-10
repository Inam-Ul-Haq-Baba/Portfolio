import React from "react";
import graduation from "../assets/icons/graduation-cap.svg"
import monitor from "../assets/icons/monitor.svg"
import rocket from "../assets/icons/rocket.svg"
import code from "../assets/icons/code.svg";
import database from "../assets/icons/database.svg";
import lightbulb from "../assets/icons/lightbulb.svg"

export default function About(){
    return(
    <>

    <p className="font-mono text-2xl font-bold text-white px-5 py-4">Get To Know Me</p>
        <div className="about text-white font-sans flex flex-col md:flex-row  justify-between px-5">
            
            <div className="aboutme">
                <p className=" my-2">I'm a developer who enjoys turning ideas into functional and user-friendly web applications. I like working on both frontend and backend development, exploring new technologies and solving problems through code.</p>
                <p className="my-4">I believe in learning by building. Every project gives me an opportunity to explore something new, improve my skills and understand how different technologies work together.</p>
                <hr />
                <p className="text-2xl font-semibold my-4">What i enjoy doing</p>
                <p className="flex my-6"> <img className="w-6" src={code} alt="" /> &nbsp; Building web applications</p>
                <p className="flex my-6"> <img  className="w-6" src={database} alt="" /> &nbsp; Working with backend and databases</p>
                <p className="flex my-6"> <img  className="w-6" src={lightbulb} alt="" /> &nbsp; Learining new technologies</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center mb-4">
                <div className="education bg-zinc-900 px-3 py-3 w-full sm:w-4/5 md:w-3/4 m-2 rounded-lg">
                    <img className="w-8" src={graduation} alt="" />
                    <p className="text-gray-500">Education</p>
                    <p className="text-lg font-semibold">Master of Computer Applications</p>
                    <p className="text-sm text-gray-500">University of Kashmir</p>
                </div>
                <div className="interest bg-zinc-900 px-3 py-3 w-full sm:w-4/5 md:w-3/4 m-2 rounded-lg">
                    <img className="w-8" src={monitor} alt="" />
                    <p className="text-gray-500">Primary Interest</p>
                    <p className="text-lg font-semibold">Full Stack Development</p>
                    <p className="text-sm text-gray-500">Frontend & Backend</p>
                </div>
                <div className="approach bg-zinc-900 px-3 py-3 w-full sm:w-4/5 md:w-3/4 m-2 rounded-lg">
                    <img className="w-8" src={rocket} alt="" />
                    <p className="text-gray-500">My Approach</p>
                    <p className="text-lg font-semibold">Learn by building</p>
                    <p className="text-sm text-gray-500">Hands-on projects</p>
                </div>
                
            </div>
        </div>        
    
    </>
);        
}