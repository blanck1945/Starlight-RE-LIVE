import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/atoms/PageBanner"
import CategoryTags from "../components/CategoryTags"
import Paginator from "../components/atoms/Paginator"
import siteGlobalVariables from "../utils/headers"

const News = ({ location }) => {
  // Site Global Variables
  const {
    pageHeaders: { NEWS },
  } = siteGlobalVariables

  return (
    <Layout location={location}>
      <PageBanner header={NEWS} />
      <CategoryTags />
      <Paginator />
    </Layout>
  )
}

export default News
