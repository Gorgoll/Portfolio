import ProjectCard from "./ui/projectCard";

interface Project {
    id: number;
    name: string;
    description: string;
    image?: string;
    tags: string[];
}

const projects: Project[] = [
    {
        id: 1,
        name: "StarBird",
        description: "A simple interpreted language made in c#.",
        image: "",
        tags: ["C#"],
    },
    {
        id: 2,
        name: "Cdg",
        description: "A terminal directory navigator. Browse your filesystem interactively and cd into any folder without typing paths.",
        image: "",
        tags: ["C#","Spectre"],
    },
    {
        id: 3,
        name: "Rung",
        description: "A minimal Pong clone that runs entirely in terminal. Built in rust",
        image: "",
        tags: ["Rust","Crossterm"],
    },
];

const Project = () => {
    return (
        <div style={{ position: "relative", width: "100%", minHeight: "100%", overflow: "hidden" }}>
            <div style={{
                position: "absolute", top: 0, right: 0,
                width: "55%", height: "100%",
                background: "radial-gradient(ellipse at right center, rgba(74,222,128,0.3) 0%, transparent 60%)",
            }} />

            <div style={{ position: "relative", zIndex: 1, padding: "0.5em 0.5em", maxWidth: "960px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "5em", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-2.5px", color: "#f8fafc", marginBottom: "1em", textAlign: "center" }}>
                    Projects
                </h1>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.75em" }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
            <div style={{
                textAlign: "center",
                marginBottom: "1em",
                fontWeight: 700,
                fontSize: "1.5em",
            }}>
                AND MANY MORE!!!
            </div>
        </div>
    );
};

export default Project;