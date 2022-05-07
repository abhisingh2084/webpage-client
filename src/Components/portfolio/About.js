import React from 'react';
import aboutPic from "../../Resources/Images/aboutPic2.jpg"
import "./styles/About.css";

function About() {

    const getAboutContent = () => {
        return (
            <section className="portfolio-about-content-wrapper">
                <h2>All about this portfolio website</h2>
                <p>In this website I have created my portfolio which contains everything about me wherein I have put my resume, my contact details, my achievements, certificate and skills with this I also kept my other projects like Todolist App, Quote Generator, Digital Clock, Dice game and more.</p>
            </section>
        )
    }

    const getAboutBody = () => {
        return (
            <section className="portfolio-about-body-wrapper">
                {getAboutContent()}
                 <img src={aboutPic} />
            </section>
        )
    }

  return <section id="portfolio-about-wrapper">
        <h1>About</h1>
        {getAboutBody()}
      </section>;
}

export default About;
