import React from 'react'

import './section.scss'

const Section = ({ children, noPadding }) => (
  <section>
    <div className="section-padding">
      {children}
    </div>
    {noPadding}
  </section>
);

export default Section