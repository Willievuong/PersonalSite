import React from 'react'; 
import { Icon, Button, Avatar } from "antd";

import '../App.css';
import face from "../assets/photo.jpg";


function Landing(){
    const resume = "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ";
    return (
    <div className="content">
        <div className="face">
            <Avatar src={face} alt="face" size={128} />
            <h1>William Vuong</h1>
        </div>
        <div>
            <p>A work in progress ;)</p>
        </div>
        <div>
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

        <Button
            onClick={() => window.open(resume, "_blank")}
            type="primary"
            shape="round"

            >
            Resume
        </Button>
    </div>
    );
}



export default Landing;