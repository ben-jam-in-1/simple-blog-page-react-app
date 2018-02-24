import React, { Component } from 'react';
export default class PostHeader extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            titleBackgroundColor: this.props.backgroundColor,
            paddingTopForTitle: 40
        }
    }
    

     componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this))
      }
    
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this))
      }
    
      handleScroll(event) {
          let factor = window.scrollY/window.innerHeight;
          let alpha = 1 - factor;
          let setVal;
          let max = 70;
          let min = 40;
          let newVal = min + ((max-min) * factor);
          if(newVal < max || newVal > min){
            setVal = newVal
          }else{
            setVal = max;
          }
          this.setState({
            titleBackgroundColor: "rgba(255,51,0, " + alpha + ")",
            paddingTopForTitle: setVal
          })
      }

    render() {
        const divStyle = {
            backgroundColor: this.state.titleBackgroundColor,
            paddingLeft: "10vw",
            paddingRight: "10vw",
            paddingTop: this.state.paddingTopForTitle + "vh",
            height: 100 - this.state.paddingTopForTitle + "vh",
            textAlign: "center",
        } 
        const titleStyle = {
            verticalAlign: "middle",
            display: "inline-block",
            lineHeight: "normal",
            fontSize: "250%",
            fontFamily: "Georgia"
        }
        const authorStyle = {
            fontFamily: "Courier",
            fontSize: "90%"
        }
        return(
        <div style={divStyle}>
            <span style={titleStyle}>
                {this.props.title}
            </span>
            <br/>
            <br/>
            <span style={authorStyle}>
                Written by: {this.props.author}
            </span>
        </div>)
    }
  }