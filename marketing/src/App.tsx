import React from 'react';
import type { FC, ReactElement } from 'react';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import Landing from './Landing';
import Pricing from './Pricing';
import type { BrowserHistory } from 'history';
import './App.scss';

const App: FC<{ history: BrowserHistory }> = ({ history }): ReactElement => {
  return (
    <HistoryRouter history={history}>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Landing />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
        </Routes>
      </React.Fragment>
    </HistoryRouter>
  );
};

export default App;
