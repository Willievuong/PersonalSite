import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

/* Header and Navigation Bar */
class HeaderPage extends Component{
//const HeaderPage = () => (
  constructor(){
    super(); 
  }

  render(){
    return(
    <header className="App-header">
      <ul className="navbar">
        <li><Link to="/project" className="navButton">Project</Link></li>
        <li><Link to="/about" className="navButton">&nbsp;About&nbsp;</Link></li>
        <li><Link to="/" className="navButton">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
      </ul>
    </header>
    );
  }
//)
}
export default HeaderPage;