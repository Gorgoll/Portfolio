import ParticlesBackground from "./ui/background";

export default function hero() {
    return (
        <section style={{
            position: "relative",
            minHeight: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        }}>
            <ParticlesBackground />

            <div style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                padding: "0 24px",
                maxWidth: "680px",
            }}>
                <h1 style={{
                    margin: "0 0 22px",
                    fontSize: "clamp(42px, 7vw, 74px)",
                    fontWeight: 800, lineHeight: 1.06, letterSpacing: "-2.5px",
                    color: "#f8fafc",
                }}>
                    todo
                </h1>

                <p style={{
                    margin: "0 0 40px",
                    fontSize: "17px", lineHeight: 1.7,
                    color: "rgba(255,255,255,0.45)",
                    maxWidth: "460px", marginLeft: "auto", marginRight: "auto",
                }}>
                    todo
                </p>
            </div>
        </section>
    );
}