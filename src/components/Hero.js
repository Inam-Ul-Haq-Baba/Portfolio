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
            </div>

            <div className="profilePic flex justify-center w-full sm:w-2/5">
                <img className="w-2/3 sm:w-full" src={logo} alt="" />
            </div>

        </div>
        <div className="techstack px-8 flex flex-col items-center sm:items-start gap-2 my-4">
            <p className="text-gray-400">My Tech Stack</p>
            <div className="techs grid grid-cols-3 sm:flex gap-5">
                <div className="techBtn">HTML</div>
                <div className="techBtn">CSS</div>
                <div className="techBtn">Tailwind CSS</div>
                <div className="techBtn">JavaScript</div>
                <div className="techBtn">jQuery</div>
                <div className="techBtn">Node.js</div>
                <div className="techBtn">Express.js</div>
                <div className="techBtn">React.js</div>
                <div className="techBtn">PostgreSQL</div>
                <div className="techBtn">MySQL</div>
                <div className="techBtn">MongoDB</div>
            </div>
                
        </div>
    </>
    );
}