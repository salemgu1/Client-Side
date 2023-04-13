import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './NavBar.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
          Transfusion
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/transfusion" className="nav-link">
            Operations
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/checkBlood" className="nav-link">
          Check Blood
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/bloodWithdrawal" className="nav-link">
            blood Withdrawal 
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
