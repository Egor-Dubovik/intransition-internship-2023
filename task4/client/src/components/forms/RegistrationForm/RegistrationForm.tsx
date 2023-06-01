import React, { FC } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

import { IRegistrationParams } from '../../../common/types/user';
import useRedirect from '../../../hooks/useRedirect';
import useRegistration from '../../../hooks/user/useRegistration';
import { ROUTES } from '../../../router/routes.enum';
import ActionFormGroup from '../../auth/ActionFormGroup/ActionFormGroup';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';

const RegistrationForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationParams>();
  const { registration, isLoading, isSuccess, err } = useRegistration();

  useRedirect(isSuccess, ROUTES.MAIN);
  const onSubmit = (userData: IRegistrationParams) => {
    registration(userData);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          {err && <ErrorMessage message={err.response.data.message || err.message} />}

          <Form.Floating className="mb-3">
            <Form.Control
              id="name"
              type="text"
              placeholder="name"
              {...register('name', { required: 'Name is required' })}
            />
            <label htmlFor="name">name</label>
            {errors.name && <ErrorMessage message={errors.name.message as string} />}
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="email"
              type="email"
              placeholder="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter valid email! Example: test@gmail.com',
                },
              })}
            />
            <label htmlFor="email">email</label>
            {errors.email && <ErrorMessage message={errors.email.message as string} />}
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="password"
              type="password"
              placeholder="password"
              {...register('password', { required: 'Entered at least one character' })}
            />
            <label htmlFor="password">password</label>
            {errors.password && <ErrorMessage message={errors.password.message as string} />}
          </Form.Floating>

          <ActionFormGroup />
        </Form>
      )}
    </>
  );
};

export default RegistrationForm;
