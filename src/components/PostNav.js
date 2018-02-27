import React, { Component } from 'react';
export default class PostNav extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        if (this.props.text === "") {
            return (

                <div>
                    <div id="navbar" style={{ zIndex: "1", height: "50px", color: this.props.textColor, backgroundColor: this.props.backgroundColor }} className="navbar">
                        <ul className="navItems">
                            <li><a className="active" href="#home">Home</a></li>
                            <li><a href="#news">Blog</a></li>
                            <li><a href="#contact">Download</a></li>
                        </ul>
                        <img src="https://www.fusemeapp.com/assets/images/fuseme-logo-black.PNG" style={{ height: "48px", width: "48px", position: "absolute", top: "2px", left: "2px" }} />

                        <img className="menuImage" alt={require('../images/ic_menu_black.png')} src={require('../images/ic_menu_black.svg')} style={{ height: "30px", top: "10px", width: "30px", position: "absolute", right: "10px" }} />
                        <h2 className="navcontent">
                            {this.props.text}
                        </h2>
                    </div>
                </div>

            )
        } else {
            return (
                <div>
                    <div id="navbar" style={{ zIndex: "1", height: "50px", color: this.props.textColor, backgroundColor: this.props.backgroundColor }} className="navbar">
                        <img src="https://www.fusemeapp.com/assets/images/fuseme-logo-black.PNG" style={{ height: "48px", width: "48px", position: "absolute", top: "2px", left: "2px" }} />
                        <img alt={require('../images/ic_menu_black.png')} src={require('../images/ic_menu_black.svg')} style={{ height: "30px", width: "30px", position: "absolute", top: "10px", right: "10px" }} />
                        <h2 className="navcontent">
                            {this.props.text}
                        </h2>
                    </div>
                </div>

            )
        }
    }
}