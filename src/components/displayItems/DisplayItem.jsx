import React from "react";
import styles from "./displayItem.module.css";
import avatar from "../../assets/jpg/avatar.jpg";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

dayjs.extend(relativeTime);

export const DisplayItem = ({ testimonial }) => {
  return (
    <div className={styles.displayItem}>
      <div>
        <img src={testimonial.track.icon_url} alt={testimonial.track.slug} />
        <img src={avatar} alt="avatar" />
        <div>
          <p>{testimonial.mentor.handle}</p>
          <p>{testimonial.exercise.title}</p>
        </div>
      </div>
      <p className={styles.content}>{testimonial.content}</p>
      <div className={styles.timeContainer}>
        <p className={styles.time}>{dayjs(testimonial.created_at).fromNow()}</p>
        <i className="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};
