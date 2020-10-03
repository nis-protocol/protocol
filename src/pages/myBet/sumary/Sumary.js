import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { globalProps } from '../../../data';
import { connect } from 'react-redux';
import { Spin } from 'antd';

class Sumary extends Component {
    render() {
        const {dataMetamask} = this.props;

        let handleBalance = dataMetamask ? 'ETH ' + ((dataMetamask.balance)/(Math.pow(10, 18))).toFixed(3) : <Spin />

        return (
            <Row {...globalProps.row} className="sumary">
                <Col {...globalProps.col4} className="style-col4"></Col>
                <Col {...globalProps.col3} className="price-total">
                    <p>Total Balance</p>
                     <h1>{handleBalance}</h1>
                </Col>
                <Col {...globalProps.col3} className="price-total win-total">
                    <p>Total Win</p>
                    <h1>ETH 15.325</h1>
                </Col>
                <Col {...globalProps.col4} className="style-col4"></Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataMetamask: state.userReducer.dataMetamask,
    }
}

export default connect(mapStateToProps)(Sumary);