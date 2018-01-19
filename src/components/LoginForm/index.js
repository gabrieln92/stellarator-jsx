import React from 'react';
import Input from '../Input';
import Button from '../Button';

function LoginForm() {
  var login = null;
  var password = null;

  function onEmailChange(event) {
    login = event.target.value;
  }

  function onPasswordChange(event) {
    password = event.target.value;
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(`Login: ${login}, Password: ${password}`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <Input type="email" placeholder="email" onInputChange={onEmailChange} />
      <Input
        type="password"
        placeholder="password"
        onInputChange={onPasswordChange}
      />
      <Button type="submit">Zaloguj</Button>
    </form>
  );
}

export default LoginForm;
