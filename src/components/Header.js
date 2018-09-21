import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import '../App.css';

/* Header and Navigation Bar */
class HeaderPage extends Component{
//const HeaderPage = () => (
  constructor(){
    super(); 
  }

  // showSettings(events){
  //   event.preventDefault();
  // }

  getNavBar(){
    let items; 

    items = [
      <li className="navButton"><Link to="/project">Project</Link></li>,
      <li className="navButton"><Link to="/about">&nbsp;About&nbsp;</Link></li>,
      <li className="navButton"><Link to="/">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
    ];
  }

  render(){
    return(
    //<Menu> 
      <header className="App-header">
        <ul className="navbar">
          <li><Link to="/project" className="navButton">Project</Link></li>
          <li><Link to="/about" className="navButton">&nbsp;About&nbsp;</Link></li>
          <li><Link to="/" className="navButton">&nbsp;&nbsp;Home&nbsp;&nbsp;</Link></li>
        </ul>
      </header>
    //</Menu>
    );
  }
//)
}
export default HeaderPage;