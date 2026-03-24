export default function hero() {
    return (
        <section style={{
            position: "relative",
            minHeight: "70vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background: "radial-gradient(ellipse at center, rgba(74,222,128,0.4) 0%, transparent 70%)",
        }}>

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
                    fontWeight: 800, letterSpacing: "-2.5px",
                    color: "#f8fafc",
                }}>
                    todo
                </h1>

                <p style={{
                    fontSize: "2em", lineHeight: 1.7,
                    color: "rgba(255,255,255,0.45)",
                    maxWidth: "460px",
                }}>
                    todo
                </p>
            </div>
        </section>
    );
}