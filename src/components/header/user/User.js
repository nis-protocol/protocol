import React, { Component } from 'react';
import { Col, Button, Drawer } from 'antd';
import { globalProps } from '../../../data/props';
import logoDrawer from '../../../assets/images/logo-footer.png';
import logoCoinbase from '../../../assets/images/icn-coinbase-wallet.png';
import logoLedger from '../../../assets/images/icn-ledger.png';
import logoMetamask from '../../../assets/images/icn-metamask.png';
import { NavLink, Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
        this.showDrawer = this.showDrawer.bind(this);
        this.onClose = this.onClose.bind(this)
    }

    showDrawer = () => {
        this.setState({ visible: true });
    };

    onClose = () => {
        this.setState({ visible: false });
    };

    render() {
        let { visible } = this.state;
        return (
            <Col {...globalProps.col9} className="button-user">
                <Button onClick={this.showDrawer}>Oxac...D8C7</Button>
                <Drawer
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                >
                    <div>
                        <Button className="btn-onclose" onClick={this.onClose}>X</Button>
                    </div>
                    <div className="header-drawer">
                        <img src={logoDrawer} />
                        <p>Connect Wallet</p>
                        <h1>To start using Compound</h1>
                    </div>
                    <div className="body-drawer">
                        <NavLink to="#">
                            <div className="btn-body">
                                <span><img src={logoCoinbase}/></span>
                                <span className="coin-name">Coinbase Wallet</span>
                                <i><ArrowRightOutlined /></i>
                            </div>
                        </NavLink>
                        <NavLink to="#">
                            <div className="btn-body">
                                <span><img src={logoLedger}/></span>
                                <span className="coin-name">Ledger</span>
                                <i><ArrowRightOutlined /></i>
                            </div>
                        </NavLink>
                        <NavLink to="#">
                            <div className="btn-body">
                                <span><img src={logoMetamask}/></span>
                                <span className="coin-name">Metamask</span>
                                <i><ArrowRightOutlined /></i>
                            </div>
                        </NavLink>
                    </div>
                    <div className="footer-drawer">
                        <span>By connecting, I accept Compound's </span>
                        <Link to="#">Terms of Service</Link>
                    </div>
                </Drawer>
            </Col>
        );
    }
}

export default User;