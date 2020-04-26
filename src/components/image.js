import React from "react"
import Img from "gatsby-image"

import './image.scss'

const Image = ({ fluid, alt, className = ''}) => (
  <div className={`image ${className}`}>
    <div className="image__outline"></div>
    <Img
      className="image__img"
      fluid={fluid}
      alt={alt}
    />
  </div>
)

export default Image
