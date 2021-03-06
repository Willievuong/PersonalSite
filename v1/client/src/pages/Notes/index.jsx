import React from 'react'
import { Card, Col } from 'antd'

import Typing from '../../components/Typing'
import '../../App.css'
import './style.css'


function Notes(){
    const typeString = ["All my notes are written on medium!"]

    const fillerCards = [
        {   
            "id": 1,
            "title": "Sample 1",
            "content": "Content of a Card"
        },
        {
            "id": 2,
            "title": "Sample 2",
            "content": "Content of a Card"
        },
        {
            "id": 3,
            "title": "Sample 3",
            "content": "Content of a Card"
        },
    ]
    
    function cardBuilder(data){
        let { title, content } = data
        return(
            <Col span={8}>
                <Card className="projectCard" key={data.id} title={title}>
                    <p>{content}</p>
                </Card>
            </Col>
        )
    }


    return(
        <div className="notes">
            <div style={{fontSize: "3em"}}>
                Notes    
            </div>

            <div style={{fontSize: "2em", textAlign: "left"}}>
                <Typing strings={typeString}/>
            </div>

            <Col>
                {fillerCards.map((data) => cardBuilder( data ))}
            </Col>
            
        </div>
    )
}


export default Notes; 