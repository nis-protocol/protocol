import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { globalProps } from '../../../data/props';

class Sumary extends Component {
    render() {
        return (
            <Row {...globalProps.row} className="sumary">
                <Col {...globalProps.col4}></Col>
                <Col {...globalProps.col6} className="price-total">
                    <p>Supply Balance</p>
                    <h1>$256.2398239</h1>
                </Col>
                <Col {...globalProps.col6} className="price-use">
                    <p>Supply Balance</p>
                    <h1>$256.2398239</h1>
                </Col>
                <Col {...globalProps.col6} className="price-surplus">
                    <p>Supply Balance</p>
                    <h1>$256.2398239</h1>
                </Col>
                <Col {...globalProps.col4}></Col>
            </Row>
        );
    }
}

export default Sumary;