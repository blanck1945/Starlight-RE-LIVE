import React from "react"
import MobileBtn from "../atoms/MobileBtn"
import MobileBanner from "../atoms/mobileBanner"
import Image from "../image"
import styles from "./MobileDownload.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import useWindowWidth from "../hooks/useWindowWidth"
import mobileButtons, {
  MobileButtonsInterface,
} from "../../configuration/MobileButtons"

const MobileDonwload = () => {
  const {
    allFile: { nodes: image },
    allStrapiFeature: { nodes: feature },
  } = useStaticQuery(graphql`
    {
      allStrapiFeature {
        nodes {
          id
          name
          desc
          value
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

  // Displaing mobile buttons.
  const btnDis = mobileButtons.map(
    (button: MobileButtonsInterface, index: number) => {
      return <MobileBtn {...button} key={index} />
    }
  )

  const featureDis = feature.map(el => {
    console.log(el)
    return (
      <div
        key={el.id}
        className={styles.featureDiv}
        dangerouslySetInnerHTML={{ __html: el.value }}
      />
    )
  })

  return (
    <div className={styles.mobileDiv}>
      {windowWidth > 500 ? (
        <>
          <div>
            <Image image={fluid} imgClass={styles.image} />
            <div>
              <div>{featureDis}</div>
              <div>{btnDis}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <Image image={fluid} imgClass={styles.image} />
            <div className={styles.btnDiv}>{btnDis}</div>
          </div>
          <div>{featureDis}</div>
          <div></div>
        </>
      )}
    </div>
  )
}

export default MobileDonwload
