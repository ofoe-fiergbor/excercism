import React from "react";
import styles from "./button.module.css";

export const Button = ({ inactive = false, left = false, right = false }) => {
  return (
    <button
      disabled={inactive}
      className={inactive ? styles.inactiveButton : styles.activeButton}
    >
      {left && <i className="fas fa-chevron-left"></i>}
      {left && <p>Previous</p>}
      {right && <p>Next</p>}
      {right && <i className="fas fa-chevron-right"></i>}
    </button>
  );
};
