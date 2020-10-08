import React, { Component } from 'react';
import { Col, Button, Modal, Spin, Popconfirm } from 'antd';
import { globalProps } from '../../../data/props';
import logoDrawer from '../../../assets/images/logo-footer.png';
import logoCoinbase from '../../../assets/images/icn-coinbase-wallet.png';
import logoLedger from '../../../assets/images/icn-ledger.png';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import LoginMetamask from './components/LoginMetamask';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionLoading } from '../../../action';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this)
    }

    onOk() {
        this.setState({ showModal: true })
    }

    onCancel() {
        this.setState({ showModal: false })
        this.props.hideLoading()
    }

    render() {
        const { loading, dataMetamask } = this.props;

        return (
            <Col {...globalProps.col9} className="button-user">
                {dataMetamask ?
                    <Button type="primary" onClick={this.onOk}>
                        {dataMetamask.accounts[0]}
                    </Button> :
                    <Button type="primary" onClick={this.onOk}>
                        Connect Wallets
                    </Button>
                }

                <Modal
                    wrapClassName="modal-user"
                    style={{ top: 0 }}
                    visible={this.state.showModal}
                    onOk={this.onOk}
                    onCancel={this.onCancel}
                >
                    <div className="header-modal-user">
                        <img src={logoDrawer} />
                        <p>Connect Wallet</p>
                        <h1>To start using Nis</h1>
                    </div>
                    <Spin spinning={loading} style={{ maxHeight: "100vh" }} size="large">
                        <div className="body-modal-user">
                            <LoginMetamask />
                            <Popconfirm placement="top" title="this is Private demo!" okText="Yes">
                                <NavLink to="#">
                                    <div className="btn-body">
                                        <span><img src={logoCoinbase} /></span>
                                        <span className="coin-name">Coinbase Wallet</span>
                                        <i><ArrowRightOutlined /></i>
                                    </div>
                                </NavLink>
                            </Popconfirm>
                            <Popconfirm placement="top" title="this is Private demo!" okText="Yes">
                                <NavLink to="#">
                                    <div className="btn-body">
                                        <span><img src={logoLedger} /></span>
                                        <span className="coin-name">Ledger</span>
                                        <i><ArrowRightOutlined /></i>
                                    </div>
                                </NavLink>
                            </Popconfirm>
                        </div>
                    </Spin>
                    <div className="footer-modal-user">
                        <span>By connecting, I accept Nis </span>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </Modal>
            </Col>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataMetamask: state.userReducer.dataMetamask,
        loading: state.loadingReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    hideLoading: actionLoading.hideLoading,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(User);