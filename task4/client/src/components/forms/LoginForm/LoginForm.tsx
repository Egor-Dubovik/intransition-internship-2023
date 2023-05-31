import React from 'react';
import { Form } from 'react-bootstrap';

const LoginForm = (): JSX.Element => {
  return (
    <Form>
      <Form.Floating className="mb-3">
        <Form.Control id="floatingInputCustom" type="email" placeholder="name@example.com" />
        <label htmlFor="floatingInputCustom">email</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control id="floatingInputCustom" type="password" placeholder="name@example.com" />
        <label htmlFor="floatingInputCustom">password</label>
      </Form.Floating>
    </Form>
  );
};

export default LoginForm;
