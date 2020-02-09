import React from 'react';
import './App.css';
import { Layout } from 'antd';


import SiderNav from './components/SiderNav'
import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
import Landing from './pages/Landing'

function App() {
  const resume =
  "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ";
  return (
    <Layout style={{height: '100%'}}>
      <SiderNav/>
      <Layout>
        <HeaderNav/>
        <Landing/>
        <Footer/>
      </Layout>
    </Layout>
  );
}

export default App;
