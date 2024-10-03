import React from 'react';
import '../styles/global.css';

const MySkills: React.FC = () => {
    return (
        <section id="MySkills" className="section">
            <h2>Languages/Tools/Frameworks I'm Familiar With</h2>
            <table className="skills-table" align="center">
                <tbody>
                <tr>
                    <td>
                        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank"
                           rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"
                                 height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg"
                                 alt="HTML5" height="75"/>
                        </a>
                    </td>

                    <td>
                        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg"
                                 alt="MySQL" height="75"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.blender.org/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://profilinator.rishav.dev/skills-assets/blender_community_badge_white.svg"
                                alt="Blender" height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/php-original.svg" alt="PHP"
                                 height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/dotnetcore.png" alt=".Net Core"
                                 height="75"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/javascript-original.svg"
                                 alt="JavaScript" height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/python-original.svg"
                                 alt="Python" height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                            <img src="https://profilinator.rishav.dev/skills-assets/typescript-original.svg"
                                 alt="TypeScript" height="75"/>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>

            <h2>Languages/Tools/Frameworks I'm Looking Forward to Master/Learn</h2>
            <table className="skills-table" align="center">
                <tbody>
                <tr>
                    <td>
                        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/" target="_blank"
                           rel="noopener noreferrer">
                            <img style={{margin: '10px'}}
                                 src="https://profilinator.rishav.dev/skills-assets/csharp-original.svg" alt="C#"
                                 height="75"/>
                        </a>
                    </td>
                    <td>
                        <a href="https://dotnet.microsoft.com/download" target="_blank" rel="noopener noreferrer">
                            <img style={{margin: '10px'}}
                                 src="https://profilinator.rishav.dev/skills-assets/dotnetcore.png" alt=".Net Core"
                                 height="75"/>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="https://www.cplusplus.com/" target="_blank" rel="noopener noreferrer">
                            <img style={{margin: '10px'}}
                                 src="https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg"
                                 alt="C++"
                                 height="75"/>
                        </a>
                    </td>


                    <td>
                        <a href="https://www.arduino.cc/" target="_blank" rel="noopener noreferrer">
                            <img style={{margin: '10px'}}
                                 src="https://profilinator.rishav.dev/skills-assets/arduino.png" alt="Arduino"
                                 height="75"/>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default MySkills;
