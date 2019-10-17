import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './App';
import RootStore from 'stores';

const root = new RootStore();

function Root() {
  return (
    <Provider {...root}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

export default Root;