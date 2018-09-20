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
    const hamburger = () => {
      // var x = document.getElementById("myTopnav");
      // if (x.className === "topnav") {
      //     x.className += " responsive";
      // } else {
      //     x.className = "topnav";
      // }
    }
    
    return(
    <header className="App-header">
      <ul className="navbar" id="idNavBar">
        <li><Link to="/project" className="navButton">Project</Link></li>
        <li><Link to="/about" className="navButton">&nbsp;About&nbsp;</Link></li>
        <li><Link to="/" className="navButton">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
        <li><a href="javascript:void(0);" className="icon" onClick={hamburger} >
          <i className="fa fa-bars"></i>
        </a></li>
      </ul>
    </header>
    );
  }
//)
}
export default HeaderPage;