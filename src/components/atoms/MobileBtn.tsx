import React from "react"
import styles from "./MobileBtn.module.scss"
import { SiGoogleplay } from "react-icons/si"
import { AiOutlineApple } from "react-icons/ai"

const MobileBtn = ({ icon, header, acc }) => {
  const getIcon = () => {
    switch (icon) {
      case "SiGoogleplay":
        return <SiGoogleplay className={styles.icon} />
      case "AiOutlineApple":
        return <AiOutlineApple className={styles.icon} />
      default:
        return <p>No Hay icono</p>
    }
  }

  return (
    <div className={styles.btn}>
      {getIcon()}
      <div className={styles.inner}>
        <p>{acc} </p>
        <span>{header} </span>
      </div>
    </div>
  )
}

export default MobileBtn
