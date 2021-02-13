import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { BiRightArrow } from "react-icons/bi"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

interface ImageProps {
  image: any
  imgClass?: string
  divClass?: string
  func?: React.Dispatch<React.SetStateAction<boolean>>
  compState?: any
  arrow?: ArrowDiv
}

interface ArrowDiv {
  btn: boolean
  arrowDiv: string
  iconClass?: string
  labelClass?: string
}

const Image = ({
  image,
  imgClass,
  func,
  compState,
  divClass,
  arrow,
}: ImageProps) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (func) {
    return (
      <div className={divClass} onClick={() => func(!compState)}>
        <Img className={imgClass} fluid={image} alt="image" />
      </div>
    )
  }

  if (arrow?.btn) {
    return (
      <>
        <Img className={imgClass} fluid={image} alt="image" />
        <div className={arrow.arrowDiv}>
          <h4>List</h4>
          <BiRightArrow />
        </div>
      </>
    )
  }

  if (image) {
    return <Img className={imgClass} fluid={image} alt="image" />
  }

  console.log(image)

  if (!image) {
    return <div>Picture not found</div>
  }
}

export default Image
