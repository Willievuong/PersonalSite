import React from 'react';
import './App.css';
import { Layout } from 'antd';
import SiderNav from './components/SiderNav'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
import Main from './Main'

const { Content } = Layout

function App() {
  return (
    <Layout style={{height: '100%'}}>
      <SiderNav/>
      <Layout style={{background: 'white'}}>
        <HeaderNav/>
        <Content className="content">        
          <Main/>
        </Content>
        <Footer style={{background: 'none'}}/>
      </Layout>
    </Layout>
  );
}

export default App;
