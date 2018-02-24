import React, { Component } from 'react';
export default class PostContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    render() {
        return(
        <div style={{
            marginTop: "50px",
            marginLeft: "20%",
            marginRight: "20%",
            fontFamily: "Verdana",
            lineHeight: 3
        }}>
            {this.props.content}
        </div>)
    }
  }
