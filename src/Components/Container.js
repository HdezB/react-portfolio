import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if(currentPage === 'Contact') {
            return <Contact />
        }
        return <About />
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}