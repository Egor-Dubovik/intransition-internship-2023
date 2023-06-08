import { WechatOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../router/routes.enum';
import './Logo.css';

interface ILogoProps {
  className?: string;
}

const Logo: FC<ILogoProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(ROUTES.LOGIN);
  };

  return (
    <div className={className ? `${className} logo` : 'logo'} onClick={handleLogoClick}>
      <div className="logo__icon">
        <WechatOutlined rev="icon" />
      </div>
      <p className="logo__name">online-chat</p>
    </div>
  );
};

export default Logo;
