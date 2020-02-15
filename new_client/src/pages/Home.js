import React from 'react'

import Typing from '../components/Typing'



function Home(){
    const typeString = ["Hi", "Hey", "Hello!", "I'm William,", "nice to meet you ;)"]
    
    return(
        <div className="page">
            <Typing strings={typeString}/>
        </div>
    )
}


export default Home; 