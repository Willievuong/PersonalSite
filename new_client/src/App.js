import React from 'react';
import './App.css';
import { Layout } from 'antd';
import SiderNav from './components/SiderNav'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
import Main from './Main'


function App() {
  return (
    <Layout style={{height: '100%'}}>
      <SiderNav/>
      <Layout>
        <HeaderNav/>
        <Main/>
        <Footer/>
      </Layout>
    </Layout>
  );
}

export default App;
