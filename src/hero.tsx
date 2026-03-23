import ParticleBackground from "./ui/background";

export default function hero() {
    return (
        <section style={{
            position: "relative",
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
        }}>
            <ParticleBackground />

            <div style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
                padding: "0 2px",
                maxWidth: "680px",
            }}>
                <h1 style={{
                    margin: "0 0 0.3em",
                    fontSize: "7em",
                    fontWeight: 800, lineHeight: 1.06, letterSpacing: "-2.5px",
                    color: "#f8fafc",
                }}>
                    todo
                </h1>

                <p style={{
                    margin: "0 0 40px",
                    fontSize: "2em", lineHeight: 1.7,
                    color: "rgba(255,255,255,0.45)",
                    maxWidth: "460px", marginLeft: "auto", marginRight: "auto",
                }}>
                    todo
                </p>
            </div>
        </section>
    );
}