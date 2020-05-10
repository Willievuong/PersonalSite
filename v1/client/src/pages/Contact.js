import React from 'react'
import {LinkedinOutlined, GithubOutlined, MailOutlined} from '@ant-design/icons'
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
                    <LinkedinOutlined/>
                </a>
                <a href="https://github.com/willievuong">
                    <GithubOutlined/>
                </a>
                <a href="mailto:willievuong@gmail.com">
                    <MailOutlined/>
                </a>
            </div>
    
        </div>
    )
}
