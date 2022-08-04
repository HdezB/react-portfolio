import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <header>
            <h1>
                Brian Hernandez
            </h1>
            <nav>
                <ul>
                    <li><a href="#about" onClick={() => handlePageChange('About')}>About</a></li>
                    <li><a href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a></li>
                    <li><button class="contact-me-button"><a href="#contact-me" onClick={() => handlePageChange('Contact')}>Contact Me!</a></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavTabs;