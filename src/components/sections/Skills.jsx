import { RevealOnScroll } from "../RevealOnScroll";

const skillsData = [
    {
        category: "Programming Languages",
        skills: [
            { name: "Python", level: 80 },
            { name: "JavaScript", level: 75 },
            { name: "SQL", level: 70 },
            { name: "React Js", level: 78 },
            { name: "Node Js", level: 72 },
            { name: "Flask", level: 68 },
            { name: "Django", level: 70 },
            { name: "Next Js", level: 75 }
        ]
    },
    {
        category: "Tools and Libraries",
        skills: [
            { name: "TensorFlow", level: 72 },
            { name: "Scikit-learn", level: 75 },
            { name: "Pandas", level: 80 },
            { name: "Matplotlib", level: 70 },
            { name: "NLTK", level: 68 },
            { name: "spaCy", level: 70 }
        ]
    },
    {
        category: "Core Competencies",
        skills: [
            { name: "Data Analysis", level: 80 },
            { name: "NLP", level: 75 },
            { name: "Web Development", level: 77 },
            { name: "Power BI", level: 72 },
            { name: "Excel", level: 75 },
            { name: "Generative AI", level: 70 },
            { name: "Prompt Engineering", level: 68 }
        ]
    }
];

export const Skills = () => {
    return (
    <section id="skills" className="min-h-screen flex items-center justify-center py-20">
        <RevealOnScroll>
            <section className="skills-section">
                <h2 className="skills-title">
                    My <span className="accent-color">Skills</span>
                </h2>
                <div className="skills-cards-container">
                    {skillsData.map(category => (
                        <div key={category.category} className="skills-category-card">
                            <h3 className="skills-category-title">{category.category}</h3>
                            <div className="skills-grid">
                                {category.skills.map(skill => (
                                    <div key={skill.name} className="skill-card">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="progress-bar">
                                            <div 
                                                className="progress" 
                                                style={{
                                                    width: `${skill.level}%`,
                                                    background: 'linear-gradient(90deg, #8b5cf6 70%, #a78bfa 100%)',
                                                }} 
                                            />
                                        </div>
                                        <span className="percentage">{skill.level}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </RevealOnScroll>
        </section>
    );
};
