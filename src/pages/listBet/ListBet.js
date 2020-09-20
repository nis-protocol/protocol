import React, { Component } from 'react';
import { Layout } from 'antd';
import './ListBet.scss';
import Sumary from './sumary/Sumary';
import TableDashboard from './table/Table';

const { Content } = Layout;

class ListBet extends Component {
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

export default ListBet;