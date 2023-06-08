import React, { FC } from 'react';
import { Button, Form, Input, Tooltip } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginProps } from '../../../pages/LoginPage/types';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import './LoginForm.css';

const LoginForm: FC = () => {
  const { handleSubmit, setValue } = useForm<ILoginProps>();

  const handleChangeNick = (event: React.ChangeEvent<HTMLInputElement>) =>
    setValue('nickName', event.target.value);

  const onSubmit: SubmitHandler<ILoginProps> = (data) => {
    console.log(data);
  };

  return (
    <Form className="login-form" onFinish={handleSubmit(onSubmit)}>
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
  );
};

export default LoginForm;
