import React from 'react'
import { Layout, Menu } from 'antd';
import { 
  HomeOutlined, 
  UserOutlined, 
  DatabaseOutlined, 
  ReadOutlined,
  MailOutlined, 
  ThunderboltOutlined 
  } from '@ant-design/icons'

import {useDispatch} from 'react-redux'
import{ Link } from "react-router-dom";

import {setScreen} from '../../redux/actions'

const { Sider } = Layout;

function SiderNav(){
    const dispatch = useDispatch()

    function handleClick(e){
      dispatch(setScreen(e.key))
    }

    return(
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo"/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} onClick={handleClick}>
        <Menu.Item key="1">
          <Link to="/">
            <HomeOutlined/>
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/about">
            <UserOutlined/>
            <span className="nav-text">About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/projects">
            <DatabaseOutlined/>
            <span className="nav-text">Projects</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/notes">
            <ReadOutlined/>
            <span className="nav-text">Notes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/wip">
            <ThunderboltOutlined/>
            <span className="nav-text">Weather</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link to="/contact">
            <MailOutlined/>
            <span className="nav-text">Contact</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}

export default SiderNav