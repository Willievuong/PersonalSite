import React from 'react';
import { Layout } from "antd";


import './style.css';

const { Header } = Layout;

function HeaderNav(){
    return(
        <Header className="header" style={{ background: '#fff', padding: 0 }} />
    )
}


export default HeaderNav