import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                            <h3 className="text-xl font-bold mb-2">Random Best Quote Generator</h3>
                            <p className="text-gray-400 mb-4">
                                Built a Random Quote generator spoken by famous people
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {[ "HTML", "CSS", "JavaScript"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://random-best-quote-generator.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Weather Forecast App</h3>
                            <p className="text-gray-400 mb-4">
                                Build a Weather App with OpenWeatherMap API integration for real updates
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://weather-app-psi-rust-4ny5yimj03.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Currency Converter</h3>
                            <p className="text-gray-400 mb-4">
                                Converts Currency using Fetch currency API integration for current updates
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://currency-converter-beta-pied.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>

                        <div className="glass p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2">Tic Tac Toe Game</h3>
                            <p className="text-gray-400 mb-4">
                                Basic Tic Tac Toe Game for time pass
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTML", "CSS", "JavaScript"].map((tech) => (
                                    <span
                                        key={tech}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://basic-tic-tac-toe-one.vercel.app/" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                    View Project →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
