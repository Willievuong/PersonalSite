import React from 'react';
import './App.css';
import { Row, Col } from 'antd';

import HeaderNav from './components/HeaderNav'
import Footer from './components/Footer'
import Landing from './pages/Landing'


function App() {
  const resume =
  "https://1drv.ms/f/s!AhgK9ZtBhYlypqJaL95HYc1zRQcBOQ";
  return (
    <div>
      <Row>
        <Col span={4}>
          <HeaderNav/>
        </Col>
        <Col span={20}>
          <Landing/>
        </Col>
      </Row>
      <Footer/>
    </div>
  );
}

export default App;
