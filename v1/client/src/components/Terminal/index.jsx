import React from 'react'
import { PlusSquareOutlined, SearchOutlined, LineOutlined, MenuOutlined, CloseCircleFilled, SwitcherOutlined
  } 
  from '@ant-design/icons'
import Typing from '../Typing'

import '../../App.css';
import './style.css'


function Terminal(props){
    

    return(
        <div className="terminal">
            <div className="termHeader">
                <div className="termHeaderLeft">
                    <span className="termNewTab">
                        <PlusSquareOutlined className="iconButton" style={{fontSize: '1.25em'}}/>
                    </span>
                </div>
                <div className="termHeaderMiddle">
                    willievuong@home:~
                </div>
                <div className="termHeaderRight">
                    <span>
                        <SearchOutlined className="iconButton" style={{fontSize: '1.25em'}}/>
                    </span>
                    <span>
                        <MenuOutlined className="iconButton" style={{fontSize: '1.25em'}}/>
                    </span>
                    <span>
                        <LineOutlined style={{fontSize: '1.25em'}}/>
                    </span>
                    <span>
                        <SwitcherOutlined style={{fontSize: '1.25em'}}/>
                    </span>
                    <span>
                        <CloseCircleFilled style={{fontSize: '1.25em', color: 'orange'}}/>
                    </span>
                </div>
            </div>
            <div className="termTab">
                <div className="termTabCol termTabSelected">
                    willievuong@home:~
                </div>
                <div className="termTabCol termTabUnSelected">
                    willievuong@home:~/PlansForWorldDomination
                </div>
                <div>

                </div>
            </div>

            <div className="termBody">
                <span className="user">
                    willievuong@home:
                </span>
                <span className="location">
                    ~
                </span>
                <span className="command">
                    $<Typing strings={props.typeString}/>
                    
                </span>

            </div>
        </div>
    )


}

export default Terminal; 