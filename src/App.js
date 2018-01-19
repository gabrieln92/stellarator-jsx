import React, { Component } from 'react';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Input from './components/Input';
import LoginForm from './components/LoginForm';
import Form from './components/Form';

function handleButtonClick() {
  alert('button clicked');
}

function handleInputChange() {
  alert('input changed');
}

const formConfig = [
  {
    type: 'email',
    name: 'email',
    value: 'example@email.pl'
  },
  {
    type: 'password',
    name: 'password',
    placeholder: 'Enter password',
    size: 'large'
  },
  {
    type: 'text',
    name: 'text',
    placeholder: 'Enter text message',
    size: 'small',
    error: 'Error occured'
  }
];

class App extends Component {
  render() {
    return (
      <div>
        {/*
					Component:
						Button

					Props:
						type (possible values: primary - default / secondary / disabled)
						loading (possible values: true / false)
						onButtonClick (function)
				*/}
        <Button onButtonClick={handleButtonClick}>Hello</Button>

        {/*
					Component:
						Text

					Props:
						heading (possible values: true / false - default)
						size (possible values: small / medium - default / large)
				*/}
        <Text>Example text</Text>

        {/*
					Component:
						Notification

					Props:
						type (possible values: success / danger / info - default)
				*/}

        <Notification>Example notification</Notification>

        {/*
					Component:
						Input

					Props:
						type (email / text - default / phone / textarea / password)
						name (string)
						placeholder (string)
						label (string)
						value (string)
						size (possible values: small / medium - default / large)
						error (string)
						onInputChange (function)
				*/}
        <Input
          type="text"
          name="1234"
          placeholder="place"
          size="large"
          onInputChange={handleInputChange}
        />
        {/*
					Component:
						LoginForm

					Contains:
						Two input fields - email and password
						Submit button

					Expected behavior:
						Login and password should be printed in the console on submit button click
				*/}
        <br />

        <LoginForm />

        {/*
					Component:
						Form

					Props:
						config (array of objects) - required
				*/}

        <br />

        <Form config={formConfig} />
      </div>
    );
  }
}

export default App;
