import React from "react";

// import logo from "../../assets/images/logo.svg";

import "./home.css";
import logo from "assets/images/logo.svg";

import Section from "components/section";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Section
            title="Title One"
            desc="this is section one desc"
            color="purple"
            img={logo}
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            direction="left"
          />

          {/* <Section
            title="Title Two"
            desc="this is section two desc"
            color="pink"
            content="section two content"
            direction="right"
            darkMode={true}
          /> */}

          {/* <Section
            title="Title Three"
            desc="this is section Three desc"
            color="green"
            content="section Three content"
            direction="left"
          /> */}
        </div>
      </div>
    );
  }
}

export default Home;
