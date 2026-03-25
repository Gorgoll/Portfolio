import { useEffect, useState } from "react";

const line1 = "If your dreams were to shatter, throw them all away";
const line2 = "There’s nothing left to hold you back now";

export default function Hero() {
    const [visibleLetters, setVisibleLetters] = useState(0);
    const [showSecond, setShowSecond] = useState(false);

    const letters = line1.split("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            i++;
            setVisibleLetters(i);

            if (i >= letters.length) {
                clearInterval(interval);

                setTimeout(() => setShowSecond(true), 1000);
            }
        }, 80);

        return () => clearInterval(interval);
    }, []);

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
                    Gorgol
                </h1>

                <p style={{
                    fontSize: "1em", lineHeight: 1.5,
                    color: "rgba(255,255,255,0.6)",
                    maxWidth: "460px",
                }}>
                    {letters.map((char, index) => (
                        <span
                            key={index}
                            style={{
                                opacity: index < visibleLetters ? 1 : 0,
                                transition: "opacity 0.2s ease",
                                whiteSpace: char === " " ? "pre" : "normal",
                            }}>
                            {char}
                        </span>
                    ))}
                </p>

                <p style={{
                    fontSize: "1.1em",
                    lineHeight: 1.3,
                    maxWidth: "460px",
                    opacity: showSecond ? 1 : 0,
                    transform: showSecond ? "translateY(0px)" : "translateY(10px)",
                    transition: "opacity 0.8s ease, transform 0.8s ease",
                    background: "#4ade80",
                    backgroundSize: "600% 600%",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "1px 1px 3px rgba(74,222,128,0.5)",
                }}>
                    {line2}
                </p>
            </div>
        </section>
    );
}