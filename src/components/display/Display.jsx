import React from 'react'
import { DisplayHeading } from '../displayHeading/DisplayHeading'
import styles from "./display.module.css"

export const Display = () => {
  return (
    <div className={styles.display}>
        <DisplayHeading />
    </div>
  )
}
