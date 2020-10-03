import React, { Component } from 'react';
import 'antd/dist/antd.css';
import HeaderComponent from './components/header/Header';
import { Layout } from 'antd';
import FooterComponent from './components/footer/Footer';
import ListBet from './pages/listBet/ListBet';
import MyBet from './pages/myBet/MyBet';
import Vote from './pages/vote/Vote';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUser, actionLoading } from './action';
import Web3 from "web3";

class App extends Component {
  componentDidMount(){
    this.loadBlockchainData()
  }

  async loadBlockchainData() {
    const {getDataMetamask} = this.props;
    const web3 = new Web3(Web3.givenProvider)
    const accounts = await web3.eth.getAccounts()
    if(accounts.length > 0){
      const balance = await web3.eth.getBalance(accounts[0])
      let dataMetamask = {
        accounts,
        balance
      }
      getDataMetamask(dataMetamask)
    }
  }

  render() {
    return (
      <Router>
        <Layout className="App">
          <HeaderComponent />

          <Switch>
            <Route path="/my-bet">
              <MyBet />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/">
              <ListBet />
            </Route>
          </Switch>

          <FooterComponent />
        </Layout>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDataMetamask: actionUser.getDataMetamask,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);