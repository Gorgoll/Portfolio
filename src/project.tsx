import React, { useState } from 'react';
import ProjectCard from './ui/projectCard';

const projects = [
    {
        id: 1,
        name: "lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula elit. Cras tellus diam, pharetra at iaculis vitae, ve",
        image: "",
        tags: [""],
    },
    {
        id: 2,
        name: "ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula elit. Cras tellus diam, pharetra at iaculis vitae, ve",
        image: "",
        tags: [""],
    },
    {
        id: 3,
        name: "lorem ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula elit. Cras tellus diam, pharetra at iaculis vitae, ve.",
        image: "",
        tags: ["twoja", "stara", ":3"],
    },
];

const Project = () => {
    return (
        <div style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
            background: "radial-gradient(ellipse at right center, rgba(74,222,128,0.15) 0%, transparent 60%)",
            pointerEvents: "none",
        }}>
        <div style={{ padding: "10px 20px", maxWidth: "1100px", margin: "0 auto" }}>
            <h1 style={{ fontSize: "32px", fontWeight: "700", marginBottom: "8px" }}>
                Projects
            </h1>
            <p style={{ color: "rgba(255,255,255,0.45)", marginBottom: "40px" }}>
                todo...
            </p>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
        </div>
    );
};

export default Project;