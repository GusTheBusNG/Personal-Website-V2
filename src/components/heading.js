import React from 'react'
import PropTypes from 'prop-types'

import './heading.scss'

const Heading = ({ variant, children, className = '' }) => (
  <div className={`heading ${className}`}>
    <h1 className={`heading__content ${variant}`}>{children}</h1>
    <div className="heading__line" />
  </div>
)

Heading.propTypes = {
  variant: PropTypes.oneOf(['sm', 'lg']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

export default Heading