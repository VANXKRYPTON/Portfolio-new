import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "@emailjs/browser";

// example info (replace with yours)
const EMAIL = "adityakumar08092004@gmail.com";
const PHONE = "+91-7903740116";
const LOCATION = "Potheri, Chennai, Tamil Nadu, India";
const LINKEDIN = "https://www.linkedin.com/in/aditya-kumar-661b02271/";
const GITHUB = "https://github.com/VANXKRYPTON";
const INSTAGRAM = "https://www.instagram.com/adityajze/";

export const Contact = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
});

const SERVICE_ID = "service_e8jbeps";
const TEMPLATE_ID = "template_pplzun8";
const PUBLIC_KEY = "vQe3XzTVrXWTpZSYf";

const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
    .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => alert("Oops! Something went wrong. Please try again."));
};

return (
    <section
    id="contact"
    className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
    <RevealOnScroll>
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* LEFT: Info + Social */}
        <div className="flex-1 text-white flex flex-col gap-8 items-start justify-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent">
            Get in <span className="text-purple-400">Touch</span>
            </h2>
            <p className="text-lg mb-2 text-gray-300">
            I'm always open to connect, collaborate, or chat about exciting web development ideas and opportunities!
            </p>
            <div className="flex flex-col gap-4 text-base">
            <div className="flex items-center gap-3">
                <span className="bg-purple-900 rounded-full p-2">
                  {/* Mail icon */}
                <svg width="24" height="24" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="M4 4l8 8 8-8"/></svg>
                </span>
                <span><strong>Email</strong><br />{EMAIL}</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="bg-purple-900 rounded-full p-2">
                  {/* Phone icon */}
                <svg width="24" height="24" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 01-2.18 2A19.86 19.86 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72 13 13 0 000 3.08A2 2 0 018 9.13l3.1 3.11a2 2 0 012-.44c.42.16.84.34 1.22.56a2 2 0 01.72 2v2.09a2 2 0 01-2 2z"/></svg>
                </span>
                <span><strong>Phone</strong><br />{PHONE}</span>
            </div>
            <div className="flex items-center gap-3">
                <span className="bg-purple-900 rounded-full p-2">
                  {/* Location icon */}
                <svg width="24" height="24" fill="none" stroke="#a78bfa" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/></svg>
                </span>
                <span><strong>Location</strong><br />{LOCATION}</span>
            </div>
            </div>
            {/* Social Icons */}
            <div className="mt-6 flex gap-6 items-center">
            <span className="font-medium text-white/80">Connect with Me</span>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-blue-500 transition">
                {/* LinkedIn */}
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3A2 2 0 0121 5V19A2 2 0 0119 21H5A2 2 0 013 19V5A2 2 0 015 3ZM8 7A2 2 0 106 9A2 2 0 008 7ZM6 18H10V10H6V18ZM12 18H16V14.5A1.5 1.5 0 0118 13V10A3 3 0 0014 10V12A1 1 0 0112 12V18Z"/></svg>
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-pink-500 transition">
                {/* Instagram */}
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.242 1.314 3.608.059 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.242 1.252-3.608 1.314-1.265.059-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.242-1.314-3.608C2.175 15.646 2.163 15.266 2.163 12s.012-3.584.07-4.849c.062-1.366.34-2.633 1.314-3.608C4.522 2.503 5.789 2.226 7.155 2.163 8.42 2.104 8.8 2.163 12 2.163zm0 1.65c-3.168 0-3.484.012-4.701.067-1.117.05-1.719.24-2.117.4-.427.167-.74.389-1.167.816-.427.427-.649.74-.816 1.167-.16.398-.35 1-.4 2.117-.054 1.218-.067 1.533-.067 4.701s.012 3.483.067 4.701c.05 1.118.24 1.719.4 2.117.167.427.389.74.816 1.167.427.427.74.649 1.167.816.398.16 1 .35 2.117.4 1.218.054 1.533.067 4.701.067s3.484-.012 4.701-.067c1.117-.05 1.719-.24 2.117-.4.427-.167.74-.389 1.167-.816.427-.427.649-.74.816-1.167.16-.398.35-1 .4-2.117.054-1.218.067-1.533.067-4.701s-.012-3.483-.067-4.701c-.05-1.118-.24-1.719-.4-2.117-.167-.427-.389-.74-.816-1.167-.427-.427-.74-.649-1.167-.816-.398-.16-1-.35-2.117-.4C15.483 3.825 15.168 3.813 12 3.813zm0 4.285a3.902 3.902 0 100 7.804 3.902 3.902 0 000-7.804zm0 6.495A2.593 2.593 0 1112 8.993a2.593 2.593 0 010 5.19zm4.309-6.175a.936.936 0 11-1.872 0 .936.936 0 011.872 0z"/></svg>
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-gray-400 transition">
                {/* GitHub */}
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.109-1.461-1.109-1.461-.908-.621.069-.609.069-.609 1.003.07 1.529 1.032 1.529 1.032.892 1.529 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.271.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 7.844a9.566 9.566 0 012.5.337c1.909-1.295 2.748-1.025 2.748-1.025.546 1.379.202 2.397.099 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.944.359.309.679.924.679 1.861 0 1.343-.013 2.428-.013 2.758 0 .269.18.579.688.481C19.136 20.16 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            </div>
        </div>
          {/* RIGHT: Contact form */}
        <div className="flex-1">
            <div className="bg-[#181826] shadow-2xl rounded-3xl p-8 w-full max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-center mb-7 text-white">Send me a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    className="w-full bg-black/70 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                    placeholder="Your name....."
                    onChange={e =>
                    setFormData({ ...formData, name: e.target.value })
                    }
                />
                </div>
                <div>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    className="w-full bg-black/70 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                    placeholder="xyz@gmail.com.."
                    onChange={e =>
                    setFormData({ ...formData, email: e.target.value })
                    }
                />
                </div>
                <div>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    className="w-full bg-black/70 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 transition focus:outline-none focus:border-purple-500 focus:bg-purple-500/5"
                    placeholder="Write here....."
                    onChange={e =>
                    setFormData({ ...formData, message: e.target.value })
                    }
                />
                </div>
                <button
                type="submit"
                className="w-full bg-purple-400 text-white py-3 px-6 rounded-full font-semibold text-lg transition hover:bg-purple-500 flex items-center justify-center gap-2"
                >
                Send me
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="white" strokeWidth="2" className="inline-block" viewBox="0 0 24 24">
                    <path d="M2 12l19-7-7 19-2-8 8-2"/>
                    </svg>
                </span>
                </button>
            </form>
            </div>
        </div>
        </div>
    </RevealOnScroll>
    </section>
);
};
