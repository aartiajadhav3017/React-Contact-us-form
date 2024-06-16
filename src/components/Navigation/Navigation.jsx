import React from "react";
import logo from "../../../public/images/Frame.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src={logo} alt="logo"></img>
      </div>

      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
