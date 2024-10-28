import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link> {/* Link to Home page */}
                </li>
                <li>
                    <Link to="/nothome">Not Home</Link> {/* Link to Not Home page */}
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;