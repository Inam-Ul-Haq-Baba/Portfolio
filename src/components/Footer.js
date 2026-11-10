
import React from "react";

import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import gmail from "../assets/icons/gmail.svg";

export default function Footer({ setActiveSection }) {

    const currentYear = new Date().getFullYear();

    return (
        <footer className=" text-white px-6 md:px-12 py-3 border-t border-zinc-800">

            {/* Top section */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-5">

                {/* Logo and name */}
                <div className="text-center sm:text-left">
                    <h2 className="text-2xl font-bold text-yellow-400">
                        Inam.
                    </h2>

                    <p className="text-sm text-gray-500">
                        Full Stack Developer
                    </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-5">

                    <a
                        href="https://github.com/Inam-Ul-Haq-Baba"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={github}
                            alt="GitHub"
                            className="h-8 w-8 bg-yellow-400 p-1.5 rounded-full hover:scale-110 transition"
                        />
                    </a>

                    <a
                        href="https://linkedin.com/in/inam-ul-haq-babawork"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="h-8 w-8 bg-yellow-400 p-1.5 rounded-full hover:scale-110 transition"
                        />
                    </a>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=peerzadainamwork@gmail.com">
                        <img
                            src={gmail}
                            alt="Email"
                            className="h-8 w-8 bg-yellow-400 p-1.5 rounded-full hover:scale-110 transition"
                        />
                    </a>

                </div>

            </div>

            {/* Navigation */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-20 my-6 text-sm text-gray-400">

                {["home", "about", "skills", "projects", "contact"].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className="capitalize hover:text-yellow-400 transition"
                    >
                        {section}
                    </button>
                ))}

            </div>

            {/* Bottom section */}
            <div className="border-t border-zinc-800 pt-5 text-center">

                <p className="text-sm text-gray-500">
                    © {currentYear} Inam Ul Haq Baba. All rights reserved.
                </p>

                <p className="text-xs text-yellow-400 mt-2">
                    Designed & Built with React and Tailwind CSS
                </p>

            </div>

        </footer>
    );
}
