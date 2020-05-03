import React from 'react'

import './cardHeading.scss'

const CardHeading = ({
  title,
  company,
  timespan,
  className,
  variant,
  titleColor,
  children
}) => (
  <div className={`card-heading ${variant} ${className}`}>
    <h2 className="card-heading__company">{company}</h2>
    <h2
      className="card-heading__title"
      style={titleColor && { color: titleColor }}
    >{title}</h2>
    <h4 className="card-heading__timespan">{timespan}</h4>
    <h4 className="card-heading__timespan">{children}</h4>
  </div>
)

export default CardHeading