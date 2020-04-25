import React from 'react'

import './text.scss'

const Text = ({ className = '', children}) => (
  <p className={`text ${className}`}>
    {children}
  </p>
)

export default Text