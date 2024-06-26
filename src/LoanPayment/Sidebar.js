// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="sidebar-header">
                <button onClick={toggleSidebar}>Close</button>
            </div>
            <Nav className="flex-column">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/accounts" className="nav-link">Accounts and Deposits</NavLink>
                <NavLink to="/cards" className="nav-link">Cards</NavLink>
                <NavLink to="/invest" className="nav-link">Invest</NavLink>
                <NavLink to="/services" className="nav-link">Services & Payments</NavLink>
                <NavLink to="/loancalculator" className="nav-link">Loan Calculator</NavLink>
                <NavLink to="/personalloan" className="nav-link">Personal Loan</NavLink>
                <NavLink to="/homeloan" className="nav-link">Home Loan</NavLink>
                <NavLink to="/twowheelerloan" className="nav-link">Two Wheeler Loan</NavLink>
            </Nav>
        </div>
    );
};

export default Sidebar;
