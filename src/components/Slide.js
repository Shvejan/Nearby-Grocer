import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import { connect } from "react-redux";
import { Loading } from "./Loading";
const mapStateToProps = (state) => {
  return {
    banners: state.banners,
  };
};
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};
class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.banners.isLoading) {
      return <Loading />;
    } else {
      return (
        <div className="slide-container">
          <Slide {...properties}>
            {this.props.banners.banners.DATA.map((b) => (
              <div className="each-slide">
                <div>
                  <img src={b.banner_image} style={{ width: "100%" }} />
                </div>
              </div>
            ))}
          </Slide>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(Slides);
/* <div className="each-slide">
              <div>
                <img src={this.props.banners.banners.DATA[0].banner_image} />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img src={this.props.banners[1]} />
              </div>
            </div>
            <div className="each-slide">
              <div>
                <img src={this.props.banners[2]} />
              </div>
            </div>*/
