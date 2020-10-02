import React, { Component } from 'react';
import logoMetamask from '../../../../assets/images/icn-metamask.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionUser, actionLoading } from '../../../../action';
import { NavLink } from 'react-router-dom';
import Web3 from "web3";

var detect = require("detect-browser").detect;
var isMobile;
var path = window.location.href;

class LoginMetamask extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.mount = this.mount.bind(this);
        this.init = this.init.bind(this);
    }

    mount() {
        const { showLoading, hideLoading } = this.props;
        if (typeof web3 !== "undefined") {
            showLoading()
            this.init();
        } else {
            hideLoading();
            const browser = detect();

            isMobile = !!detectMobile();

            function detectMobile() {
                return (
                    navigator.userAgent.match(/Android/i) ||
                    navigator.userAgent.match(/webOS/i) ||
                    navigator.userAgent.match(/iPhone/i) ||
                    navigator.userAgent.match(/iPad/i) ||
                    navigator.userAgent.match(/iPod/i) ||
                    navigator.userAgent.match(/BlackBerry/i) ||
                    navigator.userAgent.match(/Windows Phone/i)
                );
            }
            if (!isMobile) {
                window.open("http://fwd.metamask.io/" + "?" + path);

                switch (browser.name) {
                    case "firefox":
                        window.open(
                            "https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/",
                            "_blank"
                        );

                        break;

                    case "chrome":
                        window.open(
                            "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en",
                            "_blank"
                        );
                        break;

                    case "opera":
                        window.open(
                            "https://addons.opera.com/en/extensions/details/metamask/",
                            "_blank"
                        );

                        break;
                }
            }
        }
    }

    async init() {
        const { getDataMetamask, hideLoading } = this.props;
        try {
            const accounts = await window.ethereum.enable();
            const web3 = new Web3(Web3.givenProvider)
            const balance = await web3.eth.getBalance(accounts[0])
            let dataMetamask = {
                accounts,
                balance
            }
            getDataMetamask(dataMetamask)
            if (dataMetamask) {
                hideLoading()
            }
        } catch (error) {
            console.log("long test 1", error)
            hideLoading()
        }
        window.ethereum.on("accountsChanged", accounts => {
            if (accounts.length === 1) {
                console.log("long test 2")
                this.init();
            } else {
                hideLoading()
            }
        });
    }

    handleShow() {
        this.mount();
    }

    render() {
        const { dataMetamask } = this.props;

        return (
            <NavLink to="#" onClick={this.mount}>
                <div className="btn-body">
                    <span><img src={logoMetamask} /></span>
                    <span className="coin-name">Metamask</span>
                    <i><ArrowRightOutlined /></i>
                </div>
            </NavLink>
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
    getDataMetamask: actionUser.getDataMetamask,
    hideLoading: actionLoading.hideLoading,
    showLoading: actionLoading.showLoading
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginMetamask);