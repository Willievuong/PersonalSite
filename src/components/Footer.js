import React, { Component } from 'react';
import github from '../img/github.png'
import mail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'
import hackerrank from '../img/hackerrank.png'
import '../App.css';

/* Bottom of the page */
class FooterPage extends Component{
    constructor(){
        super(); 
    }

    render(){
        return(
            <div className="site-footer">
                    <a href="https://github.com/willievuong"><img alt="Github" className="icon" src={github}/></a>
                    <a href="mailto:wpvuong@ucsd.edu"><img alt="Mail" className="icon" src={mail}/></a>
                    <a href="https://linkedin.com/in/vuongwilliam"><img alt="Linkedin" className="icon" src={linkedin}/></a>
                    <a href="https://hackerrank.com/willievuong"><img alt="Hackerrank" className="icon" src={hackerrank}/></a>
            </div>
        )
    }
}

export default FooterPage;