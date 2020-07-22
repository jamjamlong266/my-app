import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>{this.props.logo}</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <h3>logo</h3>
        <ul>
          <li>Terms of use</li>
          <li>Privacy</li>
        </ul>
      </footer>
    );
  }
}

export default class Home extends React.Component {
  render() {
    //rule jsx
    return (
      <>
        <Header logo="Jam Logo" />
        <h1>This is Home</h1>
        <p>this is another para</p>
        <Footer />
      </>
    );
  }
}

// export default Home;
