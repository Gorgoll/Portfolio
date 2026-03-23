import Hero from "./hero";
import Contact from "./contact";
import Projects from "./project";
import Navbar from "./nav";

export default function App() {
    return (
        <div style={{
            background: "#1a0a2e",
            minHeight: "100vh",
            color: "#f1f5f9",
        }}>
            <Navbar />
            <div id="home"> <Hero /> </div>
            <div id="projects"> <Projects /> </div>
            <div id="contact"> <Contact /> </div>
        </div>
    );
}