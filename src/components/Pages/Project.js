import React, { Component } from 'react';
import '../../App.css';
import Typing from '../Typing'
import Cards from '../Cards'


class Project extends Component{
  constructor(){
    super(); 
  }

  render(){
    return(
      <div className="Page"> 
        <div className="Intro-Type">
          <Typing strings={["Whoops!", "I don't have anything cool to show yet!", 
                           "check back in a few weeks!"
                          ]}
          />
        </div>
        <a href="https://github.com/Willievuong/roomm8">
          <Cards/>
        </a>
          {/* <div className="IntroPage"> 
          <img src={construction} className="Construction" alt="Construction"/>
          <p className="App-intro">
            This part of the is under construction, check back in a few days for updates.
          </p>
          </div> */}
          
          {/* <ul className="Project-List">
            <li className="Project-Item">
              <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/>
              <div className="Project-Text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere ornare imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae suscipit ante. Mauris vitae semper lorem. Suspendisse facilisis iaculis vestibulum. Proin ut ultricies orci, vel mattis ipsum. Phasellus vitae est posuere, dictum diam quis, rutrum risus. Proin volutpat neque dignissim malesuada dignissim. </div> </div>
            </li>
            <li className="Project-Item">
              <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/>
              <div className="Project-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere ornare imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae suscipit ante. Mauris vitae semper lorem. Suspendisse facilisis iaculis vestibulum. Proin ut ultricies orci, vel mattis ipsum. Phasellus vitae est posuere, dictum diam quis, rutrum risus. Proin volutpat neque dignissim malesuada dignissim.</div> </div>
            </li>
            <li className="Project-Item">
              <div className="Project-Img"><img src="https://via.placeholder.com/200x200"/>
              <div className="Project-Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere ornare imperdiet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae suscipit ante. Mauris vitae semper lorem. Suspendisse facilisis iaculis vestibulum. Proin ut ultricies orci, vel mattis ipsum. Phasellus vitae est posuere, dictum diam quis, rutrum risus. Proin volutpat neque dignissim malesuada dignissim.</div> </div>
            </li>
          </ul> */}
          
          <div className="Project-End">
            If you are curious about other project I've done in the past that aren't listed here, 
            check my <strong><a href="https://devpost.com/willievuong">devpost&nbsp;</a></strong>
            and <strong><a href="https://github.com/Willievuong">github</a></strong>!
          </div>
      </div>
    )
  }
}

export default Project;