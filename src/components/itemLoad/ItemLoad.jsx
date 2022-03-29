import React from "react";
import Loader from "../loader/Loader";
import styles from "./itemLoad.module.css";

const ItemLoad = () => {
  return (
    <div className={styles.itemLoad}>
      <Loader/>
    </div>
  );
};

export default ItemLoad
