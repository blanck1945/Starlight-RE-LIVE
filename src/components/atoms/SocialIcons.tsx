import React from "react"
import styles from "./SocialIcons.module.scss"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
import classNames from "classnames"

const SocialIcons = () => {
  return (
    <div className={styles.socialDiv}>
      <AiOutlineTwitter style={{ backgroundColor: "#1da1f2" }} />
      <FaFacebookF style={{ backgroundColor: "#4267b2" }} />
    </div>
  )
}

export default SocialIcons
