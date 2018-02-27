import React, { Component } from 'react';
import PostContent from './components/PostContent';
import PostHeader from './components/PostHeader'
import PostFooter from './components/PostFooter'
import PostNav from './components/PostNav'
import Footer from './components/Footer'
import './css/blog.css';
import './css/footer.css'
import { inherits } from 'util';


class Color {
  constructor(r, g, b, a) {
    this.color = {
      r: r,
      g: g,
      b: b,
      a: a
    }
  }
  getColor() {
    return this.color
  }
  setNewAlpha(alpha) {
    this.color.a = alpha
  }
  getColorRGBA() {
    return "rgba(" + this.color.r + "," + this.color.g + "," + this.color.b + "," + this.color.a + ")"
  }
}

const postColor = new Color(150, 150, 150, 1);
let shouldSetState = true;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleBackgroundColor: postColor,
      navbarTitle: "",
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }
  handleScroll(event) {
    let factor = window.scrollY / window.innerHeight;
    let alpha = 1 - factor;
    let navbarTitle = this.state.navbarTitle
    let headings = document.getElementsByClassName("catch_heading")
    let footer = document.getElementById("blogfooter")
    if (headings.length > 0) {
      let footerDis = footer.offsetTop - window.scrollY - 50
      if(footerDis < 0){
        navbarTitle = ""
      }else{
      let ogHeading = headings[0]
      let ogDistanceFromTop = ogHeading.offsetTop - window.scrollY - 10
      if (ogDistanceFromTop > 0) {
        navbarTitle = ""
      } else {
        for (var i = 0; i < headings.length; i++) {
          let heading = headings[i]
          let distanceFromTop = heading.offsetTop - window.scrollY - 10
          if (distanceFromTop < 0) {
            navbarTitle = heading.textContent;
          }
        }
      }
    }
  }
    let newState = {}
    if (alpha > 0) {
      if (this.state.navbarTitle !== navbarTitle) {
        newState["navbarTitle"] = navbarTitle
      }
      if (shouldSetState) {
        let newColor = new Color(this.state.titleBackgroundColor.color.r, this.state.titleBackgroundColor.color.g,
          this.state.titleBackgroundColor.color.b, alpha)
        newState["titleBackgroundColor"] = newColor
        shouldSetState = false
      } else {
        shouldSetState = true
      }
    } else {
      if (this.state.navbarTitle !== navbarTitle) {
        newState = {
          navbarTitle: navbarTitle
        }
      }
    }
    this.setState(newState)

  }



  render() {
    const text = "et dolore magnam aliquam quaerat vo luptatem. Ut enim ad minima veniam, quis n ostrum exercitationem ullam corporis suscipit laboriosam, n isi ut aliquid ex ea commodi consequatur? Quis au tem vel eum iure reprehenderit qui in ea voluptate ve lit esse quam nihil molestiae consequatur, vel illum qui lorem eum fugiat quo voluptas nulla pariatur?"
    const postContent = [
      {
        type: "divider",
        data: {
          marginTop: 60,
        }
      },
      {
        type: "large_text",
        data: {
          text: "Happy Thanksgiving! We hope that you and your family had a wonderful holiday.",
          marginTop: 60,
        }
      },
      {
        type: "divider",
        data: {
          marginTop: 60,
        }
      },
      {
        type: "catch_heading",
        data: {
          text: "Table of Contents",
          marginTop: 60,
        }
      },
      {
          type: "table_of_bullets_for_catch_headings",
          data:{
          marginTop: 0,
          }
      },
      {
        type: "catch_heading",
        data: {
          text: "Heading One",
          anchor: "heading_one",
          marginTop: 60,
        }
      },
      {
        type: "sub_heading",
        data: {
          text: "Happy Thanksgiving!",
          marginTop: 60,
        }
      },
      {
        type: "text",
        data: {
          text: text,
          marginTop: 10,
        }
      },
      {
        type: "catch_heading",
        data: {
          text: "Heading Two",
          anchor: "heading_two",
          marginTop: 50,
        }
      },
      {
        type: "image",
        data: {
          src: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/birth_month_flowers-primary-1920x1280px_pixabay.jpg?itok=dWAFwFYq",
          marginTop: 10,
        }
      },
      {
        type: "text",
        data: {
          text: text,
          marginTop: 10,
        }
      },
      {
        type: "catch_heading",
        data: {
          text: "Heading Three is a very very very long ass heading that is so long",
          anchor: "heading_three",
          marginTop: 50,
        }
      },
      {
        type: "image",
        data: {
          src: "https://cdn.theatlantic.com/assets/media/img/mt/2017/10/Pict1_Ursinia_calendulifolia/lead_960.jpg?1508330040",
          marginTop: 10,
        }
      },
      {
        type: "text",
        data: {
          text: text,
          marginTop: 10,
        }
      },
      {
        type: "catch_heading",
        data: {
          text: "Done",
          marginTop: 70,
        }
      },
    ]
    return (
      <div>
        <PostNav textColor="white" backgroundColor={postColor.getColorRGBA()} text={this.state.navbarTitle} />
        <PostHeader
          title="This is a Blog Post"
          author="BRODIE MEYER"
          date="FEBRUARY 20, 2018"
          titleColor="white"
          authorColor="black"
          backgroundColor={this.state.titleBackgroundColor.getColorRGBA()} />
        <PostContent content={postContent} headingColor={postColor.getColorRGBA()} subheadingColor="black" />
        <PostFooter authorName="Brodie Meyer" 
        authorDescription="et dolore magnam aliquam quaerat vo luptatem. Ut enim ad minima veniam, quis n ostrum exercitationem ullam corporis suscipit laboriosam, n isi ut aliquid ex ea commodi consequatur? Quis au tem vel eum iure reprehenderit qui in ea voluptate ve lit esse quam nihil molestiae consequatur, vel illum qui lorem eum fugi" 
        authorImage="https://cdn-images-1.medium.com/fit/c/200/200/1*ETHBnCElS9wN7uDXpFPBYQ.jpeg" 
        backgroundColor={postColor.getColorRGBA()} />
        <Footer logoImage="https://www.fusemeapp.com/assets/images/festoword.png" />
      </div>
    );
  }
}

export default App;