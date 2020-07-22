import React from "react";

import MovieList from "components/movieList";

import mov1 from "assets/images/mov1.jpg";
import mov2 from "assets/images/mov2.jpg";
import mov3 from "assets/images/mov3.jpg";

import "./about.css";

const images = {
  movPoster1: mov1,
  movPoster2: mov2,
  movPoster3: mov3,
};

// create an array for movie data
const movieData = [
  { poster: mov1, title: "Batman Return", desc: "tthis is a batman movie" },
  {
    poster: images.movPoster1,
    title: "Dark ",
    desc:
      "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
  },
  {
    poster: images.movPoster2,
    title: "Greyhound",
    desc:
      "Early in World War II, an inexperienced U.S. Navy captain must lead an Allied convoy being stalked by Nazi U-boat wolfpacks.",
  },
  {
    poster: mov2,
    title: "Joker",
    desc:
      "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
  },
  {
    poster: mov1,
    title: "Knives Out",
    desc:
      "A detective investigates the death of a patriarch of an eccentric, combative family.",
  },
  {
    poster: mov3,
    title: "Parasite",
    desc:
      "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
  },
  {
    poster: mov1,
    title: "Game of Thrones",
    desc:
      "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
  },
  {
    poster: mov2,
    title: "1917",
    desc:
      "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.",
  },
  {
    poster: mov3,
    title: "Palm Springs",
    desc:
      "When carefree Nyles and reluctant maid of honor Sarah have a chance encounter at a Palm Springs wedding, things get complicated as they are unable to escape the venue, themselves, or each other.",
  },
  {
    poster: mov1,
    title: "Back to the Future",
    desc:
      "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.",
  },
];

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>
          <a href="http://google.com" target="_blank">
            This is about
          </a>
        </h1>
        <div className="movieHolder">
          {movieData.map((item) => {
            return (
              <MovieList
                img={item.poster}
                title={item.title}
                desc={item.desc}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default About;
