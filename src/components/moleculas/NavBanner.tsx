import React from "react"
import Image from "../image"
import styles from "./NavBanner.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import NavLink from "../atoms/NavLink"

const NavBanner = () => {
  const {
    allStrapiNav: { nodes },
    allFile: { nodes: image },
  } = useStaticQuery(graphql`
    {
      allStrapiNav {
        nodes {
          id
          name
          link
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativePath: { regex: "/youtube/" }
        }
      ) {
        nodes {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  const fluid = image[0].childImageSharp.fluid

  const linksDis = nodes.map(({ id, name, link }) => {
    return (
      <div key={id} className={styles.navLink}>
        <NavLink link={link}>- {name}</NavLink>
      </div>
    )
  })

  return (
    <div className={styles.banner}>
      {linksDis}
      <Image image={fluid} imgClass={styles.youtube} />
    </div>
  )
}

export default NavBanner
