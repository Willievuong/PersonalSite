import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BurgerMenu from 'react-burger-menu';
import '../App.css';

/*TODO: Look over this code */
class MenuWrap extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: false
    };
  }

  componentWillReceiveProps(nextProps) {

  }

  show() {
    this.setState({hidden : false});
  }

  render() {
    let style;

    if (this.state.hidden) {
      style = {display: 'none'};
    }

    return (
      <div style={style} className={this.props.side}>
        {this.props.children}
      </div>
    );
  }
}

/* Header and Navigation Bar */
class HeaderPage extends Component{
  constructor(){
    super(); 
    this.state = {
      currentMenu: 'slide'
    }
  }

  // showSettings(events){
  //   event.preventDefault();
  // }

  getNavBar(){
    let items; 

    items = [
      <ul>
      <li><Link to="/" key="0" className="fa fa-fw fa-home navButton">Home</Link></li>
      <li><Link to="/about" key="1" className="fa fa-fw fa-book navButton">About</Link></li>
      <li><Link to="/project" key="2" className="fa fa-fw fa-github-square navButton">Project</Link></li>
      </ul>
    ];

    return items;
  }

  getMenu(){
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getNavBar();

    let jsx = (
      <MenuWrap wait={20} side={this.state.side}>
        <Menu id={this.state.currentMenu} styles={styler}>
          {items}
        </Menu>
      </MenuWrap>
    );

    return jsx;
  }

  render(){
    return(
      <div>
        {this.getMenu()}
      </div>
    );
  }
//)
}
var styler = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: 'white'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#222',
    padding: '2.5em',
    fontSize: '1.15em',
    overflow: 'hidden'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
  },
  bmItem: {
    display: 'inline-block',
    width: '100%',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
export default HeaderPage;