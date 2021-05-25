import React from 'react';

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <h2>Hi! I am Reesh Miranda</h2>
            <p>
                I am a former law student based in Manila, Philippines. I am currently taking the Full Stack Web Development Program at UC Berkeley. It is my intention to move back to California once I complete my program. I am currently seeking employment as a web developer in the tech industry.
                <br /><br />
                <strong>Technical Skills:</strong> HTML, CSS, JavaScript, Bulma, Bootstrap, jQuery, JSON, Web API, Server Side API, AJAX/Fetch, Node.js, Sequelize, MongoDB, React, Pseudocode, Git, GitHub
            </p>
        </div>
        <div className="about-right">
            <img src="/images/selfie.jpeg" alt="Reesh Miranda" />
        </div>
      
    </div>
  );
}

export default About;
