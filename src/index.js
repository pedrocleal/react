import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyles from './styles/global'

import App from './components/App/App';

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
)