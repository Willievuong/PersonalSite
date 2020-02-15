import React from 'react'
import {Icon} from 'antd'
import '../App.css';

import Typing from '../components/Typing'

export default function Contact(){
    const typeString = ["Hey there!", "Seems like you want to contact me", "well, here's a few way for you to do so!"]

    return(
        <div className="page">
            <div>
                Contact
            </div>
            <div>
                <Typing strings={typeString}/>
            </div>
            <div className="iconRow">
                <a href="https://www.linkedin.com/in/vuongwilliam/">
                    <Icon type="linkedin" />
                </a>
                <a href="https://github.com/willievuong">
                    <Icon type="github" />
                </a>
                <a href="mailto:willievuong@gmail.com">
                    <Icon type="mail" />
                </a>
            </div>
    
        </div>
    )
}
