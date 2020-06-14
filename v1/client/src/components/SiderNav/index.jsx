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

function SiderNav(props){
    const dispatch = useDispatch()
    let currentPage = props.currentPage

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={currentPage} onClick={handleClick}>
        <Menu.Item key="/">
          <Link to="/">
            <HomeOutlined/>
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">
            <UserOutlined/>
            <span className="nav-text">About</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link to="/projects">
            <DatabaseOutlined/>
            <span className="nav-text">Projects</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="notes">
          <Link to="/notes">
            <ReadOutlined/>
            <span className="nav-text">Notes</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="weather">
          <Link to="/weather">
            <ThunderboltOutlined/>
            <span className="nav-text">Weather</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="contact">
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