import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes/routes';
import store from './services/store';

import './assets/index.scss';

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Switch>{renderRoutes(routes)}</Switch>
    </Provider>
  </BrowserRouter>
)

ReactDom.render(Main(), document.getElementById('app'));
