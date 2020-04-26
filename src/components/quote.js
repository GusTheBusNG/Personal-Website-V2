import React from 'react'

import './quote.scss'

const Quote = ({ author, children }) => (
  <div className="quote">
    <p className="quote__content">"{children}"</p>
    <p className="quote__author">- {author}</p>
  </div>
)

export default Quote;