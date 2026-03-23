const Contact = () => {
    const items = [
        {
            name: "GitHub",
            handle: "@Gorgoll",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
    ];

    return (
        <section
            style={{
                position: "relative",
                padding: "4em 1.5em 16em",
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: "60em",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        margin: "0 0 0.4em",
                        fontSize: "3.5em",
                        fontWeight: 800,
                        letterSpacing: "-0.04em",
                        color: "#f8fafc",
                    }}
                >
                    Contact
                </h2>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "2em",
                        flexWrap: "wrap",
                    }}
                >
                    {items.map((item) => (
                        <div
                            key={item.name}
                            style={{
                                width: "10em",
                                padding: "1.6em 1.2em",
                                borderRadius: "1em",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.8em",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.05)",
                                transition: "all 0.25s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(-0.3em)";
                                el.style.borderColor = "rgba(204,94,255,0.4)";
                                el.style.boxShadow =
                                    "0 12px 35px rgba(204,94,255,0.18)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLDivElement;
                                el.style.transform = "translateY(0)";
                                el.style.borderColor =
                                    "rgba(255,255,255,0.05)";
                                el.style.boxShadow = "none";
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                style={{
                                    width: "2.2em",
                                    height: "2.2em",
                                    objectFit: "contain",
                                    filter: "brightness(0.9)",
                                }}
                            />

                            <span
                                style={{
                                    fontSize: "1em",
                                    color: "#e6edf3",
                                }}
                            >
                                {item.name}
                            </span>

                            <span
                                style={{
                                    fontSize: "0.85em",
                                    color: "rgba(255,255,255,0.4)",
                                }}
                            >
                                {item.handle}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "-8em",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "300%",
                    height: "24em",
                    background:
                        "radial-gradient(ellipse at center, rgba(74,222,128,0.5) 0%, rgba(74,222,128,0.25) 40%, transparent 70%)",
                    filter: "blur(10px)",
                    zIndex: 0,
                }}
            />
        </section>
    );
};

export default Contact;