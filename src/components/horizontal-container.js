import React from 'react'

import './horizontal-container.scss'

const HorizontalContainer = ({
  Card,
  data,
  photos
}) => (
  <div className="horizontal-container">
    {
      data.map((value, index) => 
        <Card
          key={index}
          className="horizontal-container__card"
          {...value}
          picture={{ fluid: photos[value.picture.name], ...value.picture }}
        />
      )
    }
  </div>
)

export default HorizontalContainer