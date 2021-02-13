import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Image from "./image"
import styles from "./header.module.scss"
import MobileMenu from "./mobileMenu"
import NavLink from "./atoms/NavLink"
import useScroll from "../hooks/useScroll"
import classnames from "classnames"
import { setCondition } from "../utils/setCondition"
import AppConfig from "../utils/headers"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
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
          relativePath: { regex: "/nav/" }
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

  const logo = data?.allFile?.edges[1]?.node.childImageSharp?.fluid
  const bgIcon = data?.allFile?.edges[0]?.node.childImageSharp?.fluid
  const links = data?.allStrapiNav?.nodes

  const navLinks = links.map(({ name, link, id }) => (
    <NavLink link={link} key={id} linkClass={styles.navLink}>
      {name}
    </NavLink>
  ))

  const [openMenu, setOpenMenu] = React.useState<boolean>(false)
  const { scrollPos } = useScroll()

  // This component handles the Navbar
  return (
    <header
      className={
        scrollPos > 0 ? classnames(styles.nav, styles.smallNav) : styles.nav
      }
    >
      <div className={styles.navDiv}>
        <Image image={logo} imgClass={styles.logo} />
        <Image
          image={bgIcon}
          imgClass={styles.bgIcon}
          divClass={styles.bgDiv}
          func={setOpenMenu}
          compState={openMenu}
        />
      </div>
      <div className={styles.navigation}>{navLinks}</div>
      <MobileMenu func={setOpenMenu} compState={openMenu} />
    </header>
  )
}

export default Header
