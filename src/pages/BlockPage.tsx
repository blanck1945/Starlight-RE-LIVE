import React from "react"
import Layout from "../components/layout"

export default function Block({ location, children }) {
  console.log(children)

  const Page = children.map(Component => <Component />)

  console.log(Page)

  return (
    <Layout location={location}>
      <Page location={location} />
    </Layout>
  )
}
