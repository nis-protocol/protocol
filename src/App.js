import React, { Component } from 'react';
import 'antd/dist/antd.css';
import HeaderComponent from './components/header/Header';
import { Layout } from 'antd';
import FooterComponent from './components/footer/Footer';
import Dashboard from './pages/dashboard/Dashboard';
import Vote from './pages/vote/Vote';
import 'antd/dist/antd.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      // <Layout>
      //   <HeaderComponent />
      //     <Dashboard/>
      //   <FooterComponent />
      // </Layout>
      <Router>
        <Layout className="App">
          <HeaderComponent />

          <Switch>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
          
          <FooterComponent/>
        </Layout>
      </Router>
    );
  }
}

export default App;