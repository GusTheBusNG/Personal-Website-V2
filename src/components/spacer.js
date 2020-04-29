import React from 'react'

const Spacer = ({ variant }) => {
  let height = 0
  switch (variant) {
    case 'sm':
      height = 0.5;
      break;

    case 'md':
      height = 1;
      break;

    case 'lg':
      height = 2;
      break;
    
    case 'xl':
      height = 5;
      break;
  
    default:
      height = 1;
      break;
  }

  return <div style={{ height: `${height}rem`}} />
}

export default Spacer