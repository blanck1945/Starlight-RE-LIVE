import React from "react"
import NavBanner from "./moleculas/NavBanner"
import Image from "./image"
import styles from "./mobileMenu.module.scss"
import { graphql, useStaticQuery } from "gatsby"

const mobileMenu = ({ func, compState }) => {
  const {
    allFile: { nodes: crossImg },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativePath: { regex: "/burger/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 520, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  // Cross Icon
  const cross = crossImg[0].childImageSharp.fluid

  // Component controls Navbar render in mobile and web
  return (
    <div className={compState ? styles.bg : styles.bgClose}>
      <Image
        image={cross}
        imgClass={styles.crossImg}
        divClass={styles.crossDiv}
        func={func}
        compState={compState}
      />
      <NavBanner func={func} compState={compState} />
    </div>
  )
}

export default mobileMenu
