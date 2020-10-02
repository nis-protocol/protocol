import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Spin } from 'antd';

class Sumary extends Component {
    render() {
        const {dataMetamask} = this.props;

        let handleBalance = dataMetamask ? '$' + ((dataMetamask.balance)/(Math.pow(10, 18))).toFixed(3) : <Spin />

        return (
            <div className="sumary">
                <div className="price-total">
                    <p>Total Balance</p>
                    <h1>{handleBalance}</h1>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataMetamask: state.userReducer.dataMetamask,
    }
}

export default connect(mapStateToProps)(Sumary);