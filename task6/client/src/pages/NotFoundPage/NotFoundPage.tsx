import React, { FC } from 'react';
import { Button, Layout, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PREVIOUS_STEP } from '../../common/constant/interection';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  const handleGoBack = (): void => {
    navigate(PREVIOUS_STEP);
  };

  return (
    <Layout.Content className="notfound-page">
      <Typography.Title level={1}>Page wasn&apos;t found</Typography.Title>
      <Button type="primary" onClick={handleGoBack}>
        go back
      </Button>
    </Layout.Content>
  );
};

export default NotFoundPage;
