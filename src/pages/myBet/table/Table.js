import React, { Component } from 'react';
import { globalProps } from '../../../data/props';
import { Row, Col } from 'antd';
import TableSupply from './tableSupply/TableSupply';

class TableDashboard extends Component {

    render() {
        return (
            <Row {...globalProps.row}>
                <Col {...globalProps.col7}></Col>
                <Col {...globalProps.col8}>
                    <TableSupply />
                </Col>
                <Col {...globalProps.col7}></Col>
            </Row>
        );
    }
}

export default TableDashboard;