import React, { Component } from 'react';
import { Modal, Button, Input, Form, Select, DatePicker, InputNumber, Radio, Popconfirm } from 'antd';
import './AddBet.scss';
import { globalProps, rules } from '../../../../../data';
import logoDai from '../../../../../assets/images/logo-dai.png';
import logoEth from '../../../../../assets/images/logo-eth.png';
import logoUsd from '../../../../../assets/images/logo-usd.png';
import { PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

class AddBet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            value: 1
        }
        this.onCloseModal = this.onCloseModal.bind(this)
        this.onShow = this.onShow.bind(this)
    }

    onShow() {
        this.setState({ showModal: true })
    }

    onCloseModal() {
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
            <div className="add-bet">
                <Button type="primary" onClick={this.onShow}><PlusOutlined /> Add</Button>
                <Modal
                    wrapClassName="modal-add-bet"
                    title="Add Bet infomation"
                    style={{ top: 20 }}
                    visible={showModal}
                    onCancel={this.onCloseModal}
                >
                    <Form
                        {...globalProps.form}
                        onFinish={e => this.onSubmit(e)}
                    >
                        <Form.Item
                            label="Name(A vs B)" {...globalProps.formItem}
                            name="name"
                            rules={[rules.required]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Tokens" {...globalProps.formItem}
                            name="tokens"
                            rules={[rules.required]}
                        >
                            <Select style={{ width: "100%" }}>
                                <Select.Option value="dai"><img src={logoDai} width={25} height={25} style={{ marginBottom: "4px" }} /> Dai</Select.Option>
                                <Select.Option value="eth"><img src={logoEth} width={25} height={25} /> Ether</Select.Option>
                                <Select.Option value="usdc"><img src={logoUsd} width={25} height={25} /> USDT</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Max Beet" {...globalProps.formItem}
                            name="maxBet"
                            rules={[rules.required]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            label="Time" {...globalProps.formItem}
                            name="time"
                            rules={[rules.required]}
                        >
                            <RangePicker style={{ width: "100%" }} />
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
                                <Button type="primary" className="btn-submit">Submit</Button>
                            </Popconfirm>
                        </Form.Item>
                    </Form>

                </Modal>
            </div>
        );
    }
}

export default AddBet;