import React from "react"
import SocialIcons from "../atoms/SocialIcons"
import MobileDownload from "../moleculas/MobileDonwload"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <MobileDownload />
      <SocialIcons />
    </div>
  )
}

export default Footer
