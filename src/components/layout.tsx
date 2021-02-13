import React from "react"
import GlobalProvider from "../context/GlobalContext"
import ScrollWrapper from "../context/ScrollWrapper"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./organos/Footer"
import styles from "./Layout.module.scss"

interface LayoutProps {
  children: JSX.Element[] | JSX.Element | HTMLHeadingElement
  location: any
}

const Layout = ({ children, location }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ScrollWrapper>
        <GlobalProvider location={location}>
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main className={styles.main}>{children}</main>
          <Footer />
        </GlobalProvider>
      </ScrollWrapper>
    </>
  )
}

export default Layout
