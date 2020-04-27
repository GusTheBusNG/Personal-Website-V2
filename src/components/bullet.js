import React from 'react'
import chevron from '../images/chevron.svg'
import Text from './text'

import './bullet.scss'

const Bullet = ({ children, className }) => (
  <div className={`bullet ${className}`}>
    <img src={chevron} alt="chevron" className="bullet__chevron" />
    <Text>{children}</Text>
  </div>
)

export default Bullet