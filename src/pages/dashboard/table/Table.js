import React, { Component } from 'react';
import { globalProps } from '../../../data/props';
import { Col, Table, Row, PageHeader } from 'antd';
import logo1 from '../../../assets/images/logo-1.png'

const { Column } = Table;


const data = [
    {
        id: 1,
        logo: logo1,
        apy: '0.01%',
        wallet: "0 bat",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 2,
        logo: logo1,
        apy: '0.01%',
        wallet: "0 bat",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 3,
        logo: logo1,
        apy: '0.01%',
        wallet: "0 bat",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
];

class TableDashboard extends Component {
    render() {
        return (
            <Row {...globalProps.row}>
                <Col {...globalProps.colHalf}>
                    <PageHeader
                        className="site-page-header"
                        title="Supply Markets"
                    />
                    <Table dataSource={data} {...globalProps.table}>
                        <Column {...globalProps.tableRow} title="Asset" dataIndex="logo"
                            render={val => <div><img src={val} width="40px" height="40px" /> <span>Compound USDT</span></div>}
                        />
                        <Column {...globalProps.tableRow} title="APY" dataIndex="apy" />
                        <Column {...globalProps.tableRow} title="Wallet" dataIndex="wallet" />
                        <Column {...globalProps.tableRow} title="Create date" dataIndex="create_date" />
                        <Column {...globalProps.tableRow} title="Finish date" dataIndex="finish_date" />
                    </Table>
                </Col>
                <Col {...globalProps.colHalf}>
                    <PageHeader
                        className="site-page-header"
                        title="Borrow Markets"
                    />
                    <Table dataSource={data} {...globalProps.table}>
                        <Column {...globalProps.tableRow} title="Asset" dataIndex="logo"
                            render={val => <div><img src={val} width="40px" height="40px" /> <strong>Ether</strong></div>}
                        />
                        <Column {...globalProps.tableRow} title="APY" dataIndex="apy" />
                        <Column {...globalProps.tableRow} title="Wallet" dataIndex="wallet" />
                        <Column {...globalProps.tableRow} title="Create date" dataIndex="create_date" />
                        <Column {...globalProps.tableRow} title="Finish date" dataIndex="finish_date" />
                    </Table>
                </Col>
            </Row>
        );
    }
}

export default TableDashboard;