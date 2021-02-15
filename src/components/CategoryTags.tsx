import { useStaticQuery, graphql } from "gatsby"
import { RiStarSFill } from "react-icons/ri"
import React from "react"
import Title from "./atoms/Title"
import Image from "./image"
import styles from "./CategoryTags.module.scss"
import { PostInterface } from "../interfaces/Post"
import useCondition from "./hooks/useCondition"
import useWindowWidth from "./hooks/useWindowWidth"
import siteConfiguration from "../utils/headers"
import useBoolean from "./hooks/useBoolean"

interface CategoryTagsProps {
  display?: boolean
  redBtn?: boolean
}

const CategoryTags = ({ display, redBtn }: CategoryTagsProps) => {
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

  const image = allFile?.edges[0]?.node?.childImageSharp?.fluid

  // Site Global Variables.
  const {
    pageHeaders: { NEWS },
    sizes: { mobile },
    conditionParam: { big },
    live: { live, liveEvent, live_Event },
  } = siteConfiguration

  // Hook to handle mobile or web view.
  const { windowWidth } = useWindowWidth()

  const categoryDiv = categories.map(el => {
    // Hook to manage conditional rendering.
    const { condition } = useCondition(el.name, liveEvent, live_Event, el.name)

    // Component to render Category tags.
    return (
      <div key={el.id} className={styles.inner}>
        <RiStarSFill style={{ color: el.color, marginBottom: "2.5px" }} />
        <h5>{condition}</h5>
      </div>
    )
  })

  const postContent = post.map((el: PostInterface) => {
    // Hook to manage conditional rendeting.
    const { condition } = useCondition(
      windowWidth,
      mobile,
      <p>aca va la image</p>,
      null,
      big
    )

    return (
      <div key={el.id} className={styles.postContent}>
        <div>
          <h4>{el.fecha}</h4>
          <span style={{ backgroundColor: el.color }}>
            {el.tag === live ? liveEvent : el.tag}
          </span>
        </div>
        <div>
          <h4>{el.title}</h4>
          {condition}
        </div>
      </div>
    )
  })

  const arrow = {
    btn: true,
    arrowDiv: styles.arrowDiv,
    iconDiv: "",
  }

  return (
    <div className={styles.content}>
      {display && <Title>{NEWS}</Title>}
      <div className={styles.categories}>{categoryDiv}</div>
      <div className={styles.post}>{postContent}</div>
      {redBtn && <Image arrow={arrow} image={image} imgClass={styles.redBtn} />}
    </div>
  )
}

export default CategoryTags
