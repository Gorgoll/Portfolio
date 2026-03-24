const Contact = () => {
    const items = [
        {
            name: "GitHub",
            handle: "@Gorgoll",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
            href: "https://github.com/Gorgoll",
        },
    ];

    return (
        <section style={{
            position: "relative",
            padding: "2em 1em 16em",
            display: "flex",
            justifyContent: "center",
            overflow: "hidden" }}>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "55%",
                height: "100%",
                background: "radial-gradient(ellipse at left center, rgba(74,222,128,0.3) 0%, transparent 70%)",
            }} />

            <div style={{ position: "relative",
                zIndex: 1,
                maxWidth: "60em",
                width: "100%",
                textAlign: "center" }}>
                <h2 style={{ margin: "0 0 0.15em",
                    fontSize: "3.5em",
                    fontWeight: 800,
                    color: "#f8fafc" }}>
                    Contact
                </h2>

                <p style={{ margin: "0 0 2.5em",
                    fontSize: "0.9em",
                    color: "rgba(255,255,255,0.3)"}}>
                    find me here
                </p>

                <div style={{ display: "flex",
                    justifyContent: "center",
                    gap: "1em",
                    flexWrap: "wrap" }}>
                    {items.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                width: "10em",
                                padding: "1.4em 1.2em",
                                borderRadius: "0.75em",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.6em",
                                background: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(255,255,255,0.06)",
                                textDecoration: "none",
                                transition: "border-color 0.2s ease, background 0.2s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "rgba(74,222,128,0.3)";
                                el.style.background = "rgba(74,222,128,0.04)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLAnchorElement;
                                el.style.borderColor = "rgba(255,255,255,0.06)";
                                el.style.background = "rgba(255,255,255,0.02)";
                            }}
                        >
                            <img src={item.icon} alt={item.name} style={{ width: "2em", height: "2em", filter: "invert(1)" }} />
                            <span style={{ fontSize: "0.9em", color: "#e6edf3", fontWeight: 500 }}>{item.name}</span>
                            <span style={{ fontSize: "0.75em", color: "rgba(255,255,255,0.3)"}}>{item.handle}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;