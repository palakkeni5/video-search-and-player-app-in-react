import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
 
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const API_KEY = 'AIzaSyBAF5MTyVeIGQOWPGsySlAG6hJ_WiW4z2Y'

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
