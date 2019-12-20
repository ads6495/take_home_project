import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
    const navStyle = {
        color: 'White'
    }
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                <Link style={navStyle} to='/form'>
                    <li>Get in Touch</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Navigation;
