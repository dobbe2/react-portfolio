import React from "react";
import "./style.css"

function Footer() {
    return (
    <div>
        <footer id="footer">
        <img src={require("../images/chill-background.jpg") } alt="footer" id="footer-image" />
        <p className="footer">&copy; Copyright 2020 James Dobbe Designs</p>

    </footer>
    </div>
    );
}

export default Footer;