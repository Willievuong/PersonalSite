import React, { Component } from 'react';
import '../App.css';

const name = '<w' + 'vuong.frontend>';
const nameExtra = '<w' + 'vuong.backend>';

class About extends Component{
  constructor(){
    super(); 
  }

  render(){
    return(
      <div className="About"> 
        <div className="About-title"> 
          wvuong() - Linux man page
        </div>
        <div className="About-descriptor ">
          <strong>Name</strong><br/>
        </div>
        <div className="About-text">
          wvuong - Initiate connection with future employer 
        </div> 
        <div className="About-descriptor">
          <strong>Synopsis</strong> <br/>
        </div>
        <div className="About-text"> 
          #include {name}<br/>
          #include {nameExtra}<br/>
          int wvuong(const options);<br/>
        </div>
        <div className="About-descriptor">
          <strong>Description</strong><br/>
        </div>
        <div className="About-text"> 
          The <strong>wvuong()</strong> will call the required library and configure the required file and then return the correct result
        </div>
        <div className="About-descriptor">
          <strong>Return Value</strong><br/>
        </div>
        <div className="About-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tempor dolor. Morbi rutrum nibh eget purus rutrum pellentesque. In.
        </div>
        <div className="About-descriptor">
          <strong>Error</strong> <br/>
        </div>
        <div className="About-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tempor dolor. Morbi rutrum nibh eget purus rutrum pellentesque. In.
        </div>
        <div className="About-descriptor">
          <strong>Notes</strong><br/>
        </div>
        <div className="About-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tempor dolor. Morbi rutrum nibh eget purus rutrum pellentesque. In.
        </div>
        <div className="About-descriptor">
          <strong>Example</strong> <br/>
        </div>
        <div className="About-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tempor dolor. Morbi rutrum nibh eget purus rutrum pellentesque. In.
        </div>
        <div className="About-descriptor">
          <strong>See Also</strong><br/>
        </div>
        <div className="About-text"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at tempor dolor. Morbi rutrum nibh eget purus rutrum pellentesque. In.
        </div>
      </div>
    )
  }
}

export default About;