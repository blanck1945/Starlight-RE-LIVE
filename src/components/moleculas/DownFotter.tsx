import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import Image from "../image"
import styles from "./DownFooter.module.scss"

const DownFotter = () => {
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativePath: { regex: "/footerDown/" }
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
  `)
  const fluid = edges[0]?.node?.childImageSharp?.fluid
  console.log(fluid)

  function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <div className={styles.downFooter}>
      <h5>
        <Link to={"/inquiries"}>inquiries</Link>
      </h5>
      <h4>
        ©Project Revue Starlight © 2019 Ateam Inc. ©TBS(JAPAN) ©bushiroad All
        Rights Reserved.
      </h4>
      <div className={styles.arrow} onClick={() => topFunction()}>
        <Image image={fluid} imgClass="" />
      </div>
    </div>
  )
}

export default DownFotter
