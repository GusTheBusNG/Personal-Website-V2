import React from 'react'
import chevron from '../images/chevron.svg'

import './scrollIndicator.scss'

const ScrollIndicator = ({ text, className = '' }) => (
  <div className={`scroll-indicator ${className}`}>
    <p className="scroll-indicator__text">{text}</p>
    <img src={chevron} alt="chevron" className="scroll-indicator__chevron" />
    <img src={chevron} alt="chevron" className="scroll-indicator__chevron" />
  </div>
)

export default ScrollIndicator