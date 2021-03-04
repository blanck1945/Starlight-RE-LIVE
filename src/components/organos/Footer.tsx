import React from "react"
import SocialIcons from "../atoms/SocialIcons"
import DownFotter from "../moleculas/DownFotter"
import MobileDownload from "../moleculas/MobileDonwload"
import NavBanner from "../moleculas/NavBanner"
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <NavBanner />
      <MobileDownload />
      <SocialIcons />
      <DownFotter />
    </div>
  )
}

export default Footer
