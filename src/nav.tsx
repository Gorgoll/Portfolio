import { useState } from "react";

const links = ["Home", "Projects", "Contact"];

export default function Navbar() {
    const [active, setActive] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollTo = (link: string) => {
        setActive(link);
        const el = document.getElementById(link.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav
                className="desktop-nav"
                style={{
                    position: "fixed",
                    top: 16,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 50,
                    border: "1px solid rgba(34,197,94,0.8)",
                    background: "rgba(26,10,46,0.85)",
                    borderRadius: "12px",
                    padding: "0 8px",
                }}
            >
                <div style={{ height: "48px", display: "inline-flex", alignItems: "center", gap: "4px" }}>
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => scrollTo(link)}
                            style={{
                                padding: "6px 14px",
                                borderRadius: "8px",
                                border: "none",
                                background: active === link ? "rgba(34,197,94,0.15)" : "transparent",
                                color: active === link ? "#22c55e" : "rgba(255,255,255,0.7)",
                                fontSize: "13px",
                                fontWeight: active === link ? 600 : 400,
                                transition: "all 0.15s ease",
                            }}
                            onMouseEnter={(e) => {
                                if (active !== link) {
                                    (e.currentTarget as HTMLButtonElement).style.background = "rgba(34,197,94,0.07)";
                                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,1)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (active !== link) {
                                    (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                                    (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
                                }
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            </nav>

            <button
                onClick={() => setMenuOpen((o) => !o)}
                className="mobile-menu-btn"
                style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    zIndex: 50,
                    width: "40px",
                    height: "40px",
                    borderRadius: "6px",
                    border: "1px solid rgba(34,197,94,0.8)",
                    background: "rgba(26,10,46,0.85)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                    padding: 0,
                }}
            >
                {menuOpen ? (
                    <svg width="18" height="18" viewBox="0 0 18 18">
                        <line x1="2" y1="2" x2="16" y2="16" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
                        <line x1="16" y1="2" x2="2" y2="16" stroke="#22c55e" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                ) : (
                    <>
                        <span style={{ width: "18px", height: "2px", background: "rgba(255,255,255,0.7)"}} />
                        <span style={{ width: "18px", height: "1.5px", background: "rgba(255,255,255,0.7)" }} />
                        <span style={{ width: "18px", height: "2px", background: "rgba(255,255,255,0.7)" }} />
                    </>
                )}
            </button>

            {menuOpen && (
                <div
                    className="mobile-menu"
                    style={{
                        position: "fixed",
                        top: 70,
                        right: 16,
                        zIndex: 49,
                        border: "1px solid rgba(34,197,94,0.8)",
                        background: "rgba(26,10,46,0.95)",
                        borderRadius: "12px",
                        padding: "6px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        minWidth: "160px",
                    }}
                >
                    {links.map((link) => (
                        <button
                            key={link}
                            onClick={() => { scrollTo(link); setMenuOpen(false); }}
                            style={{
                                padding: "10px 16px",
                                borderRadius: "8px",
                                border: "none",
                                background: active === link ? "rgba(34,197,94,0.15)" : "transparent",
                                color: active === link ? "#22c55e" : "rgba(255,255,255,0.7)",
                                fontSize: "14px",
                                fontWeight: active === link ? 600 : 400,
                                textAlign: "left",
                                width: "100%",
                                transition: "all 0.15s ease",
                            }}
                        >
                            {link}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
                @media (min-width: 640px) {
                    .desktop-nav { display: block !important; }
                    .mobile-menu-btn { display: none !important; }
                    .mobile-menu { display: none !important; }
                }
                @media (max-width: 639px) {
                    .desktop-nav { display: none !important; }
                    .mobile-menu-btn { display: flex !important; }
                    .mobile-menu { display: flex !important; }
                }
            `}</style>
        </>
    );
}