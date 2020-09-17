import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import './header.scss';
import { globalProps } from '../../data/props';
import {NavLink} from 'react-router-dom';

const { Header } = Layout;

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <Header className="header">
                    Note. You are curently connected to the Rinkeby Testhet
            </Header>
            <Row {...globalProps.row} className="menu">
                    <Col {...globalProps.col} className="logo">
                        <h1>
                            <img src={"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"} height={32}/>
                            <span>Compound</span>
                        </h1>
                    </Col>
                    <Col {...globalProps.col} className="dashboard-vote">
                        <NavLink to="/" activeClassName="style-active-navlink" exact className="btn-dashboard">Dashboard</NavLink>
                        <NavLink to="/vote" activeClassName="style-active-navlink" className="btn-vote">Vote</NavLink>
                    </Col>
                    <Col {...globalProps.col} className="button-user">
                        <Button>Oxac...D8C7</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HeaderComponent;