import { useState } from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
import NavBar from './NavBar'

function Navigation() {
    const [currentPage, setCurrentPage] = useState('/');
    
    return (
        <NavBar
            links={[
                <Link key={1} onClick={() => setCurrentPage('/')}className={`nav-link text-light ${currentPage === '/' ? 'active text-black' : ''}`} to="/">
                    About Me
                </Link>,
                <Link key={2} onClick={() => setCurrentPage('/portfolio')} className={`nav-link text-light ${currentPage === '/portfolio' ? 'active text-black' : ''}`} to="/portfolio">
                    Portfolio
                </Link>,
                <Link key={3} onClick={() => setCurrentPage('/resume')}className={`nav-link text-light ${currentPage === '/resume' ? 'active text-black' : ''}`} to="/resume">
                    Resume
                </Link>,
                <Link key={4} onClick={() => setCurrentPage('/contact')}className={`nav-link text-light ${currentPage === '/contact' ? 'active text-black' : ''}`} to="/contact">
                    Contact
                </Link>,
            ]}
        />
    );
}

export default Navigation;