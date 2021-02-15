import React, { useEffect } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileBanner from "../components/mobileBanner"
import VideoBanner from "../components/VideoBanner"
import CategoryTags from "../components/CategoryTags"
import BackgroundImage from "gatsby-background-image"
import FacebookFeed from "../components/FacebookFeed"
import { graphql } from "gatsby"

import styles from "./index.module.scss"
import useWindowWidth from "../components/hooks/useWindowWidth"
import utils from "../utils/headers"
import { setCondition } from "../utils/setCondition"
import useCondition from "../components/hooks/useCondition"

const IndexPage = ({
  location,
  data: {
    allFile: { nodes },
  },
}) => {
  // Logo Img
  const logoImg = nodes[0]?.childImageSharp?.fluid

  // BackgroundImg mobile && Web
  const mobileBgImage = nodes[3]?.childImageSharp?.fluid
  const webBgImage = nodes[4]?.childImageSharp?.fluid

  // HeaderImg mobile && Web
  const mobileHeaderImg = nodes[1]?.childImageSharp?.fluid
  const webHeaderImg = nodes[2]?.childImageSharp?.fluid

  const { windowWidth } = useWindowWidth()

  const {
    sizes: { mobile },
    conditionParam: { big },
  } = utils

  const bgImg = setCondition(
    windowWidth,
    mobile,
    webBgImage,
    mobileBgImage,
    big
  )

  const headerImg = setCondition(
    windowWidth,
    mobile,
    webHeaderImg,
    mobileHeaderImg,
    big
  )

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <BackgroundImage fluid={bgImg} className={styles.bg}>
        <Image image={headerImg} imgClass={styles.hero} />
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

// image={setCondition(windowWidth, mobile, bgImgWeb, hero, big)}

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
