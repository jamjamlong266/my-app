import React from "react";

import "./section.css";

class Section extends React.Component {
  render() {
    return (
      //<div className="sectionContainer">
      //<div className="sectionContainer" {this.props.darkMode && "active"}>
      <div className={`sectionContainer ${this.props.darkMode && "active"} `}>
        <h1>{this.props.title || " Put in a title"}</h1>
        <p>{this.props.desc}</p>
        <div
          className="sectionContentContainer"
          style={{
            flexDirection:
              this.props.direction === "left" ? "row" : "row-reverse",
          }}
        >
          <div
            className="sectionImage"
            style={{ backgroundColor: this.props.color || "skyblue" }}
          >
            <img src={this.props.img} />
          </div>
          <p className="sectionContent">{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Section;
