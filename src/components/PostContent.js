import React, { Component } from 'react';
export default class PostContent extends React.Component {
    highlight(id) {
        document.getElementById(id).style.color = this.props.headingColor
    }
    stopHighlight(id) {
        document.getElementById(id).style.color = ""
    }

    render() {
        var arr = this.props.content
        let content = []
        for (var i = 0; i < arr.length; i++) {
            let obj = arr[i]
            let type = obj["type"]
            let data = obj["data"]
            let marginTop = data.marginTop
            if (type === "text") {
                let text = data.text
                content.push(
                    <div className="text" style={{ marginTop: marginTop }}>
                        {text}
                    </div>
                )
            }else if(type === "large_text"){
                let text = data.text
                content.push(
                    <div className="large_text" style={{ marginTop: marginTop }}>
                        {text}
                    </div>
                )
            }else if (type === "image") {
                let src = data.src
                content.push(
                    <img src={src} alt="" className="image" style={{ marginTop: marginTop }} />
                )
            } else if (type === "catch_heading") {
                let text = data.text
                if (data.anchor) {
                    let anchor = "#" + data.anchor
                    content.push(
                        <a style={{ textDecoration: "none", color: this.props.headingColor }} href={anchor}>
                            <h2 id={anchor.replace("#", "")} style={{ marginTop: marginTop }} className="catch_heading">
                                {text}
                            </h2>
                        </a>
                    )
                } else {
                    content.push(
                        <h2 style={{ color: this.props.headingColor, marginTop: marginTop }} className="catch_heading">
                            {text}
                        </h2>
                    )
                }
            } else if (type === "sub_heading") {
                let text = data.text
                content.push(
                    <div>
                    <h4 style={{ color: this.props.subheadingColor, marginTop: marginTop }} className="sub_heading">
                        {text}
                    </h4>
                    </div>
                    
                )
            } else if (type === "divider"){
                content.push(
                    <hr style={{marginTop: marginTop}}/>
                )
            } else if (type === "table_of_bullets_for_catch_headings") {
                let bullets = data.bullets
                let arrOfBullets = [];
                for (let i = 0; i < arr.length; i++) {
                    let possiblebullet = arr[i]
                    let type = possiblebullet.type
                    let data = possiblebullet.data
                    if(type === "catch_heading" && data.hasOwnProperty("anchor")){
                    let x;
                    let paddingLeft = "0px"
                    let paddingTop = "20px"
                    let paddingBottom = "20px"
                    let margin = "20px"
                    let color = "black"
                    arrOfBullets.push(
                        <a style={{ color: color }}
                            href={"#" + data.anchor}> <h5
                                id={"bullet_" + data.anchor}
                                onMouseEnter={() => this.highlight("bullet_" + data.anchor)}
                                onMouseLeave={() => this.stopHighlight("bullet_" + data.anchor)}
                            style={{ paddingLeft: paddingLeft, margin: margin }}> {data.text} </h5></a>
                    )
                    }
                }
                content.push(
                    <div className="table_of_bullets_for_catch_headings" style={{ marginTop: marginTop, border: "1px solid black", borderRadius: "10px" }}>
                        {arrOfBullets}
                    </div>
                )
            }
        }

        return (
            <div>
                {content}
            </div>
        )
    }
}
