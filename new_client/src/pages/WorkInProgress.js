import React from 'react'; 
import { Icon, Button, Avatar } from "antd";

import '../App.css';

import Typing from '../components/Typing'

function WorkInProgressPage(){
    const typeString = ["Whoops!", "this section is under construction", "check back in a few weeks!"]

    return (
    <div className="page">
        <Typing strings={typeString}/>
    </div>
    );
}



export default WorkInProgressPage;