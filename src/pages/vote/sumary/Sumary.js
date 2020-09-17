import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { globalProps } from '../../../data/props';

class Sumary extends Component {
    render() {
        return (
            <Row {...globalProps.row} className="sumary">
                <p>No Governance</p>
            </Row>
        );
    }
}

export default Sumary;