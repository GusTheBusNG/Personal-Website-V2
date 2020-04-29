import React from 'react'

import './horizontal-container.scss'

const HorizontalContainer = ({
  Card,
  data,
  photos,
  filter
}) => (
  <div className="horizontal-container">
    {
      data.map(value => 
        <Card
          className="horizontal-container__card"
          {...value}
          picture={{ fluid: photos[value.picture.name], ...value.picture }}
        />
      )
    }
  </div>
)

export default HorizontalContainer