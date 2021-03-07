import { graphql } from "gatsby"
import React from "react"
import PageBanner from "../components/atoms/PageBanner"
import Layout from "../components/layout"
import SchoolSection from "../components/moleculas/SchoolDiv"
import SEO from "../components/seo"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"
import { SchoolInterface } from "../interfaces/School"

const characters = ({ location, data }) => {
  // Nodes from Query
  const {
    allStrapiSchool: { nodes: schools },
  } = data

  // Site Global Variables.
  const {
    pageHeaders: { CHARACTERS },
    titles: { characters },
  } = SiteGlobalVariables

  const schoolDis = schools.map((school: SchoolInterface) => {
    return <SchoolSection key={school.id} school={school} />
  })

  return (
    <Layout location={location}>
      <SEO title={characters} />
      <PageBanner header={CHARACTERS} />
      {schoolDis}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiSchool {
      nodes {
        id
        desc
        chara {
          id
          desc
          chara_name
          school
          school_logo
          slug
          student_id
          video
          profile_img {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        school_img {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default characters
