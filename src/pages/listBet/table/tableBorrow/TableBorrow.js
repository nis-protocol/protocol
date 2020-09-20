import React, { Component } from 'react';
import { globalProps } from '../../../../data/props';
import { Col, Table, PageHeader, Modal, Input, Button } from 'antd';
import logoBasic from '../../../../assets/images/logo-basic.png';
import logoBtc from '../../../../assets/images/logo-btc.png';
import logoDai from '../../../../assets/images/logo-dai.png';
import logoEth from '../../../../assets/images/logo-eth.png';
import logoOx from '../../../../assets/images/logo-ox.png';
import logoUsd from '../../../../assets/images/logo-usd.png';
import logoUsdt from '../../../../assets/images/logo-usdt.png';

const { Column } = Table;

const data = [
    {
        id: 1,
        name: "basic attention token",
        logo: logoBasic,
        apy: '0.01%',
        wallet: "0 bat",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 2,
        name: "dai",
        logo: logoDai,
        apy: '0.59%',
        wallet: "0 dai",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 3,
        name: "ether",
        logo: logoEth,
        apy: '17.94%',
        wallet: "5 eth",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 4,
        name: "usd coin",
        logo: logoUsd,
        apy: '1.01%',
        wallet: "0 usdc",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 5,
        name: "compound usdt",
        logo: logoUsdt,
        apy: '0%',
        wallet: "0 usdt",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 6,
        name: "wrapped btv",
        logo: logoBtc,
        apy: '0.09%',
        wallet: "0 wbtc",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
    {
        id: 7,
        name: "0x",
        logo: logoOx,
        apy: '0.02%',
        wallet: "0 zrx",
        create_date: '12/10/2020',
        finish_date: '12/12/2020',
    },
];

class TableBorrow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onShowModal(e) {
        this.setState({ showModal: true })
    }

    onCloseModal(e) {
        this.setState({ showModal: false })
    }

    render() {
        let { showModal } = this.state;
        return (
            <Col {...globalProps.colHalf}>
                <PageHeader
                    className="site-page-header"
                    title="Borrow Markets"
                />
                <Table
                    dataSource={data}
                    {...globalProps.table}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: e => this.onShowModal(record), // click row
                        };
                    }}
                >
                    <Column {...globalProps.tableRow} title="Asset" dataIndex="logo"
                        render={val => <img src={val} width="40px" height="40px" />}
                    />
                    <Column {...globalProps.tableRow} dataIndex="name" className="style-col-name"/>
                    <Column {...globalProps.tableRow} title="APY" dataIndex="apy" />
                    <Column {...globalProps.tableRow} title="Wallet" dataIndex="wallet" className="style-col-wallet"/>
                    <Column {...globalProps.tableRow} title="Create date" dataIndex="create_date" />
                    <Column {...globalProps.tableRow} title="Finish date" dataIndex="finish_date" />
                </Table>
                {/* modal */}
                <Modal
                    wrapClassName="modal-supply"
                    title={<div><img src={logoUsd} /><span> USD Coin</span></div>}
                    style={{ top: 20 }}
                    visible={showModal}
                    onCancel={this.onCloseModal}
                >
                    <p>Supply Rates</p>
                    <Input prefix={<img src={logoUsd} />} suffix="1.01%" placeholder="Supply APY" />
                    <Button type="primary">ENABLE</Button>
                </Modal>
            </Col>
        );
    }
}

export default TableBorrow;