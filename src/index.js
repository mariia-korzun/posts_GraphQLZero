import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux'
import store from './store'
import { ApolloProvider } from '@apollo/client/react';
import client from './client'


import App from './components/app';

import './index.css';

ReactDOM.render(
  <ReduxProvider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ReduxProvider>
  ,
  document.getElementById('root')
);