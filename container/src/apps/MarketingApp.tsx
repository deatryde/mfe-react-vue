import React, { useRef, useEffect } from 'react';
import type { FC, ReactElement } from 'react';
import { mount } from 'marketing/MarketingApp';

const MarketingApp: FC = (): ReactElement => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref}></div>;
};

export default MarketingApp;
