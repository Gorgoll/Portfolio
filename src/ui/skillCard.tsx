import React, { useState } from "react";

export default function SkillCard({ skill }) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                borderRadius: "7px",
                border: `1px solid ${hovered ? "#4ade80" : "rgba(255,255,255,0.1)"}`,
                background: "rgba(255,255,255,0.05)",
                transition: "border-color 0.25s ease",
                transform: hovered ? "scale(1.05)" : "scale(1)",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 14px",
            }}
        >
            <div
                style={{
                    width: "28px",
                    height: "28px",
                    background: skill.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    fontWeight: "900",
                    color: skill.color,
                }}
            >
                {skill.icon}
            </div>

            <p style={{ margin: 0, fontSize: "14px", fontWeight: "500", color: "#f1f5f9" }}>
                {skill.name}
            </p>
        </div>
    );
}