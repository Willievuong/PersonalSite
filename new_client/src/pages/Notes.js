import React from 'react'
import { Button } from "antd";

import Typing from '../components/Typing'
import '../App.css'


function Notes(){
    const typeString = ["All my notes are written on medium!"]
    
    return(
        <div className="page">
            <Typing strings={typeString}/>
            
        </div>
    )
}


export default Notes; 