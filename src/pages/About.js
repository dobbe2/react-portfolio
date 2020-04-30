import React from "react";
import Footer from "../components/footer"
import Header from "../components/header"
import "../assets/style.css"
import Family from "./family-portrait.jpeg"

function About() {
  return (
    <div>
      <Header />
      <br />
    <div id="resume"><h3><p><a href="https://drive.google.com/file/d/1mH5DkmtYjnx8Sgq-UVRF9YLec37rE70l/view?usp=sharing" target="_blank" className="personal-link">Click here for My Resume</a></p></h3></div>
    <h1>Who I am</h1>
    <br />
    <div className="para">
    <p>My name is James Dobbe, and I am a Full-Stack Web Developer with a background in creative arts and management.  I have earned a certificate in Full Stack Development from the University of Washington.  I have learned to create dynamic apps using HTML and CSS, as well as skills in Javascript, Node.JS, and databases. My passion shines through in design, functionality, and efficiency.  Many of my projects I took the lead design role, creating polished and professional products.  I am looking for a place to launch my career in web development that will not only help me grow professionally, but allow me to contribute my unique styles and skills to their business.
    </p>
    <br />
    <p>I am currently managing an Italian Restaurant, overseeing the front of house, and running the Catering department. I have learned many skills here, most all of them related to customer service, multi tasking, and time management. I think a lot of the skills I have mastered from my time on the management team at my restaurant will carry over into my developing career.
    </p>
    <br />
    <p>My family is most important to me. I have a beautiful wife, Becky, a 17 month old son, Cruz, and a 12 year old daughter, Morgan. We have a tabby cat, Apollo, and we have an Australian Shepard/Border Collie mix named Lucy. Some of my hobbies include playing piano and guitar, snowboarding, playing retro video games, going to Seattle Mariners games, and making pizzas.
    </p>
    <br />
    </div>

    <img src={Family} id="about-image" alt="" />



      <Footer />
    </div>
  );
}

export default About;