import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import ConfBox from './components/ConfluenceBox';

const { Header, Content, Footer } = Layout;

const App = () => (
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Make HTML</Menu.Item>
        <Menu.Item key="2">Make PDF</Menu.Item>
        <Menu.Item key="3">Post TISTORY</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 24, minHeight: 700 }}>
        <ConfBox />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Confluence2AnyThing ©2021 Created by GeunSam2</Footer>
  </Layout>
);

export default App;