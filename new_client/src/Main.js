import React from 'react';
import Landing from './pages/Landing';
import Projects from './pages/Projects';
import WorkInProgress from './pages/WorkInProgress';
import Contact from './pages/Contact';

import {useSelector} from 'react-redux'

function Main(){
    const screenKey = useSelector(state => state.setScreenReducer.screenKey)

    const renderPage = (key) => {
        switch(key){
            case "1":
                return <Landing/> 

            case "2":
                return <Projects/>

            case "3":
                return <WorkInProgress/>

            case "4":
                return <Contact/>

            default: 
                return ""
        } 
    }

    return renderPage(screenKey)
}


export default Main
