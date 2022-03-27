import React from "react";
import styles from "./selector.module.css";
import selectorIcon from "../../assets/svg/selector.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTrackSelected } from "../../domain/redux/appSlicer";

export const TrackSelector = () => {
  const dispatch = useDispatch();
  const { myTracks, trackSelected } = useSelector((state) => state.app);

  const handleSelectedTrack = (track) => {
    dispatch(setTrackSelected(track));
  };

  return (
    <div>
      <label className={styles.dropdown}>
        <div className={styles.ddButton}>
          <img src={selectorIcon} alt="selector-icon" />
        </div>
        <input type="checkbox" className={styles.ddInput} id="test" />

        <div className={styles.ddMenu}>
          {myTracks.map((track) => (
            <div
              onClick={() => handleSelectedTrack(track.slug)}
              key={track.title}
              className={styles.li}
            >
              <input
                type="radio"
                value={track.slug}
                name="track"
                readOnly
                checked={track.slug === trackSelected}
              />
              <img src={track.icon_url} alt={track.slug} />
              <div className={styles.trackDetails}>
                <p>{track.title}</p>
                <div>
                  <p>{track.track_count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </label>
    </div>
  );
};
