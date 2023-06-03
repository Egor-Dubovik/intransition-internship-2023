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
    navigate(ROUTES.MAIN);
  };

  return (
    <div className={className ? `${className} logo` : 'logo'} onClick={handleLogoClick}>
      <div className="logo__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 4a4 4 0 0 0-4 4 .5.5 0 0 1-1 0 5 5 0 0 1 5-5 .5.5 0 0 1 0 1zm4.5 3.5a.5.5 0 0 1 .5.5 5 5 0 0 1-5 5 .5.5 0 0 1 0-1 4 4 0 0 0 4-4 .5.5 0 0 1 .5-.5z" />
        </svg>
      </div>
      <p className="logo__name">faker</p>
    </div>
  );
};

export default Logo;
