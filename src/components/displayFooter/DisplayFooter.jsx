import React from "react";
import { Button } from "../button/Button";
import styles from "./displayFooter.module.css"

export const DisplayFooter = () => {
  return (
    <div className={styles.displayFooter}>
      <Button inactive left />
      <p>DisplayFooter</p>
      <Button right/>
    </div>
  );
};
