import React from "react";
import slm from "../assets/images/slm.png";
import gnews from "../assets/images/gnews.png";
import justType from "../assets/images/justType.png";
import portronics from "../assets/images/portronics.png";
import blogsy from "../assets/images/blogsy.png";
import chess from "../assets/images/chess.png";

const projects = [
    {
    title: "Smart Lawn Maintenance",
    description:
      "An Android application that detects weeds in lawn images using a trained YOLOv9 model and displays detection results.",
    tech: ["Java","Python", "FAST API", "Android", "YOLOv9", "ONNX"],
    icon: slm,
    github: "https://github.com/Inam-Ul-Haq-Baba/Smart-Lawn-Maintenance",
    demo: "",
    },
    {
    title: "JustType",
    description:
      "A responsive typing practice web application designed to help users practice and improve their typing skills.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "jQuery"],
    icon: justType,
    github: "https://github.com/Inam-Ul-Haq-Baba/JustType",
    demo: "https://inam-ul-haq-baba.github.io/JustType/",
  },
  {
    title: "Blogsy",
    description:
      "A blog web application where users can explore blog posts through a clean and responsive interface.",
    tech: ["Node.js", "Express.js", "EJS", "Tailwind CSS", "HTMl", "JavaScript"],
    icon: blogsy,
    github: "https://github.com/Inam-Ul-Haq-Baba/Blogsy",
    demo: "https://blogsy-swhh.onrender.com/",
  },
  {
    title: "G-News",
    description:
      "A news web project built to explore frontend development and displaying news content.",
    tech: ["React", "JavaScript", "Tailwind CSS"],
    icon: gnews,
    github: "https://github.com/Inam-Ul-Haq-Baba/G-News",
    demo: "",
  },
  {
    title: "Portronics Clone",
    description:
      "A frontend recreation of an electronics e-commerce website with a responsive user interface.",
    tech: ["HTML", "Tailwind CSS"],
    icon: portronics,
    github: "https://github.com/Inam-Ul-Haq-Baba/Portronics-Clone-Tailwind",
    demo: "https://inam-ul-haq-baba.github.io/Portronics-Clone-Tailwind/",
  },
  {
    title: "Chess Simulation",
    description:
      "An interactive chessboard built with React, featuring dynamically generated squares and piece movement highlighting.",
    tech: ["React", "JavaScript", "CSS"],
    icon: chess,
    github: "https://github.com/Inam-Ul-Haq-Baba/Chess-Simulation",
    demo: "",
  }
];

export default function Projects(){
    return(
        <div className=" text-white flex flex-col justify-center items-start font-sans px-8 my-4 gap-1">
                    <p className="font-mono text-yellow-400 font-semibold">WHAT I'VE BUILT</p>
                    <p className="text-2xl font-semibold">My Projects</p>
                    <p className=" text-sm text-gray-500">Some projects I've worked on while exploring and improving my development skills.</p>
        
                    <div className="projectDivs grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-5">
                        {
                            projects.map((project,index)=>(
                                <div key={project.title} className="bg-zinc-900 rounded-lg p-3">
                                    <div className="flex justify-center p-3 bg-zinc-700 rounded-lg my-2">
                                        <img className="w-24" src={project.icon} alt="" />
                                    </div>
                                    
                                    <p className="font-semibold text-lg my-2">{project.title}</p>
                                    <p className=" text-sm text-gray-500 my-2">{project.description}</p>
                                    <div className="my-2">
                                        {
                                            project.tech.map((technology)=>(
                                                <span className="text-yellow-400" key={technology}>{technology} . </span>
                                            ))
                                        }
                                    </div>
                                    <div className="flex gap-4 pt-3 border-t border-zinc-700">

                                        {project.github && (
                                            <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-300 hover:text-yellow-400"
                                            >
                                            GitHub ↗
                                            </a>
                                        )}

                                        {project.demo && (
                                            <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-gray-300 hover:text-yellow-400"
                                            >
                                            Live Demo ↗
                                            </a>
                                        )}

                                    </div>
                                </div>
                            ))
                        }
                        
                    </div>
                </div>
    );
}