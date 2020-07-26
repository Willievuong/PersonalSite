import React from 'react';
import { Row, Col, Collapse, Button } from 'antd'
import { LinkOutlined } from '@ant-design/icons';
import QueueAnim from "rc-queue-anim";

import '../../App.css';
import './style.css'
import stutter from '../../assets/stutter.jpg'
import cng from '../../assets/cng.png'
import wistly from '../../assets/wistly.png'
import infopost from '../../assets/InfoPost.png'


const { Panel } = Collapse;


export default function Projects(){
    const fillerCards = [
        {   
            "id": 0,
            "title": "ConnectNGive",
            "content": "An CoronaVirus PPE Donation Distibution App",
            "builtWith": "Information About Project: React, Django",
            "website": "https://www.connectngive.org/",
            "image": cng
        },
        {   
            "id": 1,
            "title": "Wistly",
            "content": "An general delivery mobile app",
            "builtWith": "Information About Project: React, Django",
            "website": "https://wistly.io/",
            "image": wistly
        },
        {
            "id": 2,
            "title": "InfoPost",
            "content": "An news aggregrator that verifies the sources and rate its trustworthiness",
            "builtWith": "Information About Project: React, Django",
            "website": "https://theinfopost.com/",
            "image": infopost
        },
        {
            "id": 3,
            "title": "Stutter",
            "content": "An web application that transcribes an interviewee and analyze the response",
            "builtWith": "Information About Project: React, Django",
            "website": "https://devpost.com/software/stutter",
            "image": stutter
        },
        // {
        //     "id": 4,
        //     "title": "Roomm8",
        //     "content": "An roommate management application",
        //     "builtWith": "Information About Project: React, Django",
        //     "website": "https://github.com/Willievuong/roomm8",
        //     "image": stutter
        // },
    ]

    function cardBuilder(data){
        return(
            <>
                <Col span={12}>
                    <QueueAnim delay={700} interval={500} duration={1500}>
                        <img key="1" className="projectCard" alt={data.title} src={data.image}/>
                    </QueueAnim>
                </Col>
                <Col span={12}>
                    <QueueAnim delay={900} interval={700} duration={1500}>
                        <div key="1" className="projectBody">
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
                    </QueueAnim>
                </Col>
            </>
        )
    }

    return(
        <div className="project">
            <QueueAnim delay={200} interval={300} duration={1500}>
                <div key="1" style={{fontSize: "3em"}}>
                    Projects
                </div>

                <div key="2" style={{fontSize: "2em", textAlign: "left", marginBottom: "3%"}}>
                    A selection of a few of my projects
                </div>

                <div className="projectContent"> 
                    <Row gutter={8}>
                        {fillerCards.map((data) => cardBuilder( data ))}
                    </Row>
                </div>
            </QueueAnim>
        </div>

    )
}