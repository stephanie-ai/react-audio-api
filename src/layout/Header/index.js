import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { BackButton } from '../../components/';
import './style.css'

const Header = () => {
    return (
        <Router>
        <nav>
            <NavLink exact to="/" activeClassName="current">Home</NavLink>
            <NavLink to="/songs" activeClassName="current">Songs</NavLink>
            <NavLink to="/contact" activeClassName="current">Contact</NavLink>
            <BackButton />
        </nav>
        </Router>
    );
}

export default Header;