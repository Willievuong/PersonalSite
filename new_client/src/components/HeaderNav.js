import React from 'react';
import { Layout, Menu, Icon } from "antd";
const { Header} = Layout;

const { SubMenu } = Menu;

class HeaderNav extends React.Component{
    handleClick = e => {
        console.log('click ', e);
      };
    
      render() {
        return (
          <Menu
            theme="dark"
            onClick={this.handleClick}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="1">Option 1</Menu.Item>
                <Menu.Item key="2">Option 2</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        );
      }
}


export default HeaderNav