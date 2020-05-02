import React from "react";
import Header from "../components/header"
import Footer from "../components/footer"
import portfolioPic from "./images/portfolioPic.jpg";
import male from "./images/male3.jpg"
import pacman from "./images/pacman.jpg";
import github from "./images/git-hub-2.jpg";
import link from "./images/linkedin.jpg";

function Home() {
    return (
        <div>
            <Header />
            <div><img src={portfolioPic} id="port-image" /></div>
            <div className="title"><h2 id="intro">Hi, my name is James Dobbe,<br /> and I'm a web developer. </h2></div>

            <div className="cards-list">
                <div className="card left"><a href="portfolio" className="personal-link">
                    <img src={pacman} alt="pac-man" style={{width: "100%"}} className="round" />
                    <h3>Check out my Projects</h3>
                </a>
                </div>

                <div className="card right"><a href="about" className="personal-link">
                    <img src={male} alt="male-avatar" style={{width: "100%"}} className="round" />
                    <h3>Check me out</h3>
                </a>
                </div>
                <div className="card left"><a href="https://github.com/dobbe2" className="personal-link">
                    <img src={github} alt="git-hub" style={{width: "100%"}} className="round" />
                    <h3>Check out my GitHub</h3>
                </a>
                </div>

                <div className="card right"><a href="https://www.linkedin.com/in/james-dobbe-622929194/" className="personal-link">
                    <img src={link} alt="linkedin" style={{width: "100%"}} className="round" />
                    <h3>Check out my Linkedin</h3>
                </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;