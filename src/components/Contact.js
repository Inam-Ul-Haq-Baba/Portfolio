import React from "react";
import github from "../assets/icons/github.svg"
import linkedin from "../assets/icons/linkedin.svg"
import gmail from "../assets/icons/gmail.svg"
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){

    const myEmail = "peerzadainamwork@gmail.com";

    const [formData, setFormData] = useState({
        name: "",
        subject: "",
        email: "",
        message: ""
    });

    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData((prev) => ({...prev,[name]: value,}));
    }

    async function handleSubmit(e){
        e.preventDefault();

        setLoading(true);
        setStatus("");

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus("Message sent successfully!");

            setFormData({
                name: "",
                subject: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error("EmailJS error:", error);
            setStatus("Unable to send your message. Please try again.");
        } finally {
        setLoading(false);
        }

        // const body = encodeURIComponent(
        //     `Name: ${formData.name}\nSubject: ${formData.subject}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        // )

        
        // window.location.href =  `mailto:${myEmail}?body=${body}`;
    }

    return(
        <div className="text-white flex flex-col justify-center items-start font-sans px-6 md:px-12 my-4 gap-1">
            <p className="font-mono text-yellow-400 font-semibold">GET IN TOUCH</p>
            <p className="text-2xl font-semibold">Let's Connects</p>
            <p className=" text-sm text-gray-500">Have an idea, opportunity, or just want to say hello? I'd love to hear from you.</p>
        
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 pt-4 gap-5 border-t border-zinc-800">
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
                    
                    <form onSubmit={handleSubmit} className="flex flex-col p-4 rounded-lg bg-zinc-900 "> 
                        <p className="text-lg font-semibold my-2">Send a message</p>
                        <label className="text-gray-500 text-sm mb-1"  htmlFor="">Your Name</label>
                        <input className="bg-zinc-700 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="name" type="text" onChange={handleChange} value={formData.name} placeholder="Enter your name" required/>

                        <label className="text-gray-500 text-sm mb-1"  htmlFor="">Your Email</label>
                        <input className="bg-zinc-700 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="email" type="email" onChange={handleChange} value={formData.email} placeholder="Enter your email" required/>

                        <label className="text-gray-500 text-sm mb-1" htmlFor="">Subject</label>
                        <input className="bg-zinc-700 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="subject" type="text" onChange={handleChange} value={formData.subject} placeholder="Subject" required/>

                        <label className="text-gray-500 text-sm mb-1" htmlFor="">Message</label>
                        <textarea className="bg-zinc-700 text-gray-500 rounded-lg text-sm px-3 py-1 mb-2" name="message" onChange={handleChange} value={formData.message} placeholder="Write your message" required/>

                        <button  className="bg-yellow-400 text-black rounded-lg py-2 text-md font-semibold my-2" type="submit" disabled={loading} >  {loading ? "Sending..." : "Send Message ↗"} </button>
                        
                        {/*  Message sent text */}
                        {status && (
                            <p className={`text-sm text-center ${
                                status.includes("successfully")
                                    ? "text-green-400"
                                    : "text-red-400"
                            }`}>
                                {status}
                            </p>
                        )}
                        
                    </form>
            </div>
        </div>
    );
}