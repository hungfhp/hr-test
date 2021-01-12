// import React from 'react'
// import PropTypes from 'prop-types'

import { Layout, Menu } from 'antd';
import {
  Link
} from "react-router-dom";

const { Header, Content, Footer } = Layout;

function MyLayout(props) {
  const {pages} = props
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {
            pages?.map(page=> {
              return (
                <Menu.Item key={page.path}>
                  <Link to={page.path}>{page.name}</Link>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>2021</Footer>
    </Layout>
  )
}

// MyLayout.propTypes = {

// }

export default MyLayout


