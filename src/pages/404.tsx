import { Link } from "gatsby"
import React from "react"
import Container from "../components/atoms/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"
import styles from "./404.module.scss"

const NotFoundPage = props => {
  // Site Global Variables.
  const {
    titles: { notFound },
  } = SiteGlobalVariables

  return (
    <Layout location={props.location}>
      <SEO title={notFound} />
      <Container divClass={styles.container}>
        <h2>No Revues found here</h2>
        <Link to="/">To Home</Link>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
