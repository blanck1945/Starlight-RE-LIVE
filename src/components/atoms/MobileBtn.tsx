import React from "react"
import { IconType } from "react-icons"
import styles from "./MobileBtn.module.scss"

interface MobileBtnProps {
  icon: IconType
  header: string
  subHeader: string
  link: string
}

const MobileBtn = ({ icon: Icon, header, subHeader, link }: MobileBtnProps) => {
  return (
    <div className={styles.btn}>
      <Icon />
      <a href={link}>
        <p>{subHeader} </p>
        <span>{header} </span>
      </a>
    </div>
  )
}

export default MobileBtn
