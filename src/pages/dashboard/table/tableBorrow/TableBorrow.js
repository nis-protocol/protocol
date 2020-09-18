import React, { Component } from 'react';
import { globalProps } from '../../../../data/props';
import { Col, Table, PageHeader, Modal, Input, Button } from 'antd';
import logo1 from '../../../../assets/images/logo-1.png'

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
                        render={val => <div><img src={val} width="40px" height="40px" /> <strong>Ether</strong></div>}
                    />
                    <Column {...globalProps.tableRow} title="APY" dataIndex="apy" />
                    <Column {...globalProps.tableRow} title="Wallet" dataIndex="wallet" />
                    <Column {...globalProps.tableRow} title="Create date" dataIndex="create_date" />
                    <Column {...globalProps.tableRow} title="Finish date" dataIndex="finish_date" />
                </Table>
                {/* modal */}
                <Modal
                    wrapClassName="modal-supply"
                    title={<div><img src={logo1} /><span> USD Coin</span></div>}
                    style={{ top: 20 }}
                    visible={showModal}
                    onCancel={this.onCloseModal}
                >
                    <p>Supply Rates</p>
                    <Input prefix={<img src={logo1} />} suffix="1.01%" placeholder="Supply APY" />
                    <Button type="primary">ENABLE</Button>
                </Modal>
            </Col>
        );
    }
}

export default TableBorrow;