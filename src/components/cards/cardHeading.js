import React from 'react'

import './cardHeading.scss'

const CardHeading = ({ title, company, timespan, className }) => (
  <div className={`card-heading ${className}`}>
    <h2 className="card-heading__title">{title}</h2>
    <div className="card-heading__line" />
    <h2 className="card-heading__company">{company}</h2>
    <h4 className="card-heading__timespan">{timespan}</h4>
  </div>
)

export default CardHeading