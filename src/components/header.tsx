import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import styles from "./header.module.scss"
import MobileMenu from "./mobileMenu"

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    {
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

  const [openMenu, setOpenMenu] = React.useState<boolean>(false)

  return (
    <header className={styles.nav}>
      <Image image={logo} imgClass={styles.logo} />
      <Image
        image={bgIcon}
        imgClass={styles.bgIcon}
        divClass={styles.bgDiv}
        func={setOpenMenu}
        compState={openMenu}
      />
      <MobileMenu func={setOpenMenu} compState={openMenu} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
