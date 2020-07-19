import React from 'react'
import Typed from 'typed.js'

import '../../App.css';
import './style.css'

class Typing extends React.Component {
    componentDidMount() {
      const { strings } = this.props;

      const options = {
        strings: strings,
        typeSpeed: 50,
        backSpeed: 50, 
      }
      this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
      this.typed.destroy();
    }
  
    render() {
      return (
        <span className="typeString"> 
            <span
                ref={(el) => { this.el = el; }}
            />
        </span>
      );
    }
  }
  
  export default Typing;