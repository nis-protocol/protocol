import React, { Component } from 'react';
import './Footer.scss'
import { Layout, Row, Col, Select } from 'antd';
import { globalProps } from '../../data/props';
import iconAmerican from '../../assets/images/icn-english.png';

const { Footer } = Layout;
const { Option } = Select;

class FooterComponent extends Component {
    render() {
        return (
            <Footer className="footer">
                <Row {...globalProps.row}>
                    <Col {...globalProps.colHalf}>
                        <div className="footer-left">
                            <span>Latest Block: 7211176</span>
                            <span><a href="#">Markets</a></span>
                            <span><a href="#">Govermance</a></span>
                            <span><a href="#">COMP</a></span>
                            <span><a href="#">Support</a></span>
                            <span><a href="#">Terms</a></span>
                        </div>
                    </Col>
                    <Col {...globalProps.colHalf}>
                        <div className="footer-right">
                            {/* monney */}
                            <span><Select
                                className="price"
                                size="small"
                                showSearch
                                style={{ width: 80 }}
                                defaultValue="usd"
                                optionFilterProp="children"
                            >
                                <Option value="usd">$ USD</Option>
                                <Option value="eth">Ξ ETH</Option>
                                <Option value="€eur">€ EUR</Option>
                                <Option value="£gbp">£ GBP</Option>
                            </Select></span>
                            {/* language */}
                            <span><Select
                                className="language"
                                size="small"
                                showSearch
                                style={{ width: 120 }}
                                defaultValue="american"
                                optionFilterProp="children"
                            >
                                <Option value="american">Language <img src={iconAmerican}/></Option>
                                <Option value="korea">Korea <img src={iconAmerican}/></Option>
                                <Option value="span">Span <img src={iconAmerican}/></Option>
                                <Option value="japanese">Japanese <img src={iconAmerican}/></Option>
                            </Select></span>
                        </div>
                    </Col>
                </Row>
            </Footer>
        );
    }
}

export default FooterComponent;