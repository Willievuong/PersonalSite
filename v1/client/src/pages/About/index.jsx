import React from 'react'; 
import QueueAnim from "rc-queue-anim";
import { Avatar } from "antd";

import '../../App.css';
import './style.css'
import face from "../../assets/photo.jpg";

function About(){

    return (

    <div className="page">
        <div className="about">
            <QueueAnim delay={200} interval={250} duration={1500}>
                <div key="1">
                    <Avatar src={face} alt="face" size={128} />
                </div>
                <div key="2" className="biography">
                    <p>
                        I'm <b>William Vuong</b>, currently I am the lead app developer at 
                        <a href="https://theinfopost.com/"> Infopost </a> 
                        and co-Founder at 
                        <a href="https://wistly.io/"> Wistly. </a> 
                        Currently I reside in San Diego, but I consider home to be San Jose. 
                        Prior to working at Infopost and Wistly, I studied 
                        Mathematics Computer Science, a multi-disciplinary major at 
                        <a href="https://ucsd.edu/"> UC San Diego </a>. 
                    </p>
                    <p>
                        Generally speaking, I wear many hats, like <b>frontend</b> and <b>backend</b>. I find a lot of joy and passion
                        building beautifu`l and functional apps. Its really rewarding for me to create and bring life from design and idea
                        into a product that is alive and useful to others.  
                    </p>
                    <p>
                        When I'm not coding, I like to read and research random topics, and as a result I have accummulated a wealth
                        of trivia knowledge that I'm not sure what to do with. But hey, I really enjoy it! And throughout now and 
                        the future I'll be showcasing my library of knowledge here.  
                    </p>

                    <p>
                        I love meeting people and learning something new. So if you'd like to have a chat, I'd love to hear from you!
                        You can find out the various ways to reach me in the contact section. 
                    </p>
                </div>
            </QueueAnim>
        </div>
    </div>
    );
}



export default About;