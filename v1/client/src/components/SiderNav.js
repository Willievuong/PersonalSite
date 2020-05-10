import React from 'react'
import { Layout, Menu } from 'antd';
import { HomeOutlined, UserOutlined, DatabaseOutlined, 
          ReadOutlined, ToolOutlined, MailOutlined, 
          ThunderboltOutlined 
        } 
        from '@ant-design/icons'

import {useDispatch} from 'react-redux'
import {setScreen} from '../redux/actions'
const {SubMenu} = Menu;
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
          <HomeOutlined/>
          <span className="nav-text">Home</span>
        </Menu.Item>
        <Menu.Item key="2">
          <UserOutlined/>
          <span className="nav-text">About</span>
        </Menu.Item>
        <Menu.Item key="3">
          <DatabaseOutlined/>
          <span className="nav-text">Projects</span>
        </Menu.Item>
        <SubMenu key="sub1" title={
            <span>
                <ReadOutlined/>
                <span className="nav-text">Note</span>
            </span>
        }>
          <Menu.Item key="4">
          <ReadOutlined/>
            <span className="nav-text">Notes</span>
          </Menu.Item>
          <Menu.Item key="5">
            <ToolOutlined/>
            <span className="nav-text">Under Construction</span>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="6">
          <MailOutlined/>
          <span className="nav-text">Contact</span>
        </Menu.Item>
        <Menu.Item key="7">
              <ThunderboltOutlined/>
              <span className="nav-text">Weather</span>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}

export default SiderNav