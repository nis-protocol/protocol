import React, { Component } from 'react';
import { Layout } from 'antd';
import './ListBet.scss';
import Sumary from './sumary/Sumary';
import TableDashboard from './table/Table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUser, actionLoading } from '../../action';
import Web3 from "web3";

const { Content } = Layout;

class ListBet extends Component {
    componentDidMount(){
        this.loadBlockchainData()
      }
    
      async loadBlockchainData() {
        const {getDataMetamask} = this.props;
        const web3 = new Web3(Web3.givenProvider)
        const accounts = await web3.eth.getAccounts()
        console.log("account: ", accounts)
        if(accounts.length > 0){
          const balance = await web3.eth.getBalance(accounts[0])
          let dataMetamask = {
            accounts,
            balance
          }
          console.log("test: ", dataMetamask)
          getDataMetamask(dataMetamask)
        }
      }

    render() {
        return (
            <Content className="dashboard">
                <div className="style-sumary">
                    <Sumary />
                </div>
                <div className="table-dashboard">
                    <TableDashboard/>
                </div>
            </Content>
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ListBet);