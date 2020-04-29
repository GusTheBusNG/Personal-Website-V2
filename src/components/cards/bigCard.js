import React from 'react'
import CardHeading from './cardHeading'
import Image from '../image'
import Button from '../button'
import Bullet from '../bullet'
import Technologies from '../technologies'

import './bigCard.scss'

const BigCard = ({
  title,
  company,
  timespan,
  picture,
  location,
  button,
  bullets,
  technologies,
  className
}) => (
  <div className={`big-card ${className}`}>
    <CardHeading
      className="big-card__heading"
      title={title}
      company={company}
      timespan={timespan}
    />
    {
      picture.fluid && 
        <Image
          className="big-card__image"
          fluid={picture.fluid}
          alt={picture.name} 
          link={picture.link}
          outline={false}
        />
    }
    <div className="big-card__bullets">
      {
        bullets.map(bullet => (
          <Bullet key={bullet}>{bullet}</Bullet>
        ))
      }
    </div>
    {
      button && 
        <div className="big-card__button">
          <Button
            link={button.link}
            openNewTab={button.openNewTab}
            variant="sm"
          >{button.text}</Button>
        </div>
    }
    <Technologies 
      className="big-card__technologies" 
      technologies={technologies}
    />
    <p className="big-card__location">{location}</p>
  </div>
)

export default BigCard