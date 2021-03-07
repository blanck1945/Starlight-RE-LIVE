import { useStaticQuery, graphql } from "gatsby"
import { RiStarSFill } from "react-icons/ri"
import React, { useState } from "react"
import Title from "./atoms/Title"
import Image from "./image"
import styles from "./CategoryTags.module.scss"
import { PostInterface } from "../interfaces/Post"
import useCondition from "./hooks/useCondition"
import useWindowWidth from "./hooks/useWindowWidth"
import siteConfiguration from "../utils/headers"
import SiteGlobalVariables from "../configuration/SiteGlobalVariables"

interface CategoryTagsProps {
  display?: boolean
  redBtn?: boolean
}

const CategoryTags = ({ display, redBtn }: CategoryTagsProps) => {
  const {
    allStrapiPost: { nodes: post },
    allFile,
  } = useStaticQuery(graphql`
    {
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
    sizes: { mobile },
    conditionParam: { big },
    live: { live, liveEvent, live_Event },
  } = siteConfiguration

  // Site Global Variables.
  const {
    categories,
    pageHeaders: { NEWS },
  } = SiteGlobalVariables

  // Hook to handle categories state.
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  // Hook to handle mobile or web view.
  const { windowWidth } = useWindowWidth()

  const categoryDiv = categories.map(({ tag, color }) => {
    // Hook to manage conditional rendering.
    const { condition } = useCondition(tag, liveEvent, live_Event, tag)

    // Component to render Category tags.
    return (
      <div
        key={tag}
        className={styles.inner}
        onClick={() => setSelectedCategory(tag)}
      >
        <RiStarSFill style={{ color: color, marginBottom: "2.5px" }} />
        <h5 className={selectedCategory == tag ? styles.selected : ""}>
          {condition}
        </h5>
      </div>
    )
  })

  const postContent = post.map((el: PostInterface) => {
    // Hook to manage conditional rendeting.
    const { condition } = useCondition(windowWidth, mobile, null, null, big)

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
