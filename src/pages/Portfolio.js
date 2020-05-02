import React, { Component } from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import "../assets/style.css"
import projects from "../portfolio.json";
import Project from "../components/project"

class Portfolio extends Component {

        state = { projects };

    render() {
  return (
    <div>
    <Header />
      <h1>Portfolio</h1>
      <div className="cards-list">
        {this.state.projects.map(projects => (
      <Project
        name={projects.name}
        image={projects.image}
        link={projects.link}
        repo={projects.repo}
        />))}
        </div>
      <Footer />
    </div>
  );
  }
}

export default Portfolio;

{/* <div className="cards-list">
        <div className="card-link">
            <div className="card 1"> 
                <div className="card_image"><a href="https://kindrakinney.github.io/Local-Tunes/" target="_blank"><img src={require("../components/images/localTunes.jpg")}  style={{width: "100%"}} /></a> 
                </div>
            </div>
            <h2>Local Tunes</h2>
            <br />
            <a href="https://kindrakinney.github.io/Local-Tunes/" className="personal-link port-link">
            <p>Visit Application</p> </a>
            <br />
            <a href="https://github.com/KindraKinney/Local-Tunes" className="personal-link port-link"><p>GitHub repository</p></a>
        </div>

        <div className="card-link">
            <div className="card 5">
                <div className="card_image"><a href="https://intense-beach-33729.herokuapp.com" target="_blank"><img src={require("../components/images/PAR.png")} style={{width: "100%"}} /></a>
                </div>  
            </div>
            <h2>P.A.R.</h2>
            <br />
            <a href="https://intense-beach-33729.herokuapp.com" className="personal-link port-link">
            <p>Visit Application</p> </a>
            <br />
            <a href="https://github.com/dhens/Paranormal-Activity-Reporter" className="personal-link port-link"><p>GitHub repository</p></a>
        </div>

        <div className="card-link">
            <div className="card 4">
                <div className="card_image"><a href="https://whispering-fortress-69757.herokuapp.com/" target="_blank"><img src={require("../components/images/burgerApp.jpg")} style={{width: "100%"}} /></a>
                </div>  
            </div>
            <h2>Eat Da Burger!</h2>
            <br />
            <a href="https://whispering-fortress-69757.herokuapp.com/" className="personal-link port-link">
            <p>Visit Application</p> </a>
            <br />
            <a href="https://github.com/dobbe2/burger" className="personal-link port-link"><p>GitHub repository</p></a>
        </div>

        <div className="card-link">
            <div className="card 2">
                <div className="card_image"><a href="https://dobbe2.github.io/weather-dashboard/" target="_blank"><img src={require("../components/images/weather-square.jpg")} style={{width: "100%"}} /></a>
                </div>
            </div>
            <h2>Weather Dashboard</h2>
            <br />
            <a href="https://dobbe2.github.io/weather-dashboard/" className="personal-link port-link">
                <p>Visit Application</p></a>
                <br />
            <a href="https://github.com/dobbe2/weather-dashboard" className="personal-link port-link"><p>GitHub repository</p></a>
        </div>

        <div className="card-link">
            <div className="card 3">
                <div className="card_image"><a href="https://dobbe2.github.io/day-planner/" target="_blank"><img src={require("../components/images/day-planner-square.jpg")} style={{width: "100%"}} /></a>
                </div>  
            </div>
            <h2>Work Day Planner</h2>
            <br />
            <a href="https://dobbe2.github.io/day-planner/" className="personal-link port-link">
            <p>Visit Application</p> </a>
            <br />
            <a href="https://github.com/dobbe2/day-planner" className="personal-link port-link"><p>GitHub repository</p></a>
        </div>
    </div> */}