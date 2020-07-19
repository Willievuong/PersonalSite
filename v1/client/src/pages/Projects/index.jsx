import React from 'react';
import { Row, Col, Collapse } from 'antd'

import '../../App.css';
import './style.css'
import  stutter from '../../assets/stutter.jpg'

const { Panel } = Collapse;

export default function Projects(){
    const fillerCards = [
        {   
            "id": 1,
            "content": "Content of a Card"
        },
        {
            "id": 2,
            "content": "Content of a Card"
        },
        {
            "id": 3,
            "content": "Content of a Card"
        },
    ]

    function cardBuilder(data){
        // let { title, content } = data
        return(
            <>
                <Col span={12}>
                    {/* <Card hoverable className="projectCard" cover={<img alt="stutter" src={stutter}/>}key={data.id} title={title}>
                        <p>{content}</p>
                    </Card> */}
                    <img className="projectCard" alt="stutter" src={stutter}/>
                </Col>
                <Col span={12}>
                    <div className="projectBody">
                        <div className="projectBodyTitle">
                            Stutter
                        </div>
                        <div className="projectBodyContent">
                            Story about stutter
                        </div>
                        <Collapse bordered={false}>
                            <Panel header="Built With">
                                <p>
                                    Information about the project here
                                </p>
                            </Panel>
                        </Collapse>
                    </div>
                </Col>
            </>
        )
    }

    return(
        <div className="project">
            <div style={{fontSize: "3em"}}>
                Projects
            </div>

            <div style={{fontSize: "2em", textAlign: "left"}}>
                A selection of a few of my projects
            </div>

            <div className="projectContent"> 
                <Row gutter={8}>
                    {/* {fillerCards.map((data) => cardBuilder( data ))} */}
                    {cardBuilder(fillerCards[0])}
                    {cardBuilder(fillerCards[1])}
                    {cardBuilder(fillerCards[1])}
                    {cardBuilder(fillerCards[1])}
                </Row>
            </div>

        </div>

    )
}