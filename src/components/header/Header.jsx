import React from "react";
import headerIcon from "../../assets/svg/headerIcon.svg";
import headerLine from "../../assets/svg/headerLine.svg";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={headerIcon} alt="header-icon" />
      <div>
        <h1>Testimonials I've left</h1>
        <div>
          <p>47</p>
        </div>
      </div>
        <img src={headerLine} alt="header-line" />
    </div>
  );
};
