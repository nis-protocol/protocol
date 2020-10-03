import React, { Component } from 'react';
import { globalProps, format } from '../../../../data';
import moment from "moment";
import { Table, PageHeader, Modal, Button } from 'antd';
import logoDai from '../../../../assets/images/logo-dai.png';
import logoEth from '../../../../assets/images/logo-eth.png';
import logoUsd from '../../../../assets/images/logo-usd.png';
import logoUsdt from '../../../../assets/images/logo-usdt.png';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Column } = Table;

const data = [
    {
        id: 3,
        name: "man united vs arsenal",
        logo: logoEth,
        max_bet: "5 eth",
        time_bet: '12/10/2020',
        time_end: '1/11/2020',
        status: "active"
    },
    {
        id: 2,
        name: "man. city vs chelsea",
        logo: logoDai,
        max_bet: "500 dai",
        time_bet: '12/10/2020',
        time_end: '1/11/2020',
        status: "active"
    },
    {
        id: 5,
        name: "everton vs tottenham",
        logo: logoUsdt,
        max_bet: "1500 usdt",
        time_bet: '12/10/2020',
        time_end: '1/11/2020',
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
                    <Column {...globalProps.tableRow} title="Time bet" dataIndex="time_bet" className="col-time-bet" 
                        render={val => <div><span>{moment(val).format(format.date)}</span><br/><span>22:00</span></div>}
                    />
                    <Column {...globalProps.tableRow} title="Time end" dataIndex="time_end" className="col-time-end" 
                        render={val => <div><span>{moment(val).format(format.date)}</span><br/><span>23:00</span></div>}
                    />
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
                    title={<div><img src={logoEth} /><span> Man United vs Arsenal</span></div>}
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