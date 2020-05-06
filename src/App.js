import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer,Content  } from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header class="header-color" title=" Mr. Rahul " scroll>
            <Navigation>
            <Link to="/">Landing Page</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/project">project</Link>
            </Navigation>
        </Header>
        <Drawer title="Mr. Navi">
            <Navigation>
            <Link to="/">Landing Page</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/project">project</Link>
            
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
