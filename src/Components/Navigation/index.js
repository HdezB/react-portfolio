import React from 'react';

const Nav = () => {

    return (
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><button className="contact-me-button"><a href="#contact-me">Contact Me!</a></button></li>
            </ul>
        </nav>
    )
}

export default Nav;