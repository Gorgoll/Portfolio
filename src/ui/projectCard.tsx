import React, { useState } from "react";
import boldThreeLetters from "../scripts/boldThreeLetters";

export default function ProjectCard({ project, index = 0 }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                display: "flex",
                minHeight: "180px",
                borderRadius: "3empx",
                overflow: "hidden",
                position: "relative",
                background:
                    "linear-gradient(135deg, rgba(20,30,40,0.6), rgba(10,15,25,0.85))",
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "all 0.35s ease",
                transform: hovered ? "translateY(-4px)" : "translateY(0)",
            }}
        >
            <div
                style={{
                    width: "260px",
                    minWidth: "260px",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        transform: hovered ? "scale(1.08)" : "scale(1)",
                        transition: "transform 0.6s ease",
                    }}
                >
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.name}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                filter: "brightness(0.85) saturate(0.9)",
                            }}
                        />
                    ) : (
                        <div style={{ width: "100%", height: "100%", background: "#0d1117" }} />
                    )}
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: "120px",
                        background:
                            "linear-gradient(to right, transparent, rgba(10,15,25,0.9))",
                    }}
                />
            </div>

            <div
                style={{
                    flex: 1,
                    padding: "1.5em 2em",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1em",
                }}
            >
                <h3
                    style={{
                        fontSize: "1.5em",
                        fontWeight: 700,
                        letterSpacing: "-0.5px",
                        color: "#f4f6f8",
                        margin: 0,
                    }}
                >
                    {project.name}
                </h3>

                <p
                    style={{
                        fontSize: "0.8em",
                        lineHeight: 1.7,
                        color: "rgba(255,255,255,0.45)",
                        fontWeight: 300,
                        margin: 0,
                    }}
                >
                    {boldThreeLetters(project.description)}
                </p>

                <div
                    style={{
                        height: "1px",
                        background:
                            "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
                        margin: "8px 0",
                    }}
                />

                {project.tags?.length > 0 && (
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                            marginTop: "2px",
                        }}
                    >
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                style={{
                                    fontSize: "0.7em",
                                    fontWeight: 500,
                                    padding: "0.4em 0.7em",
                                    borderRadius: "10px",
                                    background: "rgba(255,255,255,0.06)",
                                    color: "rgba(255,255,255,0.7)",
                                    border: "1px solid rgba(255,255,255,0.08)",
                                }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}