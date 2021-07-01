import React from 'react';
import { Layout } from 'antd';
import Publications from '../components/Publications';

const { Header, Footer, Content } = Layout;

function Main() {
  return (
    <Layout>
      <Header
        style={{
          zIndex: 1,
          width: '100%',
          color: 'white',
          fontSize: '20px',
        }}
      >
        Publications
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Publications />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Foleon Assessment ©2021 Created by Melih Kilic
      </Footer>
    </Layout>
  );
}

export default Main;
