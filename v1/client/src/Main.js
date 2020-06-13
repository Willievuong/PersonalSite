import React from 'react';
import {useSelector} from 'react-redux'
import { Layout } from 'antd';

import Home from './pages/Home'
import About from './pages/About';
import Projects from './pages/Projects';
import Notes from './pages/Notes'
import WorkInProgress from './pages/WorkInProgress';
import Contact from './pages/Contact';
import ErrorPage from './pages/404'
import SiderNav from './components/SiderNav'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'

const { Content } = Layout

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

            default: 
                return <ErrorPage/>
        } 
    }

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <SiderNav/>
            <Layout style={{background: '#f0f0f0'}}>
            <HeaderNav/>
            <Content className="content">        
                {renderPage(screenKey)}
            </Content>
            <Footer style={{background: 'none'}}/>
            </Layout>
        </Layout>

    ) 
}


export default Main
