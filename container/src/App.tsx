import React, { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './apps/MarketingApp';
import Header from './components/Header';
import './index.d';
import './App.scss';

const App: FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header signedIn={false} onSignOut={() => {}} />
        <MarketingApp />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
