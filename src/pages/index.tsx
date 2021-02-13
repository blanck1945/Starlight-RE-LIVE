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

const IndexPage = ({
  location,
  data: {
    allFile: { nodes },
  },
}) => {
  const hero = nodes[1]?.childImageSharp?.fluid
  const bgImgWeb = nodes[1]?.childImageSharp?.fluid
  const bgImg = nodes[3]?.childImageSharp?.fluid

  const { windowWidth } = useWindowWidth()

  const {
    sizes: { mobile },
    conditionParam: { big },
  } = utils

  return (
    <Layout location={location}>
      <SEO title="Home" />
      <BackgroundImage fluid={bgImg} className={styles.bg}>
        <Image
          image={setCondition(windowWidth, mobile, bgImgWeb, hero, big)}
          imgClass={styles.hero}
        />
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
