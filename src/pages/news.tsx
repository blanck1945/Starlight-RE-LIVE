import React from "react"
import Layout from "../components/layout"
import PageBanner from "../components/atoms/PageBanner"
import CategoryTags from "../components/CategoryTags"
import Paginator from "../components/atoms/Paginator"
import siteConfiguration from "../utils/headers"

const News = ({ location }) => {
  const {
    pageHeaders: { NEWS },
  } = siteConfiguration

  return (
    <Layout location={location}>
      <PageBanner header={NEWS} />
      <CategoryTags />
      <Paginator />
    </Layout>
  )
}

export default News
