import React from "react";

import "./movieList.css";

class MovieList extends React.Component {
  render() {
    return (
      <div className="movieContainer">
        <div className="moviePoster">
          <img
            style={{ width: "100%", height: "100%" }}
            src={this.props.img}
            alt="movie poster"
          />
        </div>
        <h5>{this.props.title}</h5>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default MovieList;
