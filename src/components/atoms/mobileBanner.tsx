import React from "react"
import styles from "./mobileBanner.module.scss"
import MobileBtn from "./MobileBtn"
import mobileButtons, {
  MobileButtonsInterface,
} from "../../configuration/MobileButtons"

const mobileBanner = () => {
  const btnDis = mobileButtons.map(
    (button: MobileButtonsInterface, index: number) => {
      return <MobileBtn {...button} key={index} />
    }
  )

  return (
    <div className={styles.btnDiv}>
      <p>Avalieble image</p>
      <div>{btnDis}</div>
    </div>
  )
}

//<Image image={fluid} imgClass={styles.banner} />
export default mobileBanner

//<div className={styles.btnDiv}>{btnDis}</div>
