import React from "react";
import AboutImg from "../../assets/About.jpg";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = ["React", "Vue", "TailwindCSS", "Next.js"];
    const backendSkills = ["Python", "MySQL", "Node.js", "Flask"];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20 relative"
        >
            <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4 w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Text / content */}
                    <div className="flex-1">
                        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                            <p className="text-gray-300 mb-6">
                                Passionate Developer with expertise in building scalable web
                                applications and creating innovative solutions.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Frontend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {frontendSkills.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4">Backend</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {backendSkills.map((tech) => (
                                            <span
                                                key={tech}
                                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Education</h3>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>
                                        <strong>BTech in Computer Science and Engineering</strong> -
                                        SRM Institute of Science and Technology Chennai (2022-2026)
                                    </li>
                                    <li>Relevant Coursework: Data Structures, Web Development, Data Analysis</li>
                                </ul>
                            </div>

                            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4">Work Experience</h3>
                                <div className="space-y-4 text-gray-300">
                                    <div>
                                        <h4 className="font-semibold">Data Analyst Intern at 1Stop AI (Jan 2025 - Apr 2025)</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>Worked on AI-driven projects involving real-world datasets.</li>
                                            <li>Applied machine learning techniques for data analysis and automation.</li>
                                            <li>Collaborated with a team to build optimized, data-driven solutions.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold">Frontend Developer Intern at Bharat Intern (Dec 2023 - Jan 2024)</h4>
                                        <ul className="list-disc list-inside space-y-1 ml-4">
                                            <li>Developed responsive UIs using HTML, CSS, and JavaScript.</li>
                                            <li>Enhanced website performance and debugging processes, achieving a 20% improvement.</li>
                                            <li>Delivered new features that improved user retention and engagement metrics by 15%.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="flex-shrink-0">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white/6 shadow-lg transform transition-all hover:-translate-y-2 animate-bounce">
                            <img
                                src={AboutImg}
                                alt="About"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};

export default About;
