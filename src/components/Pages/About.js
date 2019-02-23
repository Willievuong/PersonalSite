import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../../App.css';

const name = '<w' + 'vuong.frontend>';
const nameExtra = '<w' + 'vuong.backend>';
const library = '<stdio.h' + '>';
const codeBegin = "int main(){";
const codeMid = "    return 0;" 
const codeEnd = "}";

class About extends Component{
  constructor(){
    super(); 
  }

  render(){
    return(
      <div className="Page"> 
        <div className="About-title"> 
          <p className="alignleft">wvuong()</p>
          <p className="aligncenter">Linux Programmer's Manual</p>
          <p className="alignright">wpvuong()</p>
        </div>
        <div className="About-descriptor ">
          <strong>Name</strong><br/>
        </div>
        <div className="About-text">
          wvuong - Streams input and allocate dynamic result
        </div> 
        <div className="About-descriptor">
          <strong>Synopsis</strong> <br/>
        </div>
        <div className="About-text"> 
          #include {name}<br/>
          #include {nameExtra}<br/><br/>
          void * wvuong(char * options);
        </div>
        <div className="About-descriptor">
          <strong>Description</strong><br/>
        </div>
        <div className="About-text"> 
          The <strong>wvuong()</strong> function takes in a string, parse it as a command, and return a pointer to the allocated result.
          On error, the function returns a pointer to a NULL. 
        </div>
        <div className="About-descriptor">
          <strong>Return Value</strong><br/>
        </div>
        <div className="About-text"> 
          The <strong>wvuong()</strong> function return a pointer to the allocated result. On error, the function returns NULL.
        </div>
        <div className="About-descriptor">
          <strong>Notes</strong><br/>
        </div>
        <div className="About-text"> 
          Give me a internship...
        </div>
        <div className="About-descriptor">
          <strong>Example</strong> <br/>
        </div>
        <div className="About-text"> 
          #include {name}<br/>
          #include {nameExtra}<br/>
          #include {library}<br/><br/>
          
          {codeBegin}<br/>
          &nbsp;&nbsp;char * command = "Some sort of backend project"<br/><br/>
          &nbsp;&nbsp;printf(wvuong(command));<br/>
          <br/>&nbsp;{codeMid}<br/>
          {codeEnd}
        </div>
        <div className="About-descriptor">
          <strong>Conforming to</strong><br/>
        </div>
        <div className="About-text"> 
          C89, POSIX.1-2001.
        </div>
        <div className="About-descriptor">
          <strong>See Also</strong><br/>
        </div>
        <div className="About-text"> 
          <Link to="/project" className="text">Project</Link>(2), <a className="text" href="https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ">Resume</a>(1)
        </div>
      </div>
    )
  }
}

export default About;