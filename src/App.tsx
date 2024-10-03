import React from 'react';
import './styles/global.css';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import MySkills from "./components/myskills.tsx";

const App: React.FC = () => {
    return (
        <div>
            <br/>
            <h1>Gorgol</h1>
            <nav>
                <a href="#home"> Home </a>
                <a href="#about"> About </a>
                <a href="#MySkills"> Skills </a>
                <a href="#projects"> Projects </a>
                <a href="#contact"> Contact </a>
            </nav>

            <Home/><br/>
            <About/><br/>
            <MySkills/><br/>
            <Projects/><br/>
            <Contact/><br/>
        </div>
    );
};

export default App;
