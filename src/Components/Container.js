import { render } from "@testing-library/react";
import React, { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/About";

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
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}