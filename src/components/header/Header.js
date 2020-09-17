import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';
import './header.scss';
import { globalProps } from '../../data/props';
import {NavLink} from 'react-router-dom';
import User from './user/User';
import logo from '../../assets/images/logo.png';

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
                            <img src={logo}/>
                            <span>NISProject</span>
                        </h1>
                    </Col>
                    <Col {...globalProps.col} className="dashboard-vote">
                        <NavLink to="/" activeClassName="style-active-navlink" exact className="btn-dashboard">Dashboard</NavLink>
                        <NavLink to="/vote" activeClassName="style-active-navlink" className="btn-vote">Vote</NavLink>
                    </Col>
                    <User/>
                </Row>
            </div>
        );
    }
}

export default HeaderComponent;