import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const HeaderSizeMapping = {
  small: 3,
  medium: 2,
  large: 1
};

function Text({ children, heading, size }) {
  const Header = `h${HeaderSizeMapping[size]}`;

  return heading ? (
    <Header>{children}</Header>
  ) : (
    <p className={size}>{children}</p>
  );
}

Text.propTypes = {
  heading: PropTypes.bool,
  size: PropTypes.string
};

Text.defaultProps = {
  heading: false,
  size: 'medium'
};

export default Text;
