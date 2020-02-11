import React, { useState } from 'react'
import connect from 'react-redux'
import { Layout, Menu, Icon} from 'antd';

const {SubMenu} = Menu;
const { Sider } = Layout;

function SiderNav(){
    const [view, setView] = useState(1)

    function handleClick(e){
      setView(e.key)
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
          <Icon type="user"/>
          <span className="nav-text">About</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="database"/>
          <span className="nav-text">Projects</span>
        </Menu.Item>
        <SubMenu key="sub1" title={
            <span>
                <Icon type="read"/>
                <span className="nav-text">Note</span>
            </span>
        }>
          
          <Menu.Item key="3">
          <Icon type="tool"/>
          <span className="nav-text">Under Construction</span>
        </Menu.Item>
        </SubMenu>
        <Menu.Item key="4">
          <Icon type="mail"/>
          <span className="nav-text">Contact</span>
        </Menu.Item>
      </Menu>
    </Sider>
    )
}

export default SiderNav