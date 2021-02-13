import { graphql } from "gatsby"
import React from "react"
import PageBanner from "../components/atoms/PageBanner"
import Layout from "../components/layout"
import SchoolSection from "../components/moleculas/SchoolDiv"
import { SchoolInterface } from "../interfaces/School"
import headers from "../utils/headers"

const characters = ({
  location,
  data: {
    allStrapiSchool: { nodes: schools },
  },
}) => {
  const schoolDis = schools.map((school: SchoolInterface) => {
    return <SchoolSection key={school.id} school={school} />
  })

  return (
    <Layout location={location}>
      <PageBanner header={headers.CHARACTERS} />
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
