import React, { useState } from 'react';
import boldThreeLetters from "../scripts/boldThreeLetters";

export default function ProjectCard({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderRadius: "18px",
                overflow: "hidden",
                border: `1px solid ${hovered ? "#4ade80" : "rgba(255,255,255,0.07)"}`,
                background: "rgba(255,255,255,0.03)",
                transition: "transform 0.25s ease, border-color 0.25s ease",
                transform: hovered ? "scale(1.1)" : "scale(1)",
            }}
        >
            <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                <img
                    src={project.image}
                    alt={project.name}
                    style={{
                        width: "100%",
                        height: "100%",
                        display: "block",
                    }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.1)" }} />
            </div>

            <div style={{ padding: "18px 20px 20px" }}>
                <h3 style={{ margin: "0 0 2px", fontSize: "17px", fontWeight: "700", color: "#f8fafc", letterSpacing: "-0.4px" }}>
                    {project.name}
                </h3>
                <p style={{ margin: "0 0 14px", fontSize: "13px", lineHeight: "1.6", color: "rgba(255,255,255,0.55)" }}>
                    {boldThreeLetters(project.description)}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            style={{
                                fontSize: "11px",
                                padding: "3px 10px",
                                borderRadius: "6px",
                                background: "rgba(255,255,255,0.06)",
                                color: "rgba(255,255,255,0.45)",
                                border: "1px solid rgba(255,255,255,0.08)",
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}