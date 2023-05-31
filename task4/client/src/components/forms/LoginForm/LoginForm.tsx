import React, { useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ILoginParams } from '../../../common/types/user';
import useLogin from '../../../hooks/useLogin';
import { ROUTES } from '../../../router/routes.enum';
import ActionFormGroup from '../../auth/ActionFormGroup/ActionFormGroup';
import ErrorMessage from '../../ErrorMessage/ErrorMessage';
import Loader from '../../Loader/Loader';

const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginParams>();
  const { login, isLoading, isSuccess, err } = useLogin();
  const navigate = useNavigate();

  const onSubmit = (userData: ILoginParams) => {
    login(userData);
  };

  useEffect(() => {
    if (isSuccess) navigate(ROUTES.MAIN);
  }, [isSuccess, navigate]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          {err && <ErrorMessage message={err.message} />}

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

export default LoginForm;
