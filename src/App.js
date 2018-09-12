import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderPage from './components/HeaderPage'
import FooterPage from './components/FooterPage'
import IntroPage from './components/IntroPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderPage/> 
        <IntroPage/>
      </div>
    );
  
   /*------------------------- */
   /* Old CSS From Former Site */ 
   /* TODO: Figure out which are from Bootstrap component */
   /*--------------------------*/
  //  return(
  //   <div className="site-wrapper">
  //   <div className="site-wrapper-inner">
  //     <div className="cover-container">
  //       <div className="masthead clearfix">
  //         <div className="inner">
  //             <h4 className="masthead-brand">Willievuong</h4>
  //         </div>
  //       </div>
  //         <div className="inner cover">
  //           <h1 className="cover-heading">Hey there!</h1>
  //             <p className="lead">The site is under construction, check back in a few days for updates, meanwhile, here's my resume!</p>
  //             <button href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ">Resume</button>
  //         </div>
  //         </div>
  //     </div>
  //   </div>
  //  );  
  }
}

export default App;
