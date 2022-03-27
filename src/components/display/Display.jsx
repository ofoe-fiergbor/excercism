import React from "react";
import { DisplayHeading } from "../displayHeading/DisplayHeading";
import { DisplayItem } from "../displayItems/DisplayItem";
import styles from "./display.module.css";
import { useSelector } from "react-redux";
import { DisplayFooter } from "../displayFooter/DisplayFooter";

export const Display = () => {
  const { initialTestimonials } = useSelector((state) => state.app);
  // console.log(initialTestimonials);
  return (
    <div className={styles.display}>
      <DisplayHeading />
      {initialTestimonials?.results?.map((testimonial) => (
        <DisplayItem key={testimonial.id} testimonial={testimonial} />
      ))}
      <DisplayFooter />
    </div>
  );
};
