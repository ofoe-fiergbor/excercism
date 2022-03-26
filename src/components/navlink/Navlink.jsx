import React from "react";
import styles from "./navlink.module.css"

export const Navlink = ({text, active=false, icon}) => {
  return (
    <div className={styles.navlink}>
      <img src={icon} alt="svg" className={styles.navlinkIcon}/>
      <p className={active ? styles.active : styles.inactive}>{text}</p>
    </div>
  );
};
