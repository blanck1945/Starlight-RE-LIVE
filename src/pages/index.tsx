import React, { useEffect } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileBanner from "../components/atoms/mobileBanner"
import VideoBanner from "../components/VideoBanner"
import CategoryTags from "../components/CategoryTags"
import BackgroundImage from "gatsby-background-image"
import FacebookFeed from "../components/FacebookFeed"
import { graphql } from "gatsby"

import styles from "./index.module.scss"
import useWindowWidth from "../components/hooks/useWindowWidth"
import siteGlobalVariables from "../utils/headers"
import { setCondition } from "../utils/setCondition"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"
import orderImg from "../utils/orderImgs"

const IndexPage = ({ location, data }) => {
  // Site Global Variables.
  const {
    sizes: { mobile },
    conditionParam: { big },
  } = siteGlobalVariables

  // Site Global Variables.
  const {
    titles: { home },
  } = SiteGlobalVariables

  // Destructuring Querys.
  const {
    allFile: { nodes },
  } = data

  const fluidImg = orderImg(nodes)

  // Logo Img.
  const logoImg = nodes[0]?.childImageSharp?.fluid

  // BackgroundImg mobile && Web.
  const mobileBgImage = nodes[3]?.childImageSharp?.fluid
  const webBgImage = nodes[4]?.childImageSharp?.fluid

  // HeaderImg mobile && Web.
  const mobileHeaderImg = nodes[1]?.childImageSharp?.fluid
  const webHeaderImg = nodes[2]?.childImageSharp?.fluid

  // Hook to handle mobile or web view.
  const { windowWidth } = useWindowWidth()

  return (
    <Layout location={location}>
      <SEO title={home} />
      <BackgroundImage
        fluid={windowWidth > 500 ? fluidImg.bgWeb : fluidImg.bgMobile}
        className={styles.bg}
      >
        <Image
          image={windowWidth > 500 ? fluidImg.heroBgWeb : fluidImg.heroMobile}
          imgClass={styles.hero}
        />
        <Image image={logoImg} imgClass={styles.logo} />
      </BackgroundImage>
      <MobileBanner />
      <VideoBanner />
      <CategoryTags display redBtn />
      <FacebookFeed />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativePath: { regex: "/home/" }
      }
    ) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
