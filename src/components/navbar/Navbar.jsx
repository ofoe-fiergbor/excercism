import React from "react";

import styles from "./navbar.module.css";

import happy from "../../assets/svg/happy.svg";
import septagon from "../../assets/svg/septagon.svg";
import logo from "../../assets/png/logo.png";
import bell from "../../assets/svg/bell.svg";
import notification from "../../assets/svg/notification.svg";
import avatar from "../../assets/jpg/avatar.jpg";
import option from "../../assets/svg/option.svg";

import { navlinks } from "../../constants/navlinks";

import { Navlink } from "../navlink/Navlink";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <img src={logo} alt="logo" className={styles.navbarLogo} />
        <div className={styles.navlinks}>
          {navlinks.map((link) => (
            <Navlink text={link.text} icon={link.icon} active={link.active} />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <img src={happy} alt="happy" />
        <img src={septagon} alt="septagon" />
        <div className={styles.notificationIcon}>
          <img src={bell} alt="bell" />
          <img src={notification} alt="notification" />
        </div>
        <div className={styles.point}>
          <p>300k</p>
        </div>
        <img src={avatar} alt="avatar" className={styles.avatar} />
        <img src={option} alt="option" />
      </div>
    </div>
  );
};
