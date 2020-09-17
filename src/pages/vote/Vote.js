import React, { Component } from 'react';
import { Layout } from 'antd';
import './Vote.scss';
import Sumary from './sumary/Sumary';
import TableDashboard from './table/Table';

const { Content } = Layout;

class Vote extends Component {
    render() {
        return (
            <Content className="vote">
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

export default Vote;