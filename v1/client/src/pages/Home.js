import React from 'react'
import { Button } from "antd";

import Typing from '../components/Typing'
import '../App.css'


function Home(){
    const resume = "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ";
    const typeString = ["Hi", "Hey", "Hello!", "I'm William,", "nice to meet you ;)"]
    
    return(
        <div className="page">
            <Typing strings={typeString}/>
            
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