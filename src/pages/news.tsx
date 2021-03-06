import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/atoms/PageBanner"
import CategoryTags from "../components/CategoryTags"
import Paginator from "../components/atoms/Paginator"
import SEO from "../components/seo"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"

const News = ({ location }) => {
  // Site Global Variables.
  const {
    titles: { news },
    pageHeaders: { NEWS },
  } = SiteGlobalVariables

  return (
    <Layout location={location}>
      <SEO title={news} />
      <PageBanner header={NEWS} />
      <CategoryTags />
      <Paginator />
    </Layout>
  )
}

export default News
