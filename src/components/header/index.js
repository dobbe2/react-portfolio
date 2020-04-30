import React from "react";
import "./style.css"

function Header() {
    return (
        <header>
            <ul className="header-list">
                <li className="header-item"><a href="home">Home</a></li>
                <li className="header-item"><a href="portfolio">Portfolio</a></li>
                <li className="header-item"><a href="contact">Contact</a></li>
                <li className="header-item"><a href="about">About</a></li>
                <li className="header-item-right"><a>James Dobbe</a></li>
            </ul>
        </header>
    );
}

export default Header;