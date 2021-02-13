import React from "react"
import MobileBtn from "../atoms/MobileBtn"
import Image from "../image"
import styles from "./MobileDownload.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import useWindowWidth from "../hooks/useWindowWidth"

const MobileDonwload = () => {
  const {
    allFile: { nodes: image },
    allStrapiButton: { nodes: btn },
    allStrapiFeature: { nodes: feature },
  } = useStaticQuery(graphql`
    {
      allStrapiButton {
        nodes {
          id
          header
          icon
          acc
        }
      }
      allStrapiFeature {
        nodes {
          id
          name
          desc
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativePath: { regex: "/footer/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const fluid = image[0].childImageSharp.fluid
  const { windowWidth } = useWindowWidth()

  const btnDis = btn.map(({ icon, acc, header }) => {
    return <MobileBtn icon={icon} acc={acc} header={header} key={header} />
  })

  const featureDis = feature.map(({ id, name, desc }) => {
    return (
      <div key={id} className={styles.featureDiv}>
        <span>{name}</span>
        <p>{desc}</p>
      </div>
    )
  })

  return (
    <div className={styles.mobileDiv}>
      {windowWidth > 500 ? (
        <>
          <div className={styles.top}>
            <Image image={fluid} imgClass={styles.image} />
            <div className={styles.center}>{featureDis}</div>
          </div>
          <div className={styles.btnDiv}>{btnDis}</div>
        </>
      ) : (
        <>
          <div className={styles.top}>
            <Image image={fluid} imgClass={styles.image} />
            <div className={styles.btnDiv}>{btnDis}</div>
          </div>
          <div className={styles.center}>{featureDis}</div>
          <div></div>
        </>
      )}
    </div>
  )
}

export default MobileDonwload
