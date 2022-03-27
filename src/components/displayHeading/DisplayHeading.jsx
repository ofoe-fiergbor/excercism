import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { Search } from "../search/Search";
import { TrackSelector } from "../tackSelector/TrackSelector";
import styles from "./displayHeading.module.css";

export const DisplayHeading = () => {
  return (
    <div className={styles.displayHeading}>
      <div className={styles.leftDisplay}>
        <TrackSelector />
        <Search />
      </div>
      <Dropdown />
    </div>
  );
};
