import React, { useState } from 'react'
import './App.css';

function Navbar()
{
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const handleMenuItemClick = () => {
        setIsNavExpanded(false);
    };

    return(
        // <nav className='navbar-div'>
        <nav
            className={isNavExpanded ? "navbar-div expanded" : "navbar-div"}
        >
            <ul className='ul-navbar'>
                <li><a href="#Certificates" onClick={handleMenuItemClick}>Course-Certificates</a></li>
                <li><a href="#Achievement" onClick={handleMenuItemClick}>Achievements</a></li>
                <li><a href="#Project_work" onClick={handleMenuItemClick}>Project-Work</a></li>
                <li><a href="http://localhost:3000/" onClick={handleMenuItemClick}>Home</a></li>
            </ul>
            <button
                className="hamburger"
                onClick={() => {
                setIsNavExpanded(!isNavExpanded);
                }}
            >
                {/* icon from Heroicons.com */}
                
                {
                    isNavExpanded ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                            >
                        <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                clipRule="evenodd"
                        />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path
                                fillRule="evenodd"
                                d="M5 3l1-1 6 6-1 3l1-1 6 6-1 3l1-1 6 6-1 3l1-1 6 6-1 3l1-1 6 6-1 1zM6  2l1-1 6 6-1 15 2-1"
                                clipRule="evenodd"
                            />
                        </svg>
                    )
                }
            </button>
        </nav>
    );
}

export default Navbar;