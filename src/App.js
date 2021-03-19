import { Router } from './Router/Router';
import React from 'react';
import GlobalState from './Global/GlobalState';

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
