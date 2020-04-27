import React from 'react'

import './technologies.scss'

const Technologies = ({ technologies, className='' }) => (
  <div className={`technologies ${className}`}>
    {
      technologies.map(technology => (
        <p className="technologies__technology">{technology}</p>
      ))
    }
  </div>
)

export default Technologies