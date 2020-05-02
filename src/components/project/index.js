import React from "react";
import "./style.css"

function Project(props) {
    return (
        
                <div className="card-link">
                    <div className="card 1"> 
                        <div className="card_image"><a href={props.link} target="_blank"><img src={props.image}  style={{width: "100%"}} /></a> 
                        </div>
                    </div>
                    <h2>{props.name}</h2>
                    <br />
                    <a href={props.link} className="personal-link port-link">
                    <p>Visit Application</p> </a>
                    <br />
                    <a href={props.repo} className="personal-link port-link"><p>GitHub repository</p></a>
                </div>
            
    );
}

export default Project;

