import React from 'react'
import Chevron from '../assets/chevron.svg'

import './scrollIndicator.scss'

const ScrollIndicator = ({ text, className = '' }) => (
  <div className={`scroll-indicator ${className}`}>
    <p className="scroll-indicator__text">{text}</p>
    <Chevron className="scroll-indicator__chevron" />
    <Chevron className="scroll-indicator__chevron" />
  </div>
)

export default ScrollIndicator