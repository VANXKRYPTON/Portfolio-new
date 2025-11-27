import { RevealOnScroll } from "../RevealOnScroll";
import ProfileImg from "../../assets/Profile.jpg";

export const Home = () => {
    const highlights = [
        "Alumnus of DPS Patna",
        "B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology",
        "Strong blend of creativity, team leadership, and physical discipline",
        "Passionate about problem-solving and technological innovation",
        "Skilled in creative writing, content creation, and critical thinking",
        "Football enthusiast, gamer, music lover, and web series fan",
        "Goal: Contribute meaningfully to tech industry through innovative solutions"
    ];

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-black"
        >
            <RevealOnScroll> 
            <div className="flex flex-col md:flex-row items-center justify-center w-full gap-10 md:gap-20">
                
                <div
className="flex-shrink-0 mr-0 md:mr-10"
style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '-2.5rem', // pulls the image upward closer to bullets
    zIndex: 10,
    position: 'relative'
}}
>
<div
    className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl"
    style={{
    boxShadow: "0 8px 50px #3b82f6bf, 0 0 32px #a78bfa99",
    border: "6px solid #3b82f6",
    background: "#181326",
      transform: "translateY(-30px)", // floating effect
    transition: "transform 0.3s cubic-bezier(.38,.58,.47,1.37)",
    }}
>
    <img
    src={ProfileImg}
    alt="Profile"
    className="w-full h-full object-cover"
    style={{ borderRadius: "50%" }}
    />
</div>
</div>
                <div className="text-center md:text-left z-10 px-4 flex-1">
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
                        style={{
                            textShadow: "0 0 18px #3b82f6, 0 0 32px #a78bfa"
                        }}>
                        Hi, I'm Aditya Kumar
                    </h1>
                    <ul className="text-gray-100 text-lg mb-12 max-w-2xl mx-auto space-y-5" style={{lineHeight: "2rem"}}>
                        {highlights.map((point, index) => (
                            <li key={index} className="flex items-center gap-4 justify-start">
                                <span
                                className="inline-block"
                                style={{
                                    minWidth: "0.78em",
                                    minHeight: "0.78em",
                                    marginTop: "0.18em",
                                    borderRadius: "50%",
                                    background: "linear-gradient(135deg,#3b82f6 70%,#a78bfa 100%)",
                                    boxShadow: "0 0 8px #3b82f6cc",
                                }}
                                ></span>
                                <span className="text-left">{point}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-center md:justify-start gap-6">
                        <a
                            href="#projects"
                            className="bg-blue-500 text-white py-3 px-8 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.4)]"
                            style={{ boxShadow: "0 0 22px #3b82f6bb" }}
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-8 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                            style={{ boxShadow: "0 0 16px #a78bfa88" }}
                        >
                            Contact Me
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1MfEqn1B1iPUm1UJ_Ly8K7iBP1v25klJ7/view?usp=drive_link"  
                            className="bg-purple-500 text-white py-3 px-8 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(168,139,250,0.3)] ml-0"
                            style={{ boxShadow: "0 0 18px #a78bfa99" }}
                            download
                        >
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
