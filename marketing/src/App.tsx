import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import Landing from './Landing';
import Pricing from './Pricing';
import './App.scss';

export default () => {
  return (
    <React.Fragment>
      <StyledEngineProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/pricing' element={<Pricing />}></Route>
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </React.Fragment>
  );
};
