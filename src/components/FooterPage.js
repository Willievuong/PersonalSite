import React, { Component } from 'react';
import github from '../img/github.png'
import mail from '../img/gmail.png'
import linkedin from '../img/linkedin.png'
import hackerrank from '../img/hackerrank.png'
import '../App.css';

/* Bottom of the page */
class FooterPage extends Component{
    render(){
        return(
            <div className="site-footer">
                <p class="site-footer-text"> 
                    <a href="https://github.com/willievuong"><img className="icon" src={github}/></a>
                    <a href="mailto:wpvuong@ucsd.edu"><img className="icon" src={mail}/></a>
                    <a href="https://linkedin.com/in/vuongwilliam"><img className="icon" src={linkedin}/></a>
                    <a href="https://hackerrank.com/willievuong"><img className="icon" src={hackerrank}/></a>
                </p>
            </div>
        )
    }
}

export default FooterPage;