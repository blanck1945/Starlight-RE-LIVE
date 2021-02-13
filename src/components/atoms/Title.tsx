import React, { Children } from "react"
import styles from "./Title.module.scss"

const Title = ({ children }) => {
  return (
    <div className={styles.titleDiv}>
      <h3>{children}</h3>
      <div />
    </div>
  )
}

export default Title
