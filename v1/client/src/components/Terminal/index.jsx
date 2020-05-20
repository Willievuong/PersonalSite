import React from 'react'

import './style.css'
import Typing from '../Typing'

function Terminal(props){
    

    return(
        <div className="terminal">
            <div className="termHeader">
                <div className="termHeaderLeft">
                    <div className="termNewTab">

                    </div>
                </div>
                <div className="termHeaderMiddle">
                    willievuong@home:~/
                </div>
                <div className="termHeaderRight">
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>
            <div className="termTab">
                <div className="termTabCol termTabSelected">
                    willievuong@home:~
                </div>
                <div className="termTabCol termTabUnSelected">
                    willievuong@home:~/CoolStuff
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