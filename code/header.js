import React from 'react';

/**
 * Our new navbar component
 */
const Navbar = ({ links }) => (
    <nav className="navbar navbar-expand navbar-dark bg-dark shadow fixed-top p-0">
        <div className="container-fluid justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
                {links.map((link, i) =>
                    <li className="nav-item" key={i} >
                        <a className="nav-link h4 neon mb-0" href={link.href}>{link.name.toUpperCase()}</a>
                    </li>
                )}
            </ul>
        </div>
    </nav>
);

export default Navbar;