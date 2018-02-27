import React, { Component } from 'react';
export default class PostFooter extends React.Component {
    render() {
        return(
            <div id="blogfooter" style={{ marginTop: "100px" }}>
                <div className="strike">
                    <span>RECOMMENDED ARTICLES</span>
                    <br />
                    <br />
                </div>
                <div className="center-flex-div">
                    <div style={{backgroundColor: this.props.backgroundColor}}></div>
                    <div style={{backgroundColor: this.props.backgroundColor}}></div>
                    <div style={{backgroundColor: this.props.backgroundColor}}></div>
                    <div style={{backgroundColor: this.props.backgroundColor}}></div>
                </div>
                <div className="center-div">
                <hr/><br/>
                    <div className="center-circle">
                        <img className="center-circle" 
                        src={this.props.authorImage}
                         style={{border: "2px solid " + this.props.backgroundColor}} />
                    </div>
                    <h4 className="author-name" style={{color: this.props.backgroundColor}}>
                        {this.props.authorName}
                    </h4>
                    <h5 className="author-description" >
                        {this.props.authorDescription}
                    </h5>
                    <br/>
                    <hr/>
                </div>
            </div>)
    }
}