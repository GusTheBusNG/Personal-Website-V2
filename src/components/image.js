import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import './image.scss'

const Image = ({ src, className = ''}) => {
  const queryDict = {
    Nick: useStaticQuery(graphql`
      query {
        file(name: { eq: "Nick" }) {
          childCloudinaryAsset {
            fluid {
              ...CloudinaryAssetFluid
            }
          }
        }
      }
    `),
  }
  const data = queryDict[src];

  return (
    <div className={`image ${className}`}>
      <div className="image__outline"></div>
      <Img
        className="image__img"
        fluid={data.file.childCloudinaryAsset.fluid}
        alt={src}
      />
    </div>
  )
}

export default Image
