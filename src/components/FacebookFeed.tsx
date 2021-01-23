import React from "react"
import Title from "./atoms/Title"
import styles from "./FacebookFeed.module.scss"

const FacebookFeed = () => {
  return (
    <div className={styles.facebook}>
      <div className={styles.title}>
        <Title>Facebook Feed</Title>
      </div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/RevueStarlightReLIVE%2Ffacebook&tabs=timeline&width=440&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="500"
        width="400"
        style={{ border: "none", overflow: "hidden" }}
        className="feed"
        scrolling="no"
        loading="lazy"
        allow="encrypted-media"
      />
    </div>
  )
}

export default FacebookFeed
