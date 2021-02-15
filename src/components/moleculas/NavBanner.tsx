import React from "react"
import Image from "../image"
import styles from "./NavBanner.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import NavLink from "../atoms/NavLink"
import useWindowWidth from "../hooks/useWindowWidth"
import siteGlobalVariables from "../../utils/headers"
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

  // Site Global Variables
  const {
    sizes: { mobile },
    conditionParam: { big },
    links: { youtube },
  } = siteGlobalVariables

  // Links of Burger menu (Mobile)
  const mobileLinks: JSX.Element = nodes.map(({ id, name, link }) => {
    return (
      <div key={id} className={styles.navLink}>
        <NavLink func={func} compState={compState} link={link}>
          - {name}
        </NavLink>
      </div>
    )
  })

  // Links of Youtube-Banner (Web)
  const webLinks = (
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
    webLinks,
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
