import React from 'react';
import type { FC, ReactElement } from 'react';
import {
  Routes,
  Route,
  unstable_HistoryRouter as HistoryRouter,
} from 'react-router-dom';
import type { BrowserHistory } from 'history';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import './App.scss';

const App: FC<{ history: BrowserHistory }> = ({ history }): ReactElement => {
  return (
    <HistoryRouter history={history}>
      <React.Fragment>
        <Routes>
          <Route path='/auth/signin' element={<SignIn />}></Route>
          <Route path='/auth/signup' element={<SignUp />}></Route>
        </Routes>
      </React.Fragment>
    </HistoryRouter>
  );
};

export default App;
