import React, { Component } from 'react';
import 'antd/dist/antd.css';
import HeaderComponent from './components/header/Header';
import { Layout } from 'antd';
import FooterComponent from './components/footer/Footer';
import ListBet from './pages/listBet/ListBet';
import Vote from './pages/vote/Vote';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="App">
          <HeaderComponent />

          <Switch>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/">
              <ListBet />
            </Route>
          </Switch>
          
          <FooterComponent/>
        </Layout>
      </Router>
    );
  }
}

export default App;