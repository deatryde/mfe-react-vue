import React, { useRef, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate } from 'react-router-dom';

interface NavigateProps {
  location: {
    pathname: string;
    search: string;
    hash: string;
  };
}

const MarketingApp: FC = (): ReactElement => {
  const ref = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    mount(ref.current, {
      onNavigate: ({ location: { pathname: nextPathname } }: NavigateProps) => {
        navigate(nextPathname);
      },
    });
  });
  return <div ref={ref}></div>;
};

export default MarketingApp;
