import React, { FC } from 'react';
import './ErrorMessage.css';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: FC<IErrorMessageProps> = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
