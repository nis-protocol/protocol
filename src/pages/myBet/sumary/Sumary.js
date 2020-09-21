import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { globalProps } from '../../../data';

class Sumary extends Component {
    render() {
        return (
            <Row {...globalProps.row} className="sumary">
                <Col {...globalProps.col4} className="style-col4"></Col>
                <Col {...globalProps.col3} className="price-total">
                    <p>Total Balance</p>
                    <h1>$256.2398239</h1>
                </Col>
                <Col {...globalProps.col3} className="price-total win-total">
                    <p>Total Win</p>
                    <h1>$100.3232423</h1>
                </Col>
                <Col {...globalProps.col4} className="style-col4"></Col>
            </Row>
        );
    }
}

export default Sumary;