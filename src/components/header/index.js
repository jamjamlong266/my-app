import React from "react";
import { Link } from "react-router-dom";

import logo from "assets/images/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <div id="header" style={styles.headerContainer}>
        <div style={styles.logoHolder}>
          <img src={logo} alt="logo" style={styles.logo} />
          <h3>Create react app</h3>
        </div>
        {this.props.showAbout && (
          <div>
            <h3>ABout content </h3>
          </div>
        )}

        <>
          <ul style={styles.menu}>
            <li className="list">
              <Link to="/">Home</Link>
            </li>

            <li style={styles.list}>
              <Link to="/about">About</Link>
            </li>

            <li style={styles.list}>Contact</li>
          </ul>
        </>
      </div>
    );
  }
}

const styles = {
  headerContainer: {
    width: "100%",
    height: 80,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px 50px",
    // boxSizing: "border-box",
    borderBottom: "1px solid rgba(0,0,0,0.3)",
    backgroundColor: "white",
  },
  logoHolder: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 60,
    height: 60,
  },
  menu: {
    height: "100%",
    listStyleType: "none",
    display: "flex",
    alignItems: "center",
  },
  list: {
    margin: "0 20px",
  },
};

export default Header;
