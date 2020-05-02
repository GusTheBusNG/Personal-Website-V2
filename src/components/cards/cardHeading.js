import React from 'react'

import './cardHeading.scss'

const CardHeading = ({ title, company, timespan, className, variant }) => (
  <div className={`card-heading ${variant} ${className}`}>
    <h2 className="card-heading__company">{company}</h2>
    <h2 className="card-heading__title">{title}</h2>
    <h4 className="card-heading__timespan">{timespan}</h4>
  </div>
)

export default CardHeading