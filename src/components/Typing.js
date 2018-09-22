import React from 'react';
import '../App.css';
import Typed from 'typed.js';

// const options = {
//   strings: ["Hi", "Hey", "Hello!", "The website is currently under construction,", "check back in a few days!" ],
//   typeSpeed: 50,
//   backSpeed: 50, 
// }

class TypedReactDemo extends React.Component {
  constructor(){
    super(); 
  }

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
      <div> 
          <span
              ref={(el) => { this.el = el; }}
          />
      </div>
    );
  }
}

export default TypedReactDemo;