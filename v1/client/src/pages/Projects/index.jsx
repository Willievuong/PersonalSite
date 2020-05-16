import React from 'react';
import { Card, Row, Col } from 'antd'

import '../../App.css';

import Typing from '../../components/Typing'

export default function Projects(){
    const typeString = ["Whoops!", "I don't have anything cool to show yet!", "check back in a few weeks!"]

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
        <div className="page">
            <div>
                Projects
            </div>

            <div>
                <Typing strings={typeString}/>
            </div>

            <Row gutter={16}>
                {fillerCards.map((data) => cardBuilder( data ))}
            </Row>

            <Row gutter={16}>
                {fillerCards.map((data) => cardBuilder( data ))}
            </Row>
        </div>
    )
}