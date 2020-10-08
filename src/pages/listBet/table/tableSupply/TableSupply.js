import React, { Component } from 'react';
import { globalProps, rules, format } from '../../../../data';
import moment from "moment";
import { Table, PageHeader, Modal, Button, Form, Descriptions, Radio, Input, Popconfirm } from 'antd';
import logoDai from '../../../../assets/images/logo-dai.png';
import logoEth from '../../../../assets/images/logo-eth.png';
import logoUsdt from '../../../../assets/images/logo-usdt.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import AddBet from './addBet/AddBet';

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
            value: 1
        }
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    onShowModal(e) {
        this.setState({ showModal: true })
    }

    onCloseModal(e) {
        this.setState({ showModal: false })
    }

    onSubmit() {
        this.setState({ showModal: false })
    }

    onChange = e => {
        // console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        let { showModal, value } = this.state;

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Bet List"
                    extra={<AddBet />}
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
                        render={val => <div><span>{moment(val).format(format.date)}</span><br /><span>22:00</span></div>}
                    />
                    <Column {...globalProps.tableRow} title="Time end" dataIndex="time_end" className="col-time-end"
                        render={val => <div><span>{moment(val).format(format.date)}</span><br /><span>23:00</span></div>}
                    />
                    <Column {...globalProps.tableRow} title="Status" dataIndex="status" className="col-status" />
                    <Column {...globalProps.tableRow} title="Option" dataIndex="option" className="col-option"
                        render={() => <Button type="primary" >Bet <ArrowRightOutlined /></Button>}
                    />
                </Table>
                {/* modal */}
                <Modal
                    wrapClassName="modal-supply"
                    title={<div><img src={logoEth} /><span> Man United vs Arsenal</span><br /><span style={{ fontSize: "16px", color: "#ff67cb" }}>A vs B</span></div>}
                    style={{ top: 20 }}
                    visible={showModal}
                    onCancel={this.onCloseModal}
                >
                    <div className="time-info">
                        <p><span>Time start: </span>{moment("12/10/2020 22:00").format(format.dateTime)}</p>
                        <p><span>Time end: </span>{moment("1/11/2020 23:00").format(format.dateTime)}</p>
                    </div>
                    <Form
                        {...globalProps.form}
                        onFinish={e => this.onSubmit(e)}
                    >
                        <Form.Item
                            label="Max Bet" {...globalProps.formItem}
                            name="maxBet"
                            rules={[rules.required]}
                        >
                            <Input style={{ width: "100%" }} addonAfter="ETH" />
                        </Form.Item>
                        <Form.Item
                            label="Best Odds"
                            name="radio-button"
                            rules={[rules.required]}
                        >
                            <Radio.Group onChange={this.onChange} defaultValue={value}>
                                <Radio checked={true} value={1}><span style={{ color: "#ff67cb", fontWeight: "bold" }}>A </span>Win</Radio>
                                <Radio value={2}>Draw</Radio>
                                <Radio value={3}><span style={{ color: "#ff67cb", fontWeight: "bold" }}>B </span>Win</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item >
                            <Popconfirm placement="top" title="this is Private demo!" okText="Yes">
                                <Button type="primary" className="btn-submit">Apply</Button>
                            </Popconfirm>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default TableSupply;