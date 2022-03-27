import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSortOption } from "../../domain/redux/appSlicer";
import styles from "./dropdown.module.css";

export const Dropdown = () => {
  const dispatch = useDispatch();

  const { loading, sortOption } = useSelector((state) => state.app);

  const handleChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <div className={styles.dropdown}>
      <select
        disabled={loading}
        value={sortOption}
        className={styles.select}
        onChange={(e) => handleChange(e)}
        // name="Name"
      >
        <option value="newest">Sort by Most Recent</option>
        <option value="oldest">Sort by Oldest</option>
      </select>
    </div>
  );
};
