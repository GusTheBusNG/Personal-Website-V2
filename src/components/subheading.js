import React from 'react'

import './subheading.scss'

const Subheading = ({ children, className = '' }) => (
  <h3 className={`subheading ${className}`}>{children}</h3>
)

export default Subheading