import { graphql } from "gatsby"
import React from "react"
import PageBanner from "../components/atoms/PageBanner"
import Layout from "../components/layout"
import siteGlobalVariables from "../utils/headers"
import SchoolSection from "../components/moleculas/SchoolDiv"
import { SchoolInterface } from "../interfaces/School"

const characters = ({ location, data }) => {
  // Site Global Variables
  const {
    pageHeaders: { CHARACTERS },
  } = siteGlobalVariables

  // Destructuring Querys
  const {
    allStrapiSchool: { nodes: schools },
  } = data

  const schoolDis = schools.map((school: SchoolInterface) => {
    return <SchoolSection key={school.id} school={school} />
  })

  return (
    <Layout location={location}>
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
