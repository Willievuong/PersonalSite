import React from 'react';
import { Row, Col, Collapse, Button } from 'antd'
import { LinkOutlined } from '@ant-design/icons';

import '../../App.css';
import './style.css'
import  stutter from '../../assets/stutter.jpg'

const { Panel } = Collapse;


export default function Projects(){
    const fillerCards = [
        {   
            "id": 0,
            "title": "ConnectNGive",
            "content": "An CoronaVirus PPE Donation Distibution App",
            "builtWith": "Information About Project: React, Django",
            "website": "https://www.connectngive.org/"
        },
        {   
            "id": 1,
            "title": "Wistly",
            "content": "An general delivery mobile app",
            "builtWith": "Information About Project: React, Django",
            "website": "https://wistly.io/"
        },
        {
            "id": 2,
            "title": "InfoPost",
            "content": "An news aggregrator that verifies the sources and rate its trustworthiness",
            "builtWith": "Information About Project: React, Django",
            "website": "https://theinfopost.com/"
        },
        {
            "id": 3,
            "title": "Stutter",
            "content": "An web application that transcribes an interviewee and analyze the response",
            "builtWith": "Information About Project: React, Django",
            "website": "https://devpost.com/software/stutter"
        },
        {
            "id": 4,
            "title": "Roomm8",
            "content": "An roommate management application",
            "builtWith": "Information About Project: React, Django",
            "website": "https://github.com/Willievuong/roomm8"
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
                            {data.title}
                        </div>
                        <div className="projectBodyContent">
                            {data.content}
                        </div>
                        <Collapse bordered={false}>
                            <Panel className="projectPanel"header="Learn More">
                                <p>
                                    {data.builtWith}
                                </p>
                                <Button type="primary" 
                                    icon={<LinkOutlined />} 
                                    size={"large"} 
                                    onClick={ () => window.open(data.website, "_blank")}
                                >
                                        View Site
                                </Button>
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
                    {fillerCards.map((data) => cardBuilder( data ))}
                </Row>
            </div>

        </div>

    )
}