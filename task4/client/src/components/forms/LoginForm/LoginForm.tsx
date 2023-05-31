import React from 'react';
import { Form } from 'react-bootstrap';

const LoginForm = (): JSX.Element => {
  return (
    <Form>
      <Form.Floating className="mb-3">
        <Form.Control id="email" type="email" placeholder="name@example.com" />
        <label htmlFor="email">email</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control id="password" type="password" placeholder="name@example.com" />
        <label htmlFor="password">password</label>
      </Form.Floating>
    </Form>
  );
};

export default LoginForm;
