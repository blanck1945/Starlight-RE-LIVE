import React from "react"
import styles from "./SocialIcons.module.scss"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import classNames from "classnames"

const SocialIcons = () => {
  return (
    <div className={styles.socialDiv}>
      <AiOutlineTwitter className={classNames(styles.icons, styles.tw)} />
      <FaFacebookF className={classNames(styles.icons, styles.fb)} />
    </div>
  )
}

export default SocialIcons
