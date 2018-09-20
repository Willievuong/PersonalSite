import React from 'react';
import '../App.css';
import Typed from 'typed.js';

const options = {
  strings: ["Hi", "Hey", "Hello!", "The website is currently under construction,", "check back in a few days!" ],
  typeSpeed: 50,
  backSpeed: 50, 
}

class TypedReactDemo extends React.Component {
  constructor(){
    super(); 
  }

  componentDidMount() {
  	// If you want to pass more options as props, simply add
    // your desired props to this destructuring assignment.
  
    // You can pass other options here, such as typing speed, back speed, etc.

    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
  	// Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }

  render() {
    return (
      <div> 
          <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
          />
      </div>
    );
  }
}

// ReactDOM.render(
// 	<TypedReactDemo
//     strings={[
//     	'Some <i>strings</i> are slanted',
//       'Some <strong>strings</strong> are bold',
//       'HTML characters &times; &copy;'
//     ]}
//   />,
//   document.getElementById('react-root')
// );

export default TypedReactDemo;