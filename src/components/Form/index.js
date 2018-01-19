import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import Button from '../Button';

function Form({ config }) {
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      {config.map((formElement, i) => (
        <Input
          key={i}
          type={formElement.type}
          name={formElement.name}
          placeholder={formElement.placeholder}
          label={formElement.label}
          value={formElement.value}
          size={formElement.size}
          error={formElement.error}
          onInputChange={formElement.onInputChange}
        />
      ))}
      <Button type="submit">Wyślij</Button>
    </form>
  );
}

Form.propTypes = {
  config: PropTypes.array.isRequired
};

export default Form;
