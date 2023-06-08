import React, { FC } from 'react';
import { Button, Form, Input, Tooltip, Typography } from 'antd';
import { useLocation } from 'react-router-dom';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ROUTES } from '../../router/routes.enum';
import { ILoginProps } from './types';
import './LoginPage.css';

const LoginPage: FC = () => {
  const { handleSubmit, setValue } = useForm<ILoginProps>();
  const { pathname } = useLocation();

  const handleChangeNick = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue('nickName', event.target.value);

  const onSubmit: SubmitHandler<ILoginProps> = (data) => {
    console.log(data);
  };

  return (
    <div className="login-page">
      <Typography.Title className="login-page__title" level={1}>
        login
      </Typography.Title>
      <Typography.Text className="login-page__text" strong>
        Hello, enter your name to start chatting
      </Typography.Text>
      <Form className="form" onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="nickName" rules={[{ required: true, message: 'Nickname is required' }]}>
          <Input
            type="text"
            size="large"
            placeholder="Enter your Nickname"
            onChange={handleChangeNick}
            prefix={<UserOutlined rev="icon" />}
            suffix={
              <Tooltip title="at least 3 characters">
                <InfoCircleOutlined rev="icon" style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
          />
        </Form.Item>
        <Button className="form__button" type="primary" htmlType="submit">
          Log in
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
