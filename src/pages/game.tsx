import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/atoms/PageBanner"
import Image from "../components/image"
import styles from "./game.module.scss"
import { graphql } from "gatsby"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"
import Container from "../components/atoms/Container"

const game = ({ location, data }) => {
  const {
    allStrapiPara: { nodes },
  } = data

  // Site Global Variables.
  const {
    pageHeaders: { GAME },
    gameButton,
  } = SiteGlobalVariables

  // Red Buttons from page navigation.
  const gameBtn = gameButton.map(btn => {
    return (
      <span className={styles.gameBtn} key={btn}>
        {btn}
      </span>
    )
  })

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

  // Container Class
  const wrapperClass = {
    width: "55%",
    margin: "auto",
    marginTop: "3.5rem",
  }

  // Container Class
  const containerClass = {
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  }

  return (
    <Layout location={location}>
      <PageBanner header={GAME} />
      <Container {...wrapperClass}>
        <Container {...containerClass}>{gameBtn}</Container>
        <Container>{gamePage}</Container>
      </Container>
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
