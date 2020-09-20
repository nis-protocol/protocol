import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { globalProps } from '../../../data/props';

class Sumary extends Component {
    render() {
        return (
            <div className="sumary">
                <div className="price-total">
                    <p>Total Balance</p>
                    <h1>$256.2398239</h1>
                </div>
            </div>
        );
    }
}

export default Sumary;