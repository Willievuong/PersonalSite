import React, { Component } from 'react';
import '../App.css';

/*Body of the front page*/
class IntroPage extends Component{
  render(){
    return(
      <div class="IntroPage"> 
        {/*TODO: What is this parent business */}
        <p className="App-intro">
          The site is under construction, check back in a few days for updates, meanwhile, here's my resume!
        </p>
        {/* TODO: Handle Button OnClick */}
        <button className="Resume-Button" href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ"> 
          Resume
        </button>
      </div>
    );
  }
}

export default IntroPage;