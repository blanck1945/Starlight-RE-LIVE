import React from "react"

export default function Block({ location }) {
  return (
    <Layout location={location}>
      <News location={location} />
    </Layout>
  )
}
