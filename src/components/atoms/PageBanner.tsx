import React from "react"
import styles from "./PageBanner.module.scss"
import Title from "./Title"

interface PageBannerProps {
  header: string
}

const PageBanner = ({ header }: PageBannerProps) => {
  return (
    <div className={styles.pageBanner}>
      <Title noUnderline>{header}</Title>
    </div>
  )
}

export default PageBanner
