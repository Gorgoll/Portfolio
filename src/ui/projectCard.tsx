import React, { useState } from "react";
import BoldThreeLetters from "../scripts/boldThreeLetters"
export default function ProjectCard({ project, index = 0 }) {
    const [hovered, setHovered] = useState(false);


    // placeholder
    const imageSrc =
        project.image ||
        "https://placehold.co/400x200/0d1117/1a2332?text=preview";

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={styles.card(hovered)}
        >
            <div style={styles.accent(hovered)} />

            <div style={styles.content}>
                <div style={styles.header}>
                    <span style={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 style={styles.title}>{project.name}</h3>
                </div>

                <p style={styles.description}>{BoldThreeLetters(project.description)}</p>

                {project.tags?.length > 0 && (
                    <div style={styles.tags}>
                        {project.tags.map((tag, i) => (
                            <span key={i} style={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div style={styles.imageWrapper}>
                <img
                    src={imageSrc}
                    alt={project.name}
                    style={styles.baseImage(hovered)}
                />

                <img
                    src={imageSrc}
                    alt=""
                    aria-hidden
                    style={styles.hoverImage(hovered)}
                />
                <div style={styles.overlay(hovered)} />
            </div>
        </div>
    );
}

const styles = {
    card: (hovered) => ({
        display: "flex",
        borderRadius: "0.75em",
        overflow: "hidden",
        position: "relative",
        background: hovered
            ? "rgba(255,255,255,0.04)"
            : "rgba(255,255,255,0.02)",
        border: `1px solid ${
            hovered
                ? "rgba(74,222,128,0.25)"
                : "rgba(255,255,255,0.06)"
        }`,
        transition: "all 0.3s ease",
        minHeight: "130px",
    }),

    accent: (hovered) => ({
        width: "3px",
        background: hovered
            ? "rgba(74,222,128,0.7)"
            : "rgba(255,255,255,0.06)",
        transition: "background 0.3s ease",
    }),

    content: {
        flex: 1,
        padding: "1.6em 2em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "0.75em",
        minWidth: 0,
        zIndex: 1,
    },

    header: {
        display: "flex",
        alignItems: "baseline",
        gap: "0.75em",
    },

    index: {
        fontSize: "1.5em",
        fontWeight: 500,
        color: "rgba(74,222,128,0.6)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
    },

    title: {
        fontSize: "1.25em",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "#f4f6f8",
        margin: 0,
    },

    description: {
        fontSize: "0.8em",
        lineHeight: 1.65,
        color: "rgba(255,255,255,0.38)",
        fontWeight: 300,
        margin: 0,
        maxWidth: "55ch",
    },

    tags: {
        display: "flex",
        flexWrap: "wrap",
        gap: "0.4em",
    },

    tag: {
        fontSize: "0.68em",
        fontWeight: 500,
        padding: "0.3em 0.65em",
        borderRadius: "4px",
        background: "rgba(255,255,255,0.04)",
        color: "rgba(255,255,255,0.45)",
        border: "1px solid rgba(255,255,255,0.07)",
        letterSpacing: "0.03em",
    },

    imageWrapper: {
        width: "25%",
        minWidth: "25%",
        position: "relative",
        overflow: "hidden",
    },

    baseImage: (hovered) => ({
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        filter: "brightness(0.25) saturate(0.2)",
        opacity: hovered ? 0.4 : 1,
        transform: hovered ? "scale(1.06)" : "scale(1)",
        transition: "all 0.3s ease",
    }),

    hoverImage: (hovered) => ({
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        opacity: hovered ? 0.6 : 0,
        transform: hovered ? "scale(1.06)" : "scale(1)",
        transition: "all 0.6s ease",
    }),


    overlay: (hovered) => ({
        position: "absolute",
        inset: 0,
        background: "rgba(8,12,20,0.55)",
        opacity: hovered ? 0 : 1,
        transition: "opacity 0.5s ease",
        zIndex: 1,
    }),
};