import React from 'react';
import ProjectCard from './ui/projectCard';

const projects = [
    {
        id: 1,
        name: "lorem",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula elit. Cras tellus diam, pharetra at iaculis vitae, ve",
        image: "",
        tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
        id: 2,
        name: "ipsum",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet vehicula elit. Cras tellus diam, pharetra at iaculis vitae, ve",
        image: "",
        tags: ["twoja", "stara", ":3"],
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
        <div style={{ position: "relative", width: "100%", minHeight: "100%", overflow: "hidden",}}>

            <div style={{
                position: "absolute",
                top: 0, right: 0,
                width: "55%", height: "100%",
                background: "radial-gradient(ellipse at right center, rgba(74,222,128,0.15) 0%, transparent 60%)",
                pointerEvents: "none",
                zIndex: 0,
            }} />

            <div style={{
                position: "relative", zIndex: 1,
                padding: "3em 2emp 3px",
                maxWidth: "1100px",
                margin: "0 auto",
            }}>
                <h1 style={{
                    fontSize: "5em",
                    fontWeight: 800,
                    lineHeight: 1.0,
                    letterSpacing: "-2.5px",
                    color: "#f8fafc",
                    marginBottom: "1em",
                    textAlign: "center",
                }}>
                    Projects
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;