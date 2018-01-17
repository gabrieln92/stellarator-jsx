import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Notification({ children, type }) {
  return <div className={`notify notify-${type}`}>{children}</div>;
}

Notification.propTypes = {
  type: PropTypes.string
};

Notification.defaultProps = {
  type: 'info'
};

export default Notification;
