import React from 'react'
import {LinkedinOutlined, GithubOutlined, MailOutlined} from '@ant-design/icons'

import '../../App.css';
import './style.css'
import Terminal from '../../components/Terminal'

export default function Contact(){
    const typeString = ["Seems like you want to contact me", "well, here's a few way for you to do so!"]

    return(
        <div>            
            <Terminal typeString={typeString}/>
            
            <div className="iconRow">
                <a href="https://www.linkedin.com/in/vuongwilliam/">
                    <LinkedinOutlined className="contactIcon"/>
                </a>
                <a href="https://github.com/willievuong">
                    <GithubOutlined className="contactIcon"/>
                </a>
                <a href="mailto:willievuong@gmail.com">
                    <MailOutlined className="contactIcon"/>
                </a>
            </div>
    
        </div>
    )
}
