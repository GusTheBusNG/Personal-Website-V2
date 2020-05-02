import React from 'react'
import Chevron from '../assets/chevron.svg'
import Text from './text'

import './bullet.scss'

const Bullet = ({ children, className }) => (
  <div className={`bullet ${className}`}>
    <Chevron className="bullet__chevron" />
    <Text>{children}</Text>
  </div>
)

export default Bullet