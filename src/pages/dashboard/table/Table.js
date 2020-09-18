import React, { Component } from 'react';
import { globalProps } from '../../../data/props';
import {  Row } from 'antd';
import TableSupply from './tableSupply/TableSupply';
import TableBorrow from './tableBorrow/TableBorrow';

class TableDashboard extends Component {
    
    render() {
        return (
            <Row {...globalProps.row}>
                <TableSupply/>
                <TableBorrow/>
            </Row>
        );
    }
}

export default TableDashboard;