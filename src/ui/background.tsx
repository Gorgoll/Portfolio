import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticleBackground() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const particlesOptions: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
            number: {
                value: 75,
                density: { enable: false, width: window.innerWidth, height: window.innerHeight },
            },
            color: { value: ["#83db7b", "#0f5908", "#22c55e"] },
            shape: { type: "circle" },
            opacity: {
                value: { min: 0.4, max: 0.9 },
                animation: { enable: true, speed: 0.8, sync: false },
            },
            size: { value: { min: 1.5, max: 4 }, animation: { enable: false } },
            links: {
                enable: true, distance: 180,
                color: { value: ["#7c3aed", "#6d28d9", "#4c1d95"] },
                opacity: 0.35, width: 0.8,
                triangles: { enable: false },
            },
            move: {
                enable: true, speed: 0.6, direction: "none",
                random: true, straight: false,
                outModes: { default: "bounce" },
                attract: { enable: false },
            },
        },
        interactivity: { events: { onHover: { enable: false } } },
        detectRetina: true,
    };

    return (
        <div style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            backgroundImage: "linear-gradient(to bottom, #000000 0%,#0b0317 60, #1a0a2e 100%)",
        }}>
            {init && (
                <Particles
                    id="tsparticles"
                    options={particlesOptions}
                    style={{ width: "100%", height: "100%" }}
                />
            )}
        </div>
    );
}