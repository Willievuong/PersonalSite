import React from 'react';
import {useSelector} from 'react-redux'
import { Layout } from 'antd';

import {
    useParams
  } from "react-router-dom";

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
    let {page} = useParams()
    
    if(page === undefined){
        page = "/"
    }

    const renderPage = (key) => {
        switch(key){
            case "/":
                return <Home/>

            case "about":
                return <About/>
                
            case "projects":
                return <Projects/>

            case "notes":
                return <Notes/>

            case "weather":
                return <WorkInProgress/>

            case "contact":
                return <Contact/>

            default: 
                return <ErrorPage/>
        } 
    }

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <SiderNav currentPage={page}/>
            <Layout style={{background: '#f0f0f0'}}>
            <HeaderNav/>
            <Content className="content">        
                {renderPage(page)}
            </Content>
            <Footer style={{background: 'none'}}/>
            </Layout>
        </Layout>

    ) 
}


export default Main
