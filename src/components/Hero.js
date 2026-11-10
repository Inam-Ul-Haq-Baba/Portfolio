import React from "react";
import logo from "../assets/images/logo.svg";
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import gmail from "../assets/icons/gmail.svg"

export default function Hero(){
    return(
    <>
        <div className="hero flex flex-col-reverse items-center justify-center sm:flex-row text-white px-8 py-6 border-b-2 border-gray-500 w-full">

            <div className="description flex flex-col items-center sm:items-start gap-5 w-full sm:w-3/5">
                <div className="font-mono text-lg"> Hi, I'm <span className="text-2xl text-yellow-400 font-bold">Inam Ul Haq Baba</span></div>
                <div className="text-xl font-bold">Full Stack Developer</div>
                <div className="text-left text-gray-300">I enjoy building things for the web, from designing interactive interfaces to working on backend functionality. I'm always curious to learn something new and enjoy taking on challenges that help me grow as a developer.</div>
                <a className=" px-3 py-2 rounded-lg text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black" href="/Inam-Ul-Haq-Baba-Resume.pdf" download="Inam-Ul-Haq-Baba-Resume.pdf">Download CV</a>
                <div className="flex justify-start items-center gap-5">
                    <a className="bg-yellow-400 px-3 py-3 rounded-full" href="https://github.com/Inam-Ul-Haq-Baba" target="_blank">
                        <img className="h-10" src={github} alt="" />
                    </a>
                    <a className="bg-yellow-400 px-3 py-3 rounded-full" href="https://linkedin.com/in/inam-ul-haq-babawork" target="_blank">
                        <img className="h-10" src={linkedin} alt="" />
                    </a>
                    <a className="bg-yellow-400 px-3 py-3 rounded-full" href="">
                        <img className="h-10" src={gmail} alt="" />
                    </a>
                </div>

                <div className="mt-8 bg-zinc-900 border border-zinc-800 rounded-xl p-5 max-w-md font-mono text-sm">
                    <p className="text-purple-400">
                        const <span className="text-yellow-400">developer</span> = {"{"}
                    </p>

                    <div className="pl-4 mt-2 space-y-2 text-gray-300">
                        <p>name: <span className="text-green-300">"Inam Ul Haq Baba"</span>,</p>
                        <p>role: <span className="text-green-300">"Full Stack Developer"</span>,</p>
                        <p>passion: <span className="text-green-300">"Building useful things"</span></p>
                    </div>

                    <p className="text-purple-400 mt-2">{"};"}</p>
                </div>
            </div>

            <div className="profilePic flex justify-center w-full sm:w-2/5">
                <img className="w-2/3 sm:w-4/5" src={logo} alt="" />
            </div>

        </div>
    </>
    );
}