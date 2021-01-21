import { useStaticQuery, graphql } from "gatsby"
import { RiStarSFill } from "react-icons/ri"
import React from "react"
import styles from "./CategoryTags.module.scss"

const CategoryTags = () => {
  const {
    allStrapiCategory: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiCategory {
        nodes {
          id
          color
          name
        }
      }
    }
  `)

  const categoryDiv = nodes.map(el => {
    return (
      <div key={el.id} className={styles.inner}>
        <RiStarSFill style={{ color: el.color }} />
        <h5 style={{ color: el.color }}>{el.name}</h5>
      </div>
    )
  })

  return <div className={styles.content}>{categoryDiv}</div>
}

export default CategoryTags
