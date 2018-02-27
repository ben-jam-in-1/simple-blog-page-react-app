import React, { Component } from 'react';
export default class PostHeader extends React.Component {
    render() {
        const divStyle = {
            backgroundColor: this.props.backgroundColor,
            paddingLeft: "10vw",
            paddingRight: "10vw",
            paddingTop: 40 + "vh",
            height: 60 + "vh",
            textAlign: "center",
        }
        const titleStyle = {
            verticalAlign: "middle",
            display: "inline-block",
            lineHeight: "normal",
            fontSize: "300%",
            fontFamily: "Trebuchet MS",
            color: this.props.titleColor
        }
        const authorStyle = {
            fontFamily: "Courier",
            fontSize: "100%",
            color: this.props.authorColor
        }

        return (
            <div>
                <div id="blogTop" style={divStyle}>
                    <span style={titleStyle}>
                        {this.props.title}
                    </span>
                    <br />
                    <br />
                    <span style={authorStyle}>
                        {this.props.author + " | " + this.props.date}
                    </span>
                </div>
            </div>)
    }
}