import React from "react"
import styles from "./VideoBanner.module.scss"

const VideoBanner = () => {
  return (
    <div className={styles.wrapper}>
      <a
        className={styles.anchor}
        href="https://www.youtube.com/watch?v=-QPG6-P0Vrc"
        data-lity="data-lity"
      >
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          width="100%"
          id="idx-movie_video"
          src="https://www.en.revuestarlight-relive.com/wp-content/themes/revuestarlight/assets/video/cm.mp4"
          poster="https://www.en.revuestarlight-relive.com/wp-content/themes/revuestarlight/assets/images/common/thumb_movie.jpg"
        ></video>
      </a>
    </div>
  )
}

export default VideoBanner
