import React, { Component } from 'react';
import { globalProps, rules } from '../../../../data';
import { Table, PageHeader, Modal, Button, Form, Radio, Input } from 'antd';
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
        name: "basic attention tokenddddddddddddd",
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
        max_bet: "0 dai",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 3,
        name: "ether",
        logo: logoEth,
        max_bet: "0 eth",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 4,
        name: "usd coin",
        logo: logoUsd,
        max_bet: "0 usdc",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 5,
        name: "compound usdt",
        logo: logoUsdt,
        max_bet: "1000000 usdt",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 6,
        name: "wrapped btv",
        logo: logoBtc,
        max_bet: "0 wbtc",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
    {
        id: 7,
        name: "0x",
        logo: logoOx,
        max_bet: "0 zrx",
        time_bet: '12/10/2020',
        time_end: '12/12/2020',
        status: "active"
    },
];

class TableSupply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            showModalRemove: false
        }
        this.onCloseModal = this.onCloseModal.bind(this)
        this.onShowModalRemove = this.onShowModalRemove.bind(this)
        this.onCloseModalRemove = this.onCloseModalRemove.bind(this)
    }

    // modal remove
    async onShowModalRemove(){
        await this.setState({showModalRemove: true})
        this.setState({ showModal: false })
    }

    onCloseModalRemove(){
        this.setState({showModalRemove: false})
    }

    // modal withdraw
    onShowModal(e) {
        this.setState({ showModal: true })
    }

    onCloseModal(e) {
        this.setState({ showModal: false })
    }

    onSubmit() {
        this.setState({ showModal: false })
    }

    render() {
        let { showModal, showModalRemove } = this.state;
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="My Bet"
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
                    <Column {...globalProps.tableRow} title="Time bet" dataIndex="time_bet" className="col-time-bet" />
                    <Column {...globalProps.tableRow} title="Time end" dataIndex="time_end" className="col-time-end" />
                    <Column {...globalProps.tableRow} title="Status" dataIndex="status" className="col-status" />
                    <Column {...globalProps.tableRow} title="Option" dataIndex="option" className="col-option"
                        render={() => <div>
                            {/* <Button type="primary" className="btn-remove" onClick={this.onShowModalRemove}>Remove</Button><br/> */}
                            <Button type="primary" className="col-btn-withdraw">Withdraw</Button>
                        </div>}
                    />
                </Table>
                {/* modal withdraw*/}
                <Modal
                    wrapClassName="modal-withdraw"
                    title={<div><img src={logoUsd} /><span> USD Coin</span></div>}
                    style={{ top: 20 }}
                    visible={showModal}
                    onCancel={this.onCloseModal}
                >
                    <div className="time-info">
                        <p><span>Time start:</span> 12/10/2020</p>
                        <p><span>Time end:</span> 12/12/2020</p>
                        <p><span>Total balance:</span> + 200 $</p>
                    </div>
                    <Button type="primary" htmlType="submit" className="btn-submit">Withdraw</Button>
                </Modal>
                {/* modal remove*/}
                <Modal
                    wrapClassName="modal-withdraw"
                    title="Modal remove"
                    style={{ top: 20 }}
                    visible={showModalRemove}
                    onCancel={this.onCloseModalRemove}
                >
                    <div className="time-info">
                        <p><span>Time start:</span> 12/10/2020</p>
                        <p><span>Time end:</span> 12/12/2020</p>
                        <p><span>Total balance:</span> + 200 $</p>
                    </div>
                    <Button type="primary" htmlType="submit" className="btn-submit">Withdraw</Button>
                </Modal>
            </div>
        );
    }
}

export default TableSupply;