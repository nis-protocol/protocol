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
import { ArrowRightOutlined } from '@ant-design/icons';

const { Column } = Table;

const data = [
    {
        id: 1,
        name: "basic attention token",
        logo: logoBasic,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 2,
        name: "dai",
        logo: logoDai,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 3,
        name: "ether",
        logo: logoEth,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 4,
        name: "usd coin",
        logo: logoUsd,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 5,
        name: "compound usdt",
        logo: logoUsdt,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 6,
        name: "wrapped btv",
        logo: logoBtc,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 7,
        name: "0x",
        logo: logoOx,
        max_bet: "0 bat",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
];

class TableSupply extends Component {
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
            <div>
                <PageHeader
                    className="site-page-header"
                    title="List Bet"
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
                    <Column {...globalProps.tableRow} title="Name" dataIndex="name" className="style-col-name"
                        render={(val, record) => <div title={val}><img src={record.logo} width="40px" height="40px" /><span>{val}</span></div>}
                    />
                    <Column {...globalProps.tableRow} title="Max bet" dataIndex="max_bet" className="style-col-my-bet" />
                    <Column {...globalProps.tableRow} title="Time bet" dataIndex="time_bet" className="col-time-bet"/>
                    <Column {...globalProps.tableRow} title="Time end" dataIndex="time_end" className="col-time-end"/>
                    <Column {...globalProps.tableRow} title="Status" dataIndex="status" className="col-status"/>
                    <Column {...globalProps.tableRow} title="Option" dataIndex="option" className="col-option"
                        render={() => <Button type="primary" >Bet <ArrowRightOutlined/></Button>}
                    />
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
            </div>
        );
    }
}

export default TableSupply;