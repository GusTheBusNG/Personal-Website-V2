import React from "react"
import Img from "gatsby-image"

import './image.scss'

const Image = ({
  fluid,
  alt,
  className = '',
  outline = true,
  link
}) => {
  let baseImage = (
    <Img
      className={`image__img ${!outline && className}`}
      fluid={fluid}
      alt={alt}
    />
  )

  if (outline) {
    baseImage = (
      <div className={`image ${className}`}>
        <div className="image__outline"></div>
        {baseImage}
      </div>
    )
  }

  if (link) {
    baseImage = (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {baseImage}
      </a>
    )
  }

  return baseImage
}

export default Image
