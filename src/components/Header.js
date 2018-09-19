import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

/* Header and Navigation Bar */
const HeaderPage = () => (
  <header className="App-header">
    <ul className="navbar">
      <li><Link to="/project" className="navButton">Project</Link></li>
      <li><Link to="/about" className="navButton">&nbsp;About&nbsp;</Link></li>
      <li><Link to="/" className="navButton">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
    </ul>
  </header>
)

export default HeaderPage;