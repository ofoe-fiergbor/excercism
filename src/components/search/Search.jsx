import React from "react";
import { useSelector } from "react-redux";
import styles from "./search.module.css"

export const Search = () => {
  const { loading } = useSelector((state) => state.app);

  return (
    <form className={styles.searchContainer}>
      <div className={styles.searchIcon}>
        <i className="fas fa-search"></i>
      </div>
      <input
        type="text"
        disabled={loading}
        className={styles.searchInput}
        placeholder="Filter by exercise title"
        // onChange={(e) => handleOnChange(e)}
      />
    </form>
  );
};
