import React, { FC, useEffect } from 'react';
import { Button, Form, Input, Select } from 'antd';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IMessageProps } from '../../common/types/message';
import TextArea from 'antd/es/input/TextArea';
import { useAppSelector } from '../../app/store/hooks';
import { selectUser } from '../../features/LoginForm/userSlice';
import SocketIO from '../../socketio/SocketIO';

const MessageForm: FC = () => {
  const { handleSubmit, setValue } = useForm<IMessageProps>();
  const user = useAppSelector(selectUser);

  const changeRecipient = (value: string[]): void => setValue('to', value);
  const changeSubject = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setValue('topic', event.target.value);
  const changeText = (event: React.ChangeEvent<HTMLTextAreaElement>): void =>
    setValue('text', event.target.value);

  const onSubmit: SubmitHandler<IMessageProps> = (data) => {
    console.log(data);

    SocketIO.value?.emit('newChat', {
      ...data,
      from: user.data?.nickName,
    });
  };

  useEffect(() => {
    SocketIO.value?.on('notification', (data) => {
      console.log(`Lera:`, data);
    });
  }, []);

  return (
    <Form className="form" onFinish={handleSubmit(onSubmit)}>
      <Form.Item name="" rules={[{ required: true, message: 'Enter recipient' }]}>
        <Select
          mode="tags"
          allowClear
          size="large"
          placeholder="Select or enter recipient"
          onChange={changeRecipient}
        >
          <Select.Option key="aaa" value="aaa">
            AAA
          </Select.Option>
          <Select.Option key="bbb" value="bbb">
            BBB
          </Select.Option>
        </Select>
      </Form.Item>

      <Form.Item name="recipient" rules={[{ required: true, message: 'Enter topic' }]}>
        <Input type="text" size="large" placeholder="Enter topic" onChange={changeSubject} />
      </Form.Item>

      <Form.Item name="text" rules={[{ required: true, message: 'Enter text' }]}>
        <TextArea showCount maxLength={100} onChange={changeText} />
      </Form.Item>

      <Button className="form__button" type="primary" htmlType="submit">
        send message
      </Button>
    </Form>
  );
};

export default MessageForm;
