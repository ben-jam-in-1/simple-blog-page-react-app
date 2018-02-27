import React, { Component } from 'react';
export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer" style={{
                marginTop: "200px",
                paddingLeft: "5%",
                paddingRight: "5%"
            }}>
                <div className="footer-flex-div">
                    <div>
                        <img alt="" src={this.props.logoImage} style={{ width: "50px" }} />
                        <p style={{ color: "#aaa", fontFamily: "Verdana", fontSize: "50%" }}>© 2018 Festo, LLC.</p>
                    </div>
                    <div>
                        <span>
                            <b>DOWNLOAD</b>
                        </span>
                        <br />
                        <br />
                        <a href="http://bit.ly/fusemeapp" className="footer-link">App Store</a>
                        <br/>
                        <a href="http://bit.ly/fusemeapp" className="footer-link">Play Store</a>
                    </div>
                    <div>
                        <span>
                            <b>
                                CONNECT
                        </b>
                        </span>
                    </div>
                    <div>
                        <span>
                            <b>
                                LEGAL
                        </b>
                        </span>
                    </div>
                </div>
            </div>)
    }
}