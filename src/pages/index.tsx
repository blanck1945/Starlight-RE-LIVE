import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import MobileBanner from "../components/mobileBanner"
import VideoBanner from "../components/VideoBanner"
import CategoryTags from "../components/CategoryTags"
import BackgroundImage from "gatsby-background-image"
import { graphql } from "gatsby"

import styles from "./index.module.scss"

export default function IndexPage({
  data: {
    allFile: { edges },
  },
  ...props
}) {
  const bgImg = edges[1]?.node?.childImageSharp?.fluid
  const hero = edges[0]?.node?.childImageSharp?.fluid

  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage fluid={bgImg} className={styles.bg}>
        <Image image={hero} imgClass={styles.hero} />
      </BackgroundImage>
      <MobileBanner />
      <VideoBanner />
      <CategoryTags />
    </Layout>
  )
}

export const query = graphql`
  {
    allFile(
      filter: {
        extension: { regex: "/(jpg)|(jpeg)|(png)/" }
        relativePath: { regex: "/home/" }
      }
    ) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 520, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
