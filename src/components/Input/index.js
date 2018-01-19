import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function generateRandomId() {
  return Math.random()
    .toString(36)
    .substr(2, 10);
}

function Input({
  type,
  name,
  placeholder,
  label,
  value,
  size,
  error,
  onInputChange
}) {
  var randomId = generateRandomId();
  var labelForDisplay = null;
  var errorForDisplay = null;

  if (label) {
    labelForDisplay = <label htmlFor={randomId}>{label}</label>;
  }

  if (error) {
    errorForDisplay = <p className="error">{error}</p>;
  }

  return (
    <div>
      {labelForDisplay}
      <input
        className={`input-${size}`}
        id={randomId}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onInput={onInputChange}
      />
      {errorForDisplay}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
  error: PropTypes.string,
  onInputChange: PropTypes.func
};

Input.defaultProps = {
  type: 'text',
  size: 'medium'
};

export default Input;
