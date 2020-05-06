import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Content  } from 'react-mdl';
import Main from './components/main'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header class="header-color" title=" Mr. Rahul " scroll>
            <Navigation>
            <a href="/">Landing Page</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/project">Projects</a>
            
            </Navigation>
        </Header>
        <Drawer title="Mr. Navi">
            <Navigation>
            <a href="/">Landing Page</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/project">Projects</a>
            
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>

  );
}

export default App;
