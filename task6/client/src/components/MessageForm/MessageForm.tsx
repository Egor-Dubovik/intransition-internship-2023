import React, { FC, useEffect, useMemo, useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IMessageProps } from '../../common/types/messagner';
import TextArea from 'antd/es/input/TextArea';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../../features/LoginForm/userSlice';
import SocketIO from '../../socketio/SocketIO';
import Loader from '../Loader/Loader';
import { useGetAllUsersQuery } from '../../features/LoginForm/userAPI';
import './MessageForm.css';

interface IOption {
  value: string;
  label: string;
}

const MessageForm: FC = () => {
  const { handleSubmit, setValue } = useForm<IMessageProps>();
  const { data: users, isLoading } = useGetAllUsersQuery();
  const [options, setOptions] = useState<IOption[]>([]);
  const user = useAppSelector(selectUser);

  const changeRecipient = (value: string[]): void => setValue('to', value);
  const changeSubject = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setValue('topic', event.target.value);
  const changeText = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setValue('text', event.target.value);

  const onSubmit: SubmitHandler<IMessageProps> = (data) => {
    SocketIO.value?.emit('newChat', {
      ...data,
      from: user.data?.nickName,
    });
  };

  useMemo(() => {
    if (users) {
      const userOptions = users.map(({ nickName }) => ({ value: nickName, label: nickName }));
      setOptions(userOptions);
    }
  }, [users]);

  return (
    <>
      <Form className="message-form" onFinish={handleSubmit(onSubmit)}>
        <Form.Item name="" rules={[{ required: true, message: 'Enter recipient' }]}>
          <Select
            mode="tags"
            size="large"
            loading={isLoading}
            placeholder="select recipient"
            onChange={changeRecipient}
            style={{ width: '100%' }}
            options={options}
          />
        </Form.Item>

        <Form.Item name="recipient" rules={[{ required: true, message: 'Enter topic' }]}>
          <Input type="text" size="large" placeholder="Enter topic" onChange={changeSubject} />
        </Form.Item>

        <Form.Item name="text" rules={[{ required: true, message: 'Enter text' }]}>
          <TextArea showCount maxLength={200} onChange={changeText} placeholder="message" />
        </Form.Item>

        <Button className="form__button" type="primary" htmlType="submit">
          send message
        </Button>
      </Form>
    </>
  );
};

export default MessageForm;
