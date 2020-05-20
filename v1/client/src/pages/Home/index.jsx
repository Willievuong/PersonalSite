import React from 'react'
import { Button } from "antd";

import Typing from '../../components/Typing'
import Terminal from '../../components/Terminal'
import '../../App.css'
import './style.css'


function Home(){
    const resume = "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ";
    const typeString = ["Hi", "Hey", "Hello!", "I'm William,", "nice to meet you ;)"]
    
    return(
        <div className="page">
            <Terminal typeString={typeString}/>

            <div className="helloString">
                <Typing strings={typeString}/>
            </div>

            <Button
                onClick={() => window.open(resume, "_blank")}
                type="primary"
                shape="round"
                size="large"
                className="resumeButton"
            >
                Resume
            </Button>
        </div>
    )
}


export default Home; 