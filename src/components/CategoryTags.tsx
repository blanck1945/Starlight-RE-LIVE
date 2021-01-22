import { useStaticQuery, graphql } from "gatsby"
import { RiStarSFill } from "react-icons/ri"
import React from "react"
import Image from "./image"
import styles from "./CategoryTags.module.scss"
import { PostInterface } from "../interfaces/Post"

const CategoryTags = () => {
  const {
    allStrapiCategory: { nodes: categories },
    allStrapiPost: { nodes: post },
    allFile,
  } = useStaticQuery(graphql`
    {
      allStrapiCategory {
        nodes {
          id
          color
          name
        }
      }
      allStrapiPost {
        nodes {
          id
          title
          fecha
          content
          tag
          color
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativePath: { regex: "/red-btn/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 520, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = allFile.edges[0].node.childImageSharp.fluid
  console.log(image)

  const categoryDiv = categories.map(el => {
    return (
      <div key={el.id} className={styles.inner}>
        <RiStarSFill style={{ color: el.color, marginBottom: "2px" }} />
        <h5 style={{ color: el.color }}>{el.name}</h5>
      </div>
    )
  })

  const postContent = post.map((el: PostInterface) => {
    return (
      <div key={el.id} className={styles.postContent}>
        {console.log(el)}
        <div>
          <h4>{el.fecha}</h4>
          <h4>{el.title}</h4>
        </div>
        <span style={{ backgroundColor: el.color }}>
          {el.tag === "Live" ? "Live/Event" : el.tag}
        </span>
      </div>
    )
  })

  return (
    <div className={styles.content}>
      <div className={styles.categories}>{categoryDiv}</div>
      <div className={styles.post}>{postContent}</div>
      <Image image={image} imgClass={styles.redBtn} />
    </div>
  )
}

export default CategoryTags
