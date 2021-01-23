import React from "react"
import styles from "./mobileBanner.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import MobileBtn from "./atoms/MobileBtn"

const mobileBanner = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "mobile-head.png" }) {
        childImageSharp {
          fluid(maxWidth: 520) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      allStrapiButton {
        nodes {
          acc
          header
          icon
        }
      }
    }
  `)

  const {
    file: {
      childImageSharp: { fluid },
    },
    allStrapiButton: { nodes },
  } = data

  const btnDis = nodes.map(({ icon, acc, header }) => {
    return <MobileBtn icon={icon} acc={acc} header={header} key={header} />
  })

  return <div className={styles.btnDiv}>{btnDis}</div>
}

//<Image image={fluid} imgClass={styles.banner} />
export default mobileBanner
