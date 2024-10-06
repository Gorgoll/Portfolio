import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
const Contact: React.FC = () => {
  return (
    <section id="contact" className="Section">
      <h2>Contact Me</h2>
      <p>
        <FontAwesomeIcon icon={faDiscord} />
        <a
          href="https://discordapp.com/users/696265963225612309"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord
        </a>
      </p>
      <p>
        <FontAwesomeIcon icon={faGithub} />
        GitHub:{" "}
        <a
          href="https://github.com/Gorgoll"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gorgoll
        </a>
      </p>
    </section>
  );
};

export default Contact;
