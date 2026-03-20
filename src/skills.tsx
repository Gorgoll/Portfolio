import React from "react";
import SkillCard from "./ui/skillCard";
import boldThreeLetters from "./scripts/boldThreeLetters";

const skills = [
    { name: "React",      icon: "",  color: "#61dafb", bg: "rgba(97,218,251,0.1)"  },
    { name: "TypeScript", icon: "", color: "#3178c6", bg: "rgba(49,120,198,0.1)"  },
    { name: "Node.js",    icon: "",  color: "#68a063", bg: "rgba(104,160,99,0.1)"  },
    { name: "PostgreSQL", icon: "", color: "#336791", bg: "rgba(51,103,145,0.1)"  },
    { name: "Python",     icon: "", color: "#f7c948", bg: "rgba(247,201,72,0.1)"  },
    { name: "Docker",     icon: "", color: "#2496ed", bg: "rgba(36,150,237,0.1)"  },
];

const Skills = () => {
    return (
        <div style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(ellipse at left center, rgba(74,222,128,0.2) 0%, transparent 60%)",
            pointerEvents: "none",
        }}>
        <div style={{ padding: "10px 24px",maxWidth: "1100px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px", color: "#f1f5f9" }}>
                Skills
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "32px" }}>
                Technologies I work with.
            </p>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "12px",
            }}>
                {skills.map(skill => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Skills;