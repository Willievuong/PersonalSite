import React from 'react'; 

import '../../App.css';
import './style.css'
import construction from "../../assets/underconstruction.png";
import Typing from '../../components/Typing'

function WorkInProgressPage(){
    const typeString = ["Whoops!", "this section is under construction", "check back in a few weeks!"]

    return (
    <div className="wip">
        <div style={{fontSize: "3em"}}>
            Under Construction
        </div>

        <div style={{fontSize: "2em", textAlign: "left"}}>
            <Typing strings={typeString}/>
        </div>

        <div style={{textAlign: "center"}}>
            <img alt="wip" src={construction} style={{width: "25%", height: "auto"}}/>
        </div>
    </div>
    );
}



export default WorkInProgressPage;