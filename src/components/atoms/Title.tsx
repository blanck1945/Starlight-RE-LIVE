import React, { Children } from "react"
import styles from "./Title.module.scss"

interface TitleProps {
  children: any
  noUnderline?: boolean
}

const Title = ({ children, noUnderline }: TitleProps) => {
  return (
    <div className={styles.titleDiv}>
      <h3>{children}</h3>
      {!noUnderline && <div />}
    </div>
  )
}

export default Title
