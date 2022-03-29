import React from "react";
import { DisplayHeading } from "../displayHeading/DisplayHeading";
import { DisplayItem } from "../displayItems/DisplayItem";
import styles from "./display.module.css";
import { useSelector } from "react-redux";
import { DisplayFooter } from "../displayFooter/DisplayFooter";
import ItemLoad from "../itemLoad/ItemLoad";

export const Display = () => {
  const { initialTestimonials, loading } = useSelector((state) => state.app);

  return (
    <div className={styles.display}>
      <DisplayHeading />
      {loading ? (
        <ItemLoad />
      ) : (
        <>
          {initialTestimonials?.results?.map((testimonial) => (
            <DisplayItem key={testimonial.id} testimonial={testimonial} />
          ))}
        </>
      )}
      <DisplayFooter />
    </div>
  );
};
