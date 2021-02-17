import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/atoms/PageBanner"
import siteGlobalVariables from "../utils/headers"
import Image from "../components/image"
import styles from "./game.module.scss"
import { graphql } from "gatsby"

const game = ({ location, data }) => {
  // Site Global Variables
  const {
    pageHeaders: { GAME },
  } = siteGlobalVariables

  // Nodes from Query
  const {
    allStrapiPara: { nodes },
  } = data

  const gamePage = nodes.map(({ para }) => {
    return para.map(para => {
      return (
        <div className={styles.content}>
          <Image
            imgClass={styles.header}
            image={para.header.childImageSharp.fluid}
          />
          <Image
            imgClass={styles.image}
            image={para.img.childImageSharp.fluid}
          />
          <p>{para.para}</p>
        </div>
      )
    })
  })

  return (
    <Layout location={location}>
      <PageBanner header={GAME} />
      {gamePage}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiPara {
      nodes {
        id
        para {
          para
          id
          img {
            childImageSharp {
              fluid {
                src
              }
            }
          }
          header {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        }
        detail
      }
    }
  }
`

export default game
