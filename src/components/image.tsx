import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
}

const Image = ({ image, imgClass, func, compState, divClass }: ImageProps) => {
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

  if (image) {
    return <Img className={imgClass} fluid={image} alt="image" />
  }

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
