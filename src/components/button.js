import React from 'react'
import PropTypes from 'prop-types'

import './button.scss';
import { Link } from 'gatsby';

export const Button = ({
  link,
  children,
  openNewTab = false,
  className,
  variant
}) => {
  const button = (
    <button className={`button ${variant} ${className}`}>
      {children}
    </button>
  );

  if (openNewTab) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {button}
      </a>
    );
  } else {
    return (
      <Link to={link}>
        {button}
      </Link>
    )
  }
}

Button.propTypes = {
  link: PropTypes.string.isRequired,
  children: PropTypes.string,
  openNewTab: PropTypes.bool
}

export default Button;
