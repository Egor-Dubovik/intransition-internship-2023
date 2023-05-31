import React from 'react';
import { Form } from 'react-bootstrap';
import ActionFormGroup from '../../auth/ActionFormGroup/ActionFormGroup';

const LoginForm = (): JSX.Element => {
  return (
    <Form>
      <Form.Floating className="mb-3">
        <Form.Control id="email" type="email" placeholder="email" />
        <label htmlFor="email">email</label>
      </Form.Floating>
      <Form.Floating className="mb-3">
        <Form.Control id="password" type="password" placeholder="password" />
        <label htmlFor="password">password</label>
      </Form.Floating>
      <ActionFormGroup />
    </Form>
  );
};

export default LoginForm;
