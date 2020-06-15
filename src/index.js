import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './styles/globalStyles';
import App from './pages/App';
import NotFound from './pages/NotFound'

import * as serviceWorker from './serviceWorker';

//Routes
import { BrowserRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <GlobalStyle />
      <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
      </Switch>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA 
serviceWorker.unregister();
