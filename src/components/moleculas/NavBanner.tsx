import React from "react"
import Image from "../image"
import styles from "./NavBanner.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import NavLink from "../atoms/NavLink"
import useWindowWidth from "../hooks/useWindowWidth"
import utils from "../../utils/headers"
import { setCondition } from "../../utils/setCondition"
import useCondition from "../hooks/useCondition"

interface NavBannerProps {
  func?: React.Dispatch<React.SetStateAction<boolean>>
  compState?: boolean
}

const NavBanner = ({ func, compState }: NavBannerProps) => {
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
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const fluid = image[0]?.childImageSharp?.fluid

  // Hook to change display between mobile and web
  const { windowWidth } = useWindowWidth()

  // App global configuration variables
  const {
    sizes: { mobile },
    conditionParam: { big },
    links: { youtube },
  } = utils

  // Links of burger menu (Mobile)
  const mobileLinks = nodes.map(({ id, name, link }) => {
    return (
      <div key={id} className={styles.navLink}>
        <NavLink func={func} compState={compState} link={link}>
          - {name}
        </NavLink>
      </div>
    )
  })

  // Links of Web Nav (Web)
  const weblinks = (
    <div className={styles.webWrapper}>
      {nodes.map(({ id, name, link }) => {
        return (
          <NavLink linkClass={styles.webLinks} func={func} link={link}>
            {name}
          </NavLink>
        )
      })}
    </div>
  )

  // Hook to implement custom condition.
  const { condition } = useCondition(
    windowWidth,
    mobile,
    weblinks,
    mobileLinks,
    big
  )

  // Component renders burger menu when is open.
  return (
    <div className={styles.banner}>
      {condition}
      <a href={youtube}>
        <Image image={fluid} imgClass={styles.youtube} />
      </a>
    </div>
  )
}

export default NavBanner
