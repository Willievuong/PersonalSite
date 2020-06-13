import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import './style.css'

//TODO: To be a template for all the notes
// Only tells the weather as of this moment

function Note(){
    const weather = useSelector(state => state.weatherReducer.weather)
    return(
        <div className="weather">
            <div style={{fontSize: "3em"}}>
                Weather    
            </div>
            
            <div>
                {weather}
            </div>
        </div>
    )

}

export default Note; 