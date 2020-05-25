import React from 'react'; 

import '../../App.css';
import construction from "../../assets/underconstruction.png";
import Typing from '../../components/Typing'

function WorkInProgressPage(){
    const typeString = ["Whoops!", "this section is under construction", "check back in a few weeks!"]

    return (
    <div className="page">
        <Typing strings={typeString}/>
        <div style={{textAlign: "center"}}>
            <img src={construction} style={{width: "25%", height: "auto"}}/>
        </div>
    </div>
    );
}



export default WorkInProgressPage;