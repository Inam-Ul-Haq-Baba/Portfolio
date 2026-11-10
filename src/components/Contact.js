import React from "react";
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import gmail from "../assets/icons/gmail.svg"
import { useState } from "react";

export default function Contact(){

    const myEmail = "peerzadainamwork@gmail.com";

    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({...prev,[name]: value,}));
    }

    function handleSubmit(e){
        e.preventDefault();

        const body = encodeURIComponent(
            `Name: ${formData.name}\nSubject: ${formData.subject}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        )

        window.location.href =  `mailto:${myEmail}?body=${body}`;
    }

    return(
        <div className="text-white flex flex-col justify-center items-start font-sans px-6 md:px-12 my-4 gap-1">
            <p className="font-mono text-yellow-400 font-semibold">GET IN TOUCH</p>
            <p className="text-2xl font-semibold">Let's Connects</p>
            <p className=" text-sm text-gray-500">Have an idea, opportunity, or just want to say hello? I'd love to hear from you.</p>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 gap-5">
                    <div className=" flex flex-col gap-4 w-full">

                        <p className="text-xl font-semibold">Let's talk about something great.</p>
                        <p className="text-sm text-gray-500">I'm always interested in discussing web development, new technologies and opportunities to collaborate.</p>
                        <div className="flex gap-3 items-center">
                            <img className="h-10 bg-yellow-400 px-3 py-3 rounded-full" src={github} alt="" />
                            <a className=" text-lg font-semibold" href="https://github.com/Inam-Ul-Haq-Baba" target="_blank">Github</a>    
                        </div>
                        <div className="flex gap-3 items-center">
                            <img className="h-10 bg-yellow-400 px-3 py-3 rounded-full" src={linkedin} alt="" />
                            <a className=" text-lg font-semibold" href="https://linkedin.com/in/inam-ul-haq-babawork" target="_blank">linkedIn</a>    
                        </div>
                        <div className="flex gap-3 items-center">
                            <img className="h-10 bg-yellow-400 px-3 py-3 rounded-full" src={gmail} alt="" />
                            <a className="" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`} target="_blank">peerzadainamwork@gmail.com</a>    
                        </div>

                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col p-4 rounded-lg bg-gray-900 "> 
                        <p className="text-lg font-semibold my-2">Send a message</p>
                        <label className="text-gray-500 text-sm mb-1"  htmlFor="">Your Name</label>
                        <input className="bg-gray-800 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="name" type="text" onChange={handleChange} value={formData.name} placeholder="Enter your name" required/>

                        <label className="text-gray-500 text-sm mb-1"  htmlFor="">Your Email</label>
                        <input className="bg-gray-800 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="email" type="text" onChange={handleChange} value={formData.email} placeholder="Enter your email" required/>

                        <label className="text-gray-500 text-sm mb-1" htmlFor="">Subject</label>
                        <input className="bg-gray-800 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="subject" type="text" onChange={handleChange} value={formData.subject} placeholder="Subject" required/>

                        <label className="text-gray-500 text-sm mb-1" htmlFor="">Message</label>
                        <textarea className="bg-gray-800 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="message" type="text" onChange={handleChange} value={formData.message} placeholder="Write your message" required/>

                        <input className="bg-yellow-400 text-black rounded-lg py-2 text-md font-semibold my-2" type="submit" value="Send Message ↗️" />
                    </form>
            </div>
        </div>
    );
}