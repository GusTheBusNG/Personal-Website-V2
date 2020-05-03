import React, { useState } from 'react'

import AnimateHeight from 'react-animate-height'
import CardHeading from './cardHeading'
import Image from '../image'
import Chevron from '../../assets/chevron.svg'

import './mediumCard.scss'

const MediumCard = ({
  title,
  company,
  timespan,
  picture,
  description,
  className
}) => {
  const [height, setHeight] = useState(0)

  return (
    <div className={`card-container ${className}`}>
      <div className="medium-card">
        {
          picture && picture.fluid &&
            <Image
              alt={picture.name}
              className="medium-card__image"
              fluid={picture.fluid}
              link={picture.link}
              outline={false}
            />
        }
        <CardHeading
          className="medium-card__heading"
          title={title}
          company={company}
          timespan={timespan}
          variant="sm"
        />
        { !!description &&
          <button 
            onClick={() => setHeight(height === 0 ? 'auto' : 0)} 
            className={`medium-card__expand ${height === 'auto' ? 'expanded' : 'collapsed'}`}>
            <Chevron
              className="medium-card__expand__image" 
            />
          </button>
        }
      </div>
      { !!description &&
        <AnimateHeight 
          duration={200}
          height={height}
          className={`card-drawer  ${height === 'auto' ? 'expanded' : 'collapsed'}`}>
            <p className="card-drawer__text">{description}</p>
        </AnimateHeight>
      }
    </div>
  )
}

export default MediumCard