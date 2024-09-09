import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import Ketan_Resume from '../../assets/Ketan_Resume.pdf'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    // const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });
    const handleDownload = () => {

        const link = document.createElement('a');
        link.href = Ketan_Resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="about_me">
                    <p>
                        I am a passionate and experienced software developer with a strong background in developing robust and scalable applications. With a keen eye for detail and a deep understanding of software engineering principles, I craft efficient and maintainable solutions tailored to meet client requirements.
                    </p>
                </div>
                <h1 className="skills">Resume</h1>
                <div className="button1">
                    <button className="donload" onClick={handleDownload}>
                        <a>Download Resume</a>
                    </button>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;