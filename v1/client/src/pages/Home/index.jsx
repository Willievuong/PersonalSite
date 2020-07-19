import React from 'react'
import { Button } from "antd";
import Terminal from '../../components/Terminal'

import '../../App.css';
import './style.css'


function Home(){
    const resume = "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ"
    const calendar = "https://calendar.google.com/calendar/embed?src=willievuong%40gmail.com&ctz=America%2FLos_Angeles"
    const typeString = ["Hi", "Hey", "Hello!", "I'm William,", "nice to meet you ;)", "Lets Chat Over Coffee!"]
    
    return(
        <div>
            <Terminal typeString={typeString}/>

            <Button
                onClick={() => window.open(resume, "_blank")}
                type="primary"
                shape="round"
                size="large"
                className="homeButton"
            >
                Resume
            </Button>


            <Button
                onClick={() => window.open(calendar, "_blank")}
                type="primary"
                shape="round"
                size="large"
                className="homeButton"
            >
                Calendar
            </Button>

        </div>
    )
}


export default Home; 