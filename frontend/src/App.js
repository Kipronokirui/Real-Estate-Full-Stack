import React from 'react'
import './App.css';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import AppFooter from './components/common/Footer'
import AppHeader from './components/common/AppHeader'
import HomePage from './pages/HomePage';
import PropertyListPage from './pages/PropertyListPage';

const {Content, Header, Footer} = Layout
function App() {
  return (
    <Router>
      <Layout className='app-layout'>
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/properties" element={<PropertyListPage />} />
          </Routes>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
