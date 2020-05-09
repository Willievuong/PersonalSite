import React from 'react';
import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Notes from './pages/Notes'
import WorkInProgress from './pages/WorkInProgress';
import Contact from './pages/Contact';
import ErrorPage from './pages/404'

import {useSelector} from 'react-redux'

function Main(){
    const screenKey = useSelector(state => state.setScreenReducer.screenKey)

    const renderPage = (key) => {
        switch(key){
            case "1":
                return <Home/> 

            case "2":
                return <About/> 

            case "3":
                return <Projects/>
            case "4":
                return <Notes/>

            case "5":
                return <WorkInProgress/>

            case "6":
                return <Contact/>

            case "7":
                return <Contact/>

            default: 
                return <ErrorPage/>
        } 
    }

    return renderPage(screenKey)
}


export default Main
